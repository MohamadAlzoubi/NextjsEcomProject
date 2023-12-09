import { twMerge } from "tailwind-merge";

export function Heading({ children, className }) {
  return <h1 className={twMerge("leading-[44px] text-[40px] xl:text-7xl font-medium text-center", className)}>{children}</h1>;
}
