import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

function getWidth(screen) {
  if (screen === "sm") return 640;
  if (screen === "md") return 768;
  if (screen === "lg") return 1024;
  if (screen === "xl") return 1280;
  if (screen === "2xl") return 1536;
  return 0;
}

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export default function useResponsive(screen = "sm", throttleMilliseconds = 50) {
  // window?.innerWidth > getWidth(screen)

  const [isScreen, setIsScreen] = useState(false);

  const onResize = throttle(() => {
    const width = window.innerWidth || 0;
    const maxWidth = getWidth(screen);

    if (width > maxWidth) setIsScreen(true);
    else setIsScreen(false);
  }, throttleMilliseconds);

  useEffect(() => {
    setIsScreen(window.innerWidth > getWidth(screen));
    window.addEventListener("resize", onResize, true);
    return () => window.removeEventListener("resize", onResize, true);
  }, [setIsScreen, onResize, screen]);

  return isScreen;
}
