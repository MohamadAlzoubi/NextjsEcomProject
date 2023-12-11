"use client";

import useResponsive from "../hooks/useResponsive";
import DesktopHomePage from "./DesktopHomePage";
import MobileHomePage from "./MobileHomePage";

function HomePage() {
  const xl = useResponsive("xl");

  return xl ? <DesktopHomePage /> : <MobileHomePage />;
}

export default HomePage;
