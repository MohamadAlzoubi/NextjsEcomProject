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

import phone1 from "../assets/img/folder/1.png";
import phone2 from "../assets/img/folder/2.png";
import phone3 from "../assets/img/folder/3.png";
import phone4 from "../assets/img/folder/4.png";
import phone5 from "../assets/img/folder/5.png";
import phone6 from "../assets/img/folder/6.png";
import phone7 from "../assets/img/folder/7.png";
import phone8 from "../assets/img/folder/8.png";
import phone9 from "../assets/img/folder/9.png";
import phone10 from "../assets/img/folder/10.png";
import phone11 from "../assets/img/folder/11.png";
import phone12 from "../assets/img/folder/12.png";
import phone13 from "../assets/img/folder/13.png";
import phone14 from "../assets/img/folder/14.png";
import phone15 from "../assets/img/folder/15.png";
import phone16 from "../assets/img/folder/16.png";
import phone17 from "../assets/img/folder/17.png";

function Card({ children, className }) {
  return <div className={twMerge("flex items-center justify-start rounded-xl z-50 mx-6 mx", className)}>{children}</div>;
}

function MobileHomePage() {
  const imagePaths = [
    phone1,
    phone2,
    phone3,
    phone4,
    phone5,
    phone6,
    phone7,
    phone8,
    phone9,
    phone10,
    phone11,
    phone12,
    phone13,
    phone14,
    phone15,
    phone16,
    phone17,
  ];
  const [visibleImage, setVisibleImage] = useState(0);

  function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
  
    // Adjust the threshold value to determine when the animation should start
    const threshold = 2500; // Change this value based on your design
  
    // Toggle the visibility only when the scroll position passes the threshold
    if (scrollPosition >= threshold) {
      const imageIndex = Math.floor((scrollPosition - threshold) / 100);
  
      setVisibleImage(imageIndex);
    } else {
      // If the scroll position is below the threshold, keep the first image visible
      setVisibleImage(0);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className="w-full z-[999] bg-white" />

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
        <div id="animation-container slide-up-animation" className="flex justify-center sticky top-[118px]">
          {imagePaths.map((path, index) => (
            <Image
              key={index}
              src={path}
              alt={`iphone ${index + 1}`}
              width={500}
              className={`w-[81%] animation-frame ${visibleImage === index ? "block" : "hidden"}`}
            />
          ))}

        </div>
      </div>

      <ProblemSwiper className="mt-10 px-4 " />

      <MobileWork className="w-full mt-[80px] px-2" />

      <MobileWhat />

      <Statistics className="p-4 mt-[250px]" />

      <RoadMap className="p-4" />

      <Team className="p-4" />

      <Footer className="p-4" />
    </>
  );
}

export default MobileHomePage;
