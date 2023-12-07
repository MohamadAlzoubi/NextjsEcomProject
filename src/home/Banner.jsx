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

function Card({ children, className }) {
  return <div className={twMerge("flex items-center justify-center text-xl p-8 w-1/6 rounded-xl z-50", className)}>{children}</div>;
}

function Banner() {
  return (
    <div className="max-w-[1800px] m-auto">
      <div
        className="flex flex-col items-center pt-16 w-full rounded-[108px] mt-8"
        style={{ background: "linear-gradient(-45deg, #f1fbfe, #eff2ff, #f1fbfe, #eff2ff)" }}>
        <div className="flex flex-col ">
          <h1 className="text-7xl font-medium text-[#1A1A1A] text-center">AI app where startups</h1>
          <h1 className="text-7xl font-medium text-[#1A1A1A] text-center">and investors find each other</h1>
        </div>

        <div className="flex text-[#1A1A1A] text-2xl mt-8 items-center">
          <p>
            <span className="text-[#1a1a1a4d]">It's like</span> Tinder
          </p>
          <Circle className="mx-2" />
          <p>
            LinkedIn <span className="text-[#1a1a1a4d]">for the</span> venture capital sector
          </p>
        </div>

        <div className="mt-14 flex gap-2">
          <Button variant="dark" text="Invest" icon={<Send className="fill-white" />} />
          <Button variant="dark" text="Invest" icon={<Send className="fill-white" />} />
        </div>

        <Image src={iphone} alt="iphone" width={407} className="py-10" />
      </div>

      <div className="flex justify-center"></div>
      {/* 
      <Card className="">
        So that the best breakthrough ideas and technologies emerge faster and drive technological progress and humanity towards a better
        future
      </Card>
      <Card className="">
        So that the best breakthrough ideas and technologies emerge faster and drive technological progress and humanity towards a better
        future
      </Card>

      <Card className="">Problems we adress</Card>
      <Card className="">Startups</Card> */}
    </div>
  );
}

export default Banner;
