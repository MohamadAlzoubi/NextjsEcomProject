"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Navbar from "../components/navbar";
import Circle from "../assets/svg/Circle";
import Button from "../components/Button";
import Send from "../assets/svg/Send";
import Battery from "../assets/svg/Battery";
import InsideLogo from "../assets/svg/InsideLogo";
import Verified from "../assets/svg/Verified";

import FacebookIcon from "../assets/svg/FacebookIcon";
import TeleIcon from "../assets/svg/TeleIcon";
import MsgIcon from "../assets/svg/MsgIcon";

import iphone from "../assets/img/iphone14.png";

function ButtonInsidePhone({ text, className }) {
  return <button className={twMerge("border px-2 rounded-full  border-solid", className)}> {text} </button>;
}

function Card({ text, className }) {
  return <button className={twMerge("border px-2 rounded-full border-[#ffffff40] border-solid", className)}> {text} </button>;
}

function What() {
  const data = [
    {
      text: "Pre-Seed",
    },
    {
      text: "Prototype",
    },
    {
      text: "Revenue",
    },
    {
      text: "AI",
    },
    {
      text: "Saas",
    },
    {
      text: "Safe",
    },
    {
      text: "Web 2/3",
    },
    {
      text: "Dating",
    },
    {
      text: "Basic",
    },
    {
      text: "Founder & team",
    },
    {
      text: "Market & Transition",
    },
  ];

  return (
    <div className="flex px-14 pt-10 pb-40 items-center flex-col max-w-[1800px] m-auto">
      <h2 className="text-black text-7xl">What's inside the app?</h2>

      <div
        className="my-40 border rounded-t-xl w-full max-w-[400px] pt-4"
        style={{
          background: "linear-gradient(153deg, #2F3542 0%, #18243D 100%)",
        }}>
        <div className="flex justify-between items-center px-4">
          <div className="text-[#FFF] gap-1"> 9:41</div>
          <div className="flex">
            <Battery />
            <Battery />
            <Battery />
          </div>
        </div>
        <div className="flex mt-9 gap-3 px-4">
          <InsideLogo />
          <div className="mr">
            <div className="flex">
              <h1 className="text-[#FFF] mr-2">Unimatch AI</h1>
              <span>
                <Verified />
              </span>
            </div>
            <p className="text-[#ffffff80]"> Inc, United Kingdom</p>
          </div>
        </div>
        <div className="flex flex-wrap mt-5 gap-x-2 gap-y-1 px-4">
          <ButtonInsidePhone {...data[0]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[0]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[0]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[3]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[4]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[5]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[6]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
          <ButtonInsidePhone {...data[7]} className="text-[#ffffffe6] text-sm border-[#ffffff40]" />
        </div>

        <div className="flex px-4">
          <div className="text-[#FFF] text-sm">
            <p> Project idea: </p>
            <p className="text-sm text-[#ffffffbf]">
              AI app where startups <br />
              and investors find each other
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6 px-4">
          <div className="flex gap-1">
            <FacebookIcon />
            <p className="text-[#FFF] text-sm">unimatch.ai</p>
          </div>
          <div className="gap-4 flex">
            <FacebookIcon />
            <FacebookIcon />
            <FacebookIcon />
          </div>
        </div>

        <div className="bg-white rounded-t-3xl mt-11 px-4">
          <div className="flex">
            <ButtonInsidePhone {...data[0]} className="text-[#2f35428c] text-sm px-4 py-3 border-[#2f35421f]" />
            <ButtonInsidePhone {...data[0]} className="text-[#2f35428c] text-sm p-4 border-[#2f35421f]" />
            <ButtonInsidePhone {...data[0]} className="text-[#2f35428c] text-sm p-4 border-[#2f35421f]" />
            <ButtonInsidePhone {...data[0]} className="text-[#2f35428c] text-sm p-4 border-[#2f35421f]" />
          </div>

          <div className="flex flex-wrap ">
            <h2>Raised goals</h2>
            <div className="w-full bg-gray-700 group rounded-full mt-5">
              <div className="bg-green-600 text-xs font-medium text-blue-100 p-0.5 leading-5 rounded-full text-center w-0 group-hover:w-full transition-all">
                {" "}
                3000
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2>Raised goals</h2>
            <div class="grid grid-cols-2 gap-4">
              <Card {...data[0]} className="text-[#2f35428c] text-sm p-4" />
              <Card {...data[0]} className="text-[#2f35428c] text-sm p-4" />
              <Card {...data[0]} className="text-[#2f35428c] text-sm p-4" />
              <Card {...data[0]} className="text-[#2f35428c] text-sm p-4" />
              <Card {...data[0]} className="text-[#2f35428c] text-sm p-4" />
              <Card {...data[0]} className="text-[#2f35428c] text-sm p-4" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white relative w-40 h-40 flex justify-center items-center scale-[2.00]"
        style={{
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
        }}>
        <div className="w-40 h-40 rounded-full absolute bg-blue-300" />
        <div className="w-36 h-36 rounded-full absolute bg-white" />
      </div>
    </div>
  );
}

export default What;
