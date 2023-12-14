import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ className, variant, text, icon , href , onClick}) {
  let style = "";

  switch (variant) {
    case "dark":
      style = "bg-[#1A1A1A] text-white";
      break;
    case "light":
      style = "bg-[#F4F6F5] text-[#1A1A1A] ";
      break;
    default:
      break;
  }

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent default if it's a link but we have an onClick handler
      onClick(e);
    }
  };

  return (
    <a className={twMerge("flex items-center rounded-full px-4 h-11", style, className)} href={href} onClick={handleClick}>
      {text} {icon ? icon : ""}
    </a>
  );
}

export default Button;
