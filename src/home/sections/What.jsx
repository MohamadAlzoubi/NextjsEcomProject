"use client";

import { twMerge } from "tailwind-merge";
import React, { useEffect, useRef, useState } from "react";
import iphone from "../../assets/img/image2Details.png";
import Battery from "../../assets/svg/Battery";
import InsideLogo from "../../assets/svg/InsideLogo";
import Verified from "../../assets/svg/Verified";

import FacebookIcon from "../../assets/svg/FacebookIcon";
import { Heading } from "../../components/Typography/Heading";
import useIsInViewport from "../../hooks/useIsInViewport";
import Image from "next/image";

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

function InsideMobile({ containerRef, numberDisplayRef, number, isDone, isIn, className, style }) {
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
    <div
      ref={containerRef}
      className={twMerge("rounded-t-[22px] w-full overflow-y-hidden no-scrollbar", className)}
      style={{
        background: "linear-gradient(153deg, #2F3542 0%, #18243D 100%)",
        ...style,
      }}>
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="text-[#FFF] gap-1"> 9:41</div>
        <div className="bg-black rounded-full w-[100px] h-[20px]" />
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
            <div
              className={twMerge(
                "absolute left-0 bg-green-600 text-xs font-medium text-blue-100 p-0.5 leading-5 rounded-full text-center w-8 transition-all h-full duration-1000",
                (isDone || isIn) && "w-full"
              )}
            />
            <p className="text-white relative" ref={numberDisplayRef}>
              ${formatNumber(number.current)}
            </p>
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
  );
}

export function DesktopWhat({ isIn, className }) {
  const numberDisplayRef = useRef(null);
  const containerRef = useRef(null);
  const number = useRef(0);
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    if (isDone === false) return;
    containerRef.current.scrollTo({ top: 1000, behavior: "smooth" });
  }, [isDone]);

  useEffect(() => {
    let intervalId;
    if (isIn) {
      intervalId = setInterval(() => {
        if (number.current >= 3000) {
          setDone(true);
          return clearInterval(intervalId);
        }
        number.current += 10;
        numberDisplayRef.current.innerText = `$${formatNumber(number.current)}`;
      }, 3);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isIn]);

  return (
    <div className={twMerge("flex justify-center flex-col items-center", className)}>
      <Heading className="max-w-[305px] xl:max-w-full">Whats inside the app?</Heading>
      <div className="relative flex mt-2 w-[750px] h-[450px]">
        <Image src={iphone} alt="iphone" width={600} height={750} className="absolute " />
        <InsideMobile
          numberDisplayRef={numberDisplayRef}
          containerRef={containerRef}
          isDone={isDone}
          isIn={isIn}
          number={number}
          // className="max-w-[350px] max-h-[700px]"
          style={{
            transform: "skew(-10deg, -5deg) rotate(2deg)",
            height: "876px",
            width: "392px",
            borderRadius: "50px",
            marginTop: "26px",
            marginLeft: "95px",
          }}
        />
      </div>
    </div>
  );

  // return ;
}

export function MobileWhat() {
  const numberDisplayRef = useRef(null);
  const containerRef = useRef(null);
  const number = useRef(0);
  const [isDone, setDone] = useState(false);

  const isInViewport1 = useIsInViewport(numberDisplayRef);

  useEffect(() => {
    let intervalId;
    if (isInViewport1) {
      intervalId = setInterval(() => {
        if (number.current >= 3000) {
          setDone(true);
          return clearInterval(intervalId);
        }
        number.current += 10;
        numberDisplayRef.current.innerText = `$${formatNumber(number.current)}`;
      }, 3);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isInViewport1]);

  useEffect(() => {
    if (isDone === false) return;
    containerRef.current.scrollTo({ top: 1000, behavior: "smooth" });
  }, [isDone]);

  return (
    <InsideMobile numberDisplayRef={numberDisplayRef} containerRef={containerRef} isDone={isDone} isIn={isInViewport1} number={number} />
  );
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
