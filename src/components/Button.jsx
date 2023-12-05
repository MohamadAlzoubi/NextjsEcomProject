import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ className, variant, text, icon }) {
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

  return (
    <button className={twMerge("flex items-center rounded-full px-4 h-11", style, className)}>
      {text} {icon ? icon : ""}
    </button>
  );
}

export default Button;
