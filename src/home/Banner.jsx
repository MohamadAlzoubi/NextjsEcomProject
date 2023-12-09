"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Navbar from "../components/navbar";
import Circle from "../assets/svg/Circle";
import Button from "../components/Button";
import Send from "../assets/svg/Send";
import iphone from "../assets/img/iphone14.png";
import { Heading } from "../components/Typography/Heading";

function Card({ children, className }) {
  return <div className={twMerge("flex items-center justify-center text-xl p-8 w-1/6 rounded-xl z-50", className)}>{children}</div>;
}

function Banner() {
  return (
    <div className="px-2">
      <div
        className="flex flex-col items-center pt-16 w-full rounded-[28px] xl:rounded-[108px] pb-[414px] "
        style={{ background: "linear-gradient(-45deg, #f1fbfe, #eff2ff, #f1fbfe, #eff2ff)" }}>
        <div className="flex flex-col ">
          <Heading>AI app where startups</Heading>
          <Heading>and investors find each other</Heading>
        </div>

        <div className="flex text-2xl mt-8 items-center flex-wrap justify-center">
          <p className="text-center">
            <span className="text-[#1a1a1a4d]"> It&apos;s like</span> Tinder <Circle className="mx-2 inline-flex" /> LinkedIn{" "}
          </p>
          <p className="text-center">
            <span className="text-[#1a1a1a4d]">for the</span> venture capital sector
          </p>
        </div>

        <div className="mt-14 flex gap-2">
          <Button variant="dark" text="Invest" icon={<Send className="fill-white" />} />
          <Button variant="dark" text="Invest" icon={<Send className="fill-white" />} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
