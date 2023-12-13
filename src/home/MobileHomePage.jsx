"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "../components/navbar";
import Circle from "../assets/svg/Circle";
import Button from "../components/Button";
import Send from "../assets/svg/Send";
import iphone from "../assets/img/iphone14.png";
import Footer from "./sections/Footer";
import Team from "./sections/Team";
import { DesktopWhat, MobileWhat } from "./sections/What";
import { MobileWork } from "./sections/Work";
import Statistics from "./sections/Statistics";
import RoadMap from "./sections/RoadMap";
import Banner from "./sections/Banner";
import ProblemSwiper from "./sections/ProblemSwiper";

function Card({ children, className }) {
  return <div className={twMerge("flex items-center justify-start rounded-xl z-50 mx-6 mx", className)}>{children}</div>;
}

function MobileHomePage() {
  return (
    <>
      <Navbar className="sticky top-0 w-full z-[999] bg-white" />

      <Banner className="px-2" />

      <Card className="mt-[420px]">
        <p className="text-[40px] leading-[44.8px]">
          <span className="text-[#1a1a1a4d]">
            We’re disrupting <br /> and building
          </span>
          <br />a new paradigm
          <span className="text-[#1a1a1a4d]">
            <br />
            for VC market
          </span>
        </p>
      </Card>
      <Card className="mt-5">
        <p className="text-[15px] leading-[21px] w-[446px]">
          <span className="text-[#1a1a1a4d]">So that</span> The best breakthrough ideas{" "}
          <span className="text-[#1a1a1a4d]">and technologies emerge faster and</span> drive technological progress{" "}
          <span className="text-[#1a1a1a4d]">and humanity towards</span> a better future
        </p>
      </Card>

      <div className="h-[1800px]">
        <Image src={iphone} alt="iphone" width={400} className="sticky top-[123px] mt-8 px-[50px]" />
      </div>

      <ProblemSwiper className="mt-10 px-4 " />

      <MobileWork className="w-full mt-[80px] px-2" />

      <MobileWhat />

      <Statistics className="p-4" />

      <RoadMap className="p-4" />

      <Team className="p-4" />

      <Footer className="p-4" />
    </>
  );
}

export default MobileHomePage;
