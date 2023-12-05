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

function Card({ icon, text, number, className, transform }) {
  return (
    <div className={twMerge("w-[1500px] h-[1500px] absolute", transform)}>
      <div className="relative w-full h-full  bg-opacity-25">
        <div
          className={twMerge(
            "flex flex-col items-start justify-between text-xl p-8 w-[180px] h-[300px] bg-[#FAFAFA] rounded-[50px] absolute",
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
    <div className="flex px-14 pt-10 pb-40">
      <div className="bg-black rounded-[100px] w-full h-[1026px] flex justify-start pt-28 flex-col items-center overflow-hidden">
        <h2 className="text-white text-7xl">How it Works</h2>

        <div className="flex mt-28 gap-20 w-[600px] h-[500px] relative items-start justify-center bg-red-200">
          <div
            className="absolute w-[1500px] h-[1500px] flex justify-center"
            style={{
              transform: "rotate(-7deg)",
            }}>
            <Card {...data[0]} transform="rotate-[55deg]" className="roa" />
            <Card {...data[1]} transform="rotate-[25deg]" />
            <Card {...data[2]} transform="rotate-[-10deg]" className="roa" />
            <Card {...data[3]} transform="rotate-[-45deg]" className="roa" />
          </div>
        </div>

        <p className="text-white">sssssssssssss</p>
      </div>
    </div>
  );
}

export default Work;
