"use client";

import { twMerge } from "tailwind-merge";
import React, { useEffect, useRef, useState } from "react";
import iphone from "../../assets/img/image2Details.png";
import Battery from "../../assets/svg/Battery";
import Cards from "../../assets/svg/Cards";
import InsideLogo from "../../assets/svg/InsideLogo";

import FacebookIcon from "../../assets/svg/InsideWhatPhone/FacebookIcon";
import Verified from "../../assets/svg/InsideWhatPhone/Verified";
import MsgIcon from "../../assets/svg/InsideWhatPhone/MsgIcon";
import BandCamp from "../../assets/svg/InsideWhatPhone/BandCamp";
import TeleIcon from "../../assets/svg/InsideWhatPhone/TeleIcon";
import Wifi from "../../assets/svg/InsideWhatPhone/Wifi";
import Signal from "../../assets/svg/InsideWhatPhone/Signal";

import Card1 from "../../assets/svg/InsideWhatPhone/Card1";

import { Heading } from "../../components/Typography/Heading";
import AnimatedCard from "../../components/AnimatedCard";
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

function InsideMobile({ containerRef, numberDisplayRef, number, isIn, className, style }) {
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
          <Signal className={"w-[10px] xl:w-[20px]"}/>
          <Wifi className={"w-[10px] xl:w-[20px]"}/>
          <Battery className={"w-[10px] xl:w-[20px]"}/>
        </div>
      </div>

      <div className="flex mt-9 gap-5 mx-4 flex-col">
        <div className="flex gap-3">
          <InsideLogo className={"w-[10px] xl:w-[20px]"}/>
          <div className="mr">
            <div className="flex">
              <h1 className="text-[#FFF] mr-2 text-xs xl:text-base">Unimatch AI</h1>
              <span>
                <Verified className={"w-[10px] xl:w-[20px]"}/>
              </span>
            </div>
            <p className="text-[#ffffff80] text-xs xl:text-base"> Inc, United Kingdom</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <ButtonInsidePhone
            {...data[0]}
            className="py-[1px] xl:py-[5px] px-[10px]   text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[0]}
            className="py-[1px] xl:py-[5px] px-[10px]   text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[0]}
            className="py-[1px] xl:py-[5px] px-[10px]  text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[3]}
            className="py-[1px] xl:py-[5px] px-[10px]   text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[4]}
            className="py-[1px] xl:py-[5px] px-[10px]   text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[5]}
            className="py-[1px] xl:py-[5px] px-[10px]  text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[6]}
            className="py-[1px] xl:py-[5px] px-[10px]   text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
          <ButtonInsidePhone
            {...data[7]}
            className="py-[1px] xl:py-[5px] px-[10px]   text-[8px] xl:text-[13px] text-[#ffffffe6] border-[#ffffff40]"
          />
        </div>

        <div className="flex">
          <div className="text-[#FFF] text-xs xl:text-sm">
            <p className="">
              <span className="font-bold">Project idea:</span> AI app where startups <br />
              and investors find each other
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6 px-4">
        <div className="flex gap-1 items-center">
          <BandCamp className={"w-[10px] xl:w-[20px]"}/>
          <p className="text-[#FFF] text-xs xl:text-sm">unimatch.ai</p>
        </div>
        <div className="gap-4 flex">
          <TeleIcon className={"w-[10px] xl:w-[20px]"}/>
          <MsgIcon className={"w-[10px] xl:w-[20px]"}/>
          <FacebookIcon className={"w-[10px] xl:w-[20px]"}/>
        </div>
      </div>

      <div className="bg-white rounded-t-3xl flex flex-col mt-11 px-4 pt-3 ">
        <div className="flex gap-2 overflow-hidden">
          <ButtonInsidePhone {...data[8]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
          <ButtonInsidePhone {...data[9]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
          <ButtonInsidePhone {...data[10]} className="min-w-fit text-[#2f35428c] text-sm py-2 px-4" />
        </div>

        <div className="flex flex-wrap mt-8">
          <h2 className="font-bold">Raised goals</h2>
          <div className="w-full bg-gray-700 group rounded-full mt-5 relative flex justify-center">
            <div
              className={twMerge(
                "absolute left-0 bg-green-600 text-xs font-medium text-blue-100 p-0.5 leading-5 rounded-full text-center transition-all h-full duration-1000 w-full",
                 
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
  const [hasScrolled, setHasScrolled] = useState(false);

  

  useEffect(() => {
    let intervalId;

    const handleScroll = () => {
      const targetScrollY = 5000; // The Y position you want to check against
      const currentScrollY = window.scrollY || window.pageYOffset;

      if (currentScrollY >= targetScrollY && !hasScrolled) {
         intervalId = setInterval(() => {
          console.log(number.current);
        
          if (number.current >= 3000) {
            console.log(number.current >= 3000);
            clearInterval(intervalId);
          } else {
            number.current += 10;
            numberDisplayRef.current.innerText = `$${formatNumber(number.current)}`;
          }
        }, 3);
        containerRef.current.scrollTo({ top: 1000, behavior: "smooth" });
        setTimeout(() => {
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }, 1500);

        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
    <div className="bg-[#F0FCFE] h-[500px] w-[500px] rounded-[890px] z-10 blueBackGround absolute"></div>
    <div className={twMerge("flex justify-center flex-col items-center mt-[200px]", className)} id="section-inside">
      <Heading className="max-w-[305px] xl:max-w-full">Whats inside the app?</Heading>
      <div className="relative flex mt-2 w-[400px] h-[400px]">
        <div className="absolute z-50 top-[74px] left-[-74px]" style={{ transform: "skewX(-11deg) skewY(-4deg)" }}>
          <AnimatedCard
            friction={1 / 9}
            className="flex flex-col gap-4 overflow-hidden bg-white p-4 shadow-lg rounded-xl min-w-[251px] w-[251px]">
            <div className="flex gap-2 self-start w-4">
              {/* <Icon className="h-6 w-6 fill-main md:h-8 md:w-8 lg:h-12 lg:w-12" /> */}
              <Card1 />
            </div>
            <div className="">
              <p className="line-clamp-4">AI-powered matchmaking</p>
            </div>
          </AnimatedCard>
        </div>
        <div className="absolute z-50 top-[267px] left-[-129px]" style={{ transform: "skewX(-11deg) skewY(-4deg)" }}>
          <AnimatedCard
            friction={1 / 9}
            className="flex flex-col gap-4 overflow-hidden bg-white p-4 shadow-lg rounded-xl min-w-[251px] w-[251px]">
            <div className="flex gap-2 self-start w-4">
              {/* <Icon className="h-6 w-6 fill-main md:h-8 md:w-8 lg:h-12 lg:w-12" /> */}
              <Card1 />
            </div>
            <div className="">
              <p className="line-clamp-4">OTC secondary market for early-stage equities</p>
            </div>
          </AnimatedCard>
        </div>
        <div className="absolute z-50 top-[364px] left-[241px]" style={{ transform: "skewX(-11deg) skewY(-4deg)" }}>
          <AnimatedCard
            friction={1 / 9}
            className="flex flex-col gap-4 overflow-hidden bg-white p-4 shadow-lg rounded-xl min-w-[251px] w-[251px]">
            <div className="flex gap-2 self-start w-4">
              {/* <Icon className="h-6 w-6 fill-main md:h-8 md:w-8 lg:h-12 lg:w-12" /> */}
              <Card1 />
            </div>
            <div className="">
              <p className="line-clamp-4">AI-powered matchmaking</p>
            </div>
          </AnimatedCard>
        </div>
        <div className="absolute z-50 top-[83px] left-[298px]" style={{ transform: "skewX(-11deg) skewY(-4deg)" }}>
          <AnimatedCard
            friction={1 / 9}
            className="flex flex-col gap-4 overflow-hidden bg-white p-4 shadow-lg rounded-xl min-w-[251px] w-[251px]">
            <div className="flex gap-2 self-start w-4">
              {/* <Icon className="h-6 w-6 fill-main md:h-8 md:w-8 lg:h-12 lg:w-12" /> */}
              <Card1 />
            </div>
            <div className="">
              <p className="line-clamp-4">Ai-powered automated startup scoring</p>
            </div>
          </AnimatedCard>
        </div>
        <Image src={iphone} alt="iphone" width={600} height={750} className="absolute " />
        <InsideMobile
          numberDisplayRef={numberDisplayRef}
          containerRef={containerRef}
          isIn={isIn}
          number={number}
          // className="max-w-[350px] max-h-[700px]"
          style={{
            transform: "skew(-10deg, 355deg) rotate(2deg)",
            height: "599px",
            width: "272px",
            borderRadius: "50px",
            marginTop: "11px",
            marginLeft: "60px",
          }}
        />
      </div>
    </div>
    </>
    
  );

  // return ;
}

export function MobileWhat() {
  const numberDisplayRef = useRef(null);
  const containerRef = useRef(null);
  const number = useRef(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  console.log(numberDisplayRef);

  const isInViewport1 = useIsInViewport(numberDisplayRef);

  useEffect(() => {
    let intervalId;

    if (isInViewport1 && !hasScrolled) {
      intervalId = setInterval(() => {
        if (number.current >= 3000) {
          clearInterval(intervalId);
        }
        number.current += 10;
        numberDisplayRef.current.innerText = `$${formatNumber(number.current)}`;
      }, 3);

      setHasScrolled(true);
    }

    const handleScroll = () => {
      const targetScrollY = 4600; // The Y position you want to check against
      const currentScrollY = window.scrollY || window.pageYOffset;

      if (currentScrollY >= targetScrollY && !hasScrolled) {
        containerRef.current.scrollTo({ top: 1000, behavior: "smooth" });
        setTimeout(() => {
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }, 1200);

        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInViewport1, hasScrolled]);


  return (
    <>

    <div className={twMerge("flex justify-center flex-col items-center mt-[80px] z-20")}>
      <Heading className="max-w-[305px] xl:max-w-full">Whats inside the app?</Heading>
      
      <div className="relative flex mt-2 w-[260px] h-[200px] z-20">
      
        <Cards className={"absolute z-10 h-[322px] w-[139%] left-[-63px] top-[55px]"} />
        <Image src={iphone} alt="iphone" width={600} height={750} className="absolute " />
        <InsideMobile
          numberDisplayRef={numberDisplayRef}
          containerRef={containerRef}
          number={number}
          style={{
            transform: "skew(-10deg, 355deg) rotate(2deg)",
            height: "378px",
            width: "180px",
            borderRadius: "19px",
            marginTop: "11px",
            marginLeft: "39px",
          }}
        />
      </div>
    </div>
    </>
  );
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
