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
    <div>
      <Navbar />

      <Parallax
        pages={5}
        config={{}}
        onChange={(e) => {
          console.log(e);
        }}>
        <ParallaxLayer className="flex flex-col items-center justify-start px-14 ">
          <div
            className="flex flex-col items-center pt-16 mt-44 w-full rounded-[108px] pb-[414px]"
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
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.25, end: 3 }} className="flex flex-col items-center justify-start" style={{ top: "250px" }}>
          <Image src={iphone} alt="iphone" width={407} className="" />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2 }} speed={1} className="flex items-center justify-around">
          <Card className="">
            So that the best breakthrough ideas and technologies emerge faster and drive technological progress and humanity towards a
            better future
          </Card>
          <Card className="">
            So that the best breakthrough ideas and technologies emerge faster and drive technological progress and humanity towards a
            better future
          </Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2.5, end: 3 }} speed={1.5} className="flex items-center justify-around">
          <Card className="">Problems we adress</Card>
          <Card className="">Startups</Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4 }} speed={1.5} className="flex items-center justify-start">
          <div className="w-20 h-20 bg-red-200"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Banner;
