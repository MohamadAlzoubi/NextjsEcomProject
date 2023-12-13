"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useRef, useState } from "react";
import Send from "../../assets/svg/Send";

import WorkIcon1 from "../../assets/svg/HowCards/WorkIcon1";
import WorkIcon2 from "../../assets/svg/HowCards/WorkIcon2";
import WorkIcon3 from "../../assets/svg/HowCards/WorkIcon3";
import WorkIcon4 from "../../assets/svg/HowCards/WorkIcon4";
import WorkIcon5 from "../../assets/svg/HowCards/WorkIcon5";

import { Heading } from "../../components/Typography/Heading";

function Card({ icon, text, number, className, transform }) {
  return (
    <div className={twMerge("w-[3105px] h-[3105px] absolute", transform)}>
      <div className="relative w-full h-full">
        <div
          className={twMerge(
            "flex flex-col items-start justify-between text-xl rounded-[35px] p-8 w-[252px] h-[325px] xl:w-[458px] xl:h-[592px] bg-[#FAFAFA] xl:rounded-[50px] absolute transition-all",
            "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
            className
          )}>
          {icon}
          <div className="flex flex-col gap-5">
            <p className="text-[#1A1A1A] text-opacity-40"> {number}</p>
            <p className="text-[#1A1A1A] text-sm xl:text-[28px] xl:leading-7 font-medium">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopWork({ className, rotate = 0 }) {
  const data = [
    { icon: <WorkIcon1 className="w-24 h-24" />, number: "01", text: "Sign up in UniMatch as a startup, investor or expert" },
    {
      icon: <WorkIcon2 className="w-24 h-24" />,
      number: "02",
      text: "Fill out a questionnaire with key questions about project/investments/expertise",
    },
    {
      icon: <WorkIcon3 className="w-24 h-24" />,
      number: "03",
      text: `UniMatch process your data with AI and suggests targeted matches`,
    },
    {
      icon: <WorkIcon4 className="w-24 h-24" />,
      number: "04",
      text: "When the first match happens - the user needs to go through KYC because only thoroughly vetted profiles get access to the match",
    },
    {
      icon: <WorkIcon5 className="w-24 h-24" />,
      number: "05",
      text: "Once the profile has been verified, the user has access to chat with his/her match",
    },
  ];

  return (
    <div className={twMerge("flex max-w-[1700px] m-auto", className)}>
      <div className="bg-black rounded-[28px] xl:rounded-[108px] w-full h-[545px] xl:h-[1000px] 2xl:h-[1100px] flex justify-start flex-col items-center overflow-hidden relative">
        <Heading className="text-white mt-[54px] xl:pt-[108px] relative bottom-[100px]">How it Works</Heading>

        <div className="flex mt-[200px] xl:mt-[250px] 2xl:mt-[400px] 2xl:w-[600px] 2xl:h-[500px] relative items-start justify-center">
          <div className="absolute w-[3105px] h-[3105px] rounded-[3105px] border-2 border-[#ffffff24]" />
          <div
            className="absolute w-[3105px] h-[3105px] flex justify-center"
            style={{
              transform: `rotate(-${rotate}deg)`,
              top: "top: -104px;",
            }}>
            <Card {...data[0]} transform="rotate-[0deg]" className="roa" />
            <Card {...data[1]} transform="rotate-[12deg] xl:rotate-[21deg]" />
            <Card {...data[2]} transform="rotate-[24deg] xl:rotate-[42deg]" className="roa" />
            <Card {...data[3]} transform="rotate-[36deg] xl:rotate-[63deg]" className="roa" />
            <Card {...data[4]} transform="rotate-[48deg] xl:rotate-[84deg]" className="roa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileWork({ className }) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [step, setState] = useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

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
      text: `UniMatch process your data with AI and suggests targeted matches`,
    },
    {
      icon: <Send className="w-24 h-24" />,
      number: "04",
      text: "When the first match happens - the user needs to go through KYC because only thoroughly vetted profiles get access to the match",
    },
  ];

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (step === 0 && isRightSwipe) return;
    if (step === data.length - 1 && isLeftSwipe) return;

    if (isLeftSwipe || isRightSwipe) setState((prev) => (isLeftSwipe ? prev + 1 : prev - 1));
  };

  return (
    <div className={twMerge("flex m-auto", className)}>
      <div className="bg-black rounded-[28px] xl:rounded-[108px] w-full h-[545px] xl:h-[1026px] flex justify-start flex-col items-center overflow-hidden">
        <Heading className="text-white mt-[54px] xl:mt-[108px]">How it Works</Heading>

        <div className="flex mt-[200px] xl:mt-[400px] w-[600px] xl:h-[500px] relative items-start justify-center">
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="absolute w-[252px] h-[325px] -translate-y-1/2 z-[999] xl:hidden"
          />

          <div className="absolute w-[3105px] h-[3105px] rounded-[3105px] border-2 border-[#ffffff24]" />
          <div
            className="absolute w-[3105px] h-[3105px] flex justify-center transition-all"
            style={{
              transform: `rotate(-${step * 12}deg)`,
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
