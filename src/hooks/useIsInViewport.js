"use client";

import { useEffect, useMemo, useState } from "react";

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== "undefined") {
      // The code inside brackets will be executed ONLY in browser
      return new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));
    }
    return null;
  }, []);

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
