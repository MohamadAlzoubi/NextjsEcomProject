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
import { Heading } from "../components/Typography/Heading";

function ButtonInsidePhone({ text, className }) {
  return <button className={twMerge("border rounded-full", className)}> {text} </button>;
}

function Card({ title, body }) {
  return (
    <div className="rounded-xl border text-left px-3 py-[10px]">
      <p className="text-[13px] text-[rgba(47,53,66,0.50)]">{title}</p>
      <p className="text-[13px] text-[#2F3542]"> {body}</p>
    </div>
  );
}

function Founder({ title, body }) {
  return (
    <div className="min-w-fit rounded-xl border text-left px-3 py-[10px]">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-emerald-400 rounded-full " />
        <div className="">
          <p className="text-[13px] text-[#2F3542]">Nick Bereza</p>
          <p className="text-[12px] text-[rgba(47,53,66,0.50)]">Nick Bereza</p>
        </div>
      </div>
      <p className="mt-2 text-[12px] text-[rgba(47,53,66,0.50)] max-w-[186px]">
        Ex COO of a venture capital fund, built 13 companies 3 of which are successfully growing
      </p>
    </div>
  );
}

function What() {
  const data = [
    { text: "Pre-Seed" },
    { text: "Prototype" },
    { text: "Revenue" },
    { text: "AI" },
    { text: "Saas" },
    { text: "Safe" },
    { text: "Web 2/3" },
    { text: "Dating" },
    { text: "Basic" },
    { text: "Founder & team" },
    { text: "Market & Transition" },
  ];

  return (
    <div className="flex px-14 pt-10 pb-40 items-center flex-col max-w-[1800px] m-auto">
      <Heading className="max-w-[305px] xl:max-w-full">Whats inside the app?</Heading>

      <div
        className="mt-4 border rounded-t-[22px] w-full max-w-[400px] pt-4"
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

        <div className="flex mt-9 gap-5 mx-4 flex-col">
          <div className="flex gap-3">
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

          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <ButtonInsidePhone {...data[0]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[0]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[0]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[3]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[4]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[5]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[6]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
            <ButtonInsidePhone {...data[7]} className="py-[5px] px-[10px] text-[13px] text-[#ffffffe6] border-[#ffffff40]" />
          </div>

          <div className="flex">
            <div className="text-[#FFF] text-sm">
              <p className="">
                <span className="font-bold">Project idea:</span> AI app where startups <br />
                and investors find each other
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6 px-4">
          <div className="flex gap-1 items-center">
            <FacebookIcon />
            <p className="text-[#FFF] text-sm">unimatch.ai</p>
          </div>
          <div className="gap-4 flex">
            <FacebookIcon />
            <FacebookIcon />
            <FacebookIcon />
          </div>
        </div>

        <div className="bg-white rounded-t-3xl flex flex-col mt-11 px-4 pt-3 ">
          <div className="flex gap-2 overflow-hidden">
            <ButtonInsidePhone {...data[0]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
            <ButtonInsidePhone {...data[0]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
            <ButtonInsidePhone {...data[0]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
            <ButtonInsidePhone {...data[0]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
            <ButtonInsidePhone {...data[0]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
            <ButtonInsidePhone {...data[0]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
          </div>

          <div className="flex flex-wrap mt-8">
            <h2 className="font-bold">Raised goals</h2>
            <div className="w-full bg-gray-700 group rounded-full mt-5 relative flex justify-center">
              <div className="absolute left-0 bg-green-600 text-xs font-medium text-blue-100 p-0.5 leading-5 rounded-full text-center w-8 group-hover:w-full transition-all h-full" />
              <p className="text-white relative">$3000,000</p>
            </div>
          </div>

          <div className="flex flex-col mt-12">
            <h2 className="font-bold">Raised goals</h2>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <Card title="Min Check Size" body="$25K" />
              <Card title="Min Check Size" body="$25K" />
              <Card title="Min Check Size" body="$25K" />
              <Card title="Min Check Size" body="$25K" />
              <Card title="Min Check Size" body="$25K" />
              <Card title="Min Check Size" body="$25K" />
            </div>
          </div>

          <div className="flex flex-col mt-12">
            <h2 className="font-bold">Founders & Team</h2>
            <div className="flex gap-2 overflow-hidden mt-4">
              <Founder />
              <Founder />
              <Founder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
