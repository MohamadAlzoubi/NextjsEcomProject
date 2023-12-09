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

function Card({ icon, text, number, className, transform }) {
  return (
    <div className={twMerge("w-[3105px] h-[3105px] absolute", transform)}>
      <div className="relative w-full h-full">
        <div
          className={twMerge(
            "flex flex-col items-start justify-between text-xl p-8 w-[252px] h-[325px] xl:w-[458px] xl:h-[592px] bg-[#FAFAFA] rounded-[50px] absolute",
            "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
            className
          )}>
          {icon}
          <div className="flex flex-col gap-5">
            <p className="text-[#1A1A1A] text-opacity-40"> {number}</p>
            {/* <p className="text-[#1A1A1A] text-3xl">{text}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const data = [
    { icon: <Send className="w-24 h-24" />, number: "01", text: "Sign up in UniMatch as a startup, investor or expert" },
    {
      icon: <Send className="w-24 h-24" />,
      number: "02",
      text: "Fill out a questionnaire with key questions about project/investments/expertise",
    },
    {
      icon: <Send className="w-24 h-24" />,
      number: "03",
      text: "Fill out a questionnaire with key questions about project/investments/expertise",
    },
    {
      icon: <Send className="w-24 h-24" />,
      number: "04",
      text: "Fill out a questionnaire with key questions about project/investments/expertise",
    },
  ];

  return (
    <div className="flex px-14 pt-10 pb-40 max-w-[1800px] m-auto">
      <div className="bg-black rounded-[28px] xl:rounded-[108px] w-full h-[545px] xl:h-[1026px] flex justify-start flex-col items-center overflow-hidden">
        <Heading className="text-white mt-[54px] xl:mt-[108px]">How it Works</Heading>

        <div className="flex mt-[200px] xl:mt-[400px] w-[600px] xl:h-[500px] relative items-start justify-center">
          <div
            className="absolute w-[3105px] h-[3105px] flex justify-center"
            style={{
              transform: "rotate(-0deg)",
            }}>
            <Card {...data[0]} transform="rotate-[0deg]" className="roa" />
            <Card {...data[1]} transform="rotate-[12deg] xl:rotate-[21deg]" />
            <Card {...data[2]} transform="rotate-[24deg] xl:rotate-[42deg]" className="roa" />
            <Card {...data[3]} transform="rotate-[36deg] xl:rotate-[63deg]" className="roa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
