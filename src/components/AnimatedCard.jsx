"use client";

import { useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

function AnimatedCard({ className, children, friction = 1 / 16, onClick }) {
  const _friction = friction;
  const ref = useRef(null);

  const _mouseMove = useCallback(
    (e) => {
      if (!ref.current) return;

      const { left, width, top, height } = ref.current.getBoundingClientRect();

      const followX = left + width / 2 - e.clientX;
      const followY = top + height / 2 - e.clientY;

      let x = 0;
      let y = 0;
      x += (-followX - x) * _friction;
      y += (followY - y) * _friction;

      ref.current.style.transform = `translate(0%, 0%) perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`;
      ref.current.style.transitionProperty = "unset";
      ref.current.style.transitionTimingFunction = "unset";
      ref.current.style.transitionDuration = "unset";
    },
    [_friction]
  );

  const _mouseLeave = useCallback((e) => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0%, 0%) perspective(600px) rotateY(0deg) rotateX(0deg)";
    ref.current.style.transitionProperty = "all";
    ref.current.style.transitionTimingFunction = "linear";
    ref.current.style.transitionDuration = "150ms";
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.addEventListener("mousemove", _mouseMove);
    currentRef?.addEventListener("mouseleave", _mouseLeave);

    return () => {
      currentRef?.removeEventListener("mousemove", _mouseMove);
      currentRef?.removeEventListener("mouseleave", _mouseLeave);
    };
  }, [_mouseLeave, _mouseMove]);

  return (
    <div
      ref={ref}
      className={twMerge("w-full h-full flex items-center justify-center shadow hover-pointer", className)}
      style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

export default AnimatedCard;
