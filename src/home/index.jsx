"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Circle from "../assets/svg/Circle";
import Button from "../components/Button";
import Send from "../assets/svg/Send";
import iphone from "../assets/img/iphone14.png";
import Footer from "./Footer";
import Team from "./Team";
import What from "./What";
import Work from "./Work";
import Statistics from "./Statistics";
import RoadMap from "./RoadMap";
import Banner from "./Banner";

function Card({ children, className }) {
  return <div className={twMerge("flex items-center justify-center text-xl p-8 w-1/6 rounded-xl z-50", className)}>{children}</div>;
}

function HomePage() {
  const parallax = useRef(null);
  const [rotate, setRotate] = useState(0);
  const PAGES = 5;
  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     const height = parallax.current.space;
  //     const scrollablePages = PAGES - 1; // because you can't scroll past the last page
  //     const scrollHeight = height * scrollablePages;

  //     const scrollTop = e.target.scrollTop;
  //     const percentScrolled = scrollTop / scrollHeight;
  //     const currentPage = Math.floor(percentScrolled * scrollablePages);
  //     const currentPageScrollTop = scrollTop - height * currentPage;
  //     const currentPagePercent = currentPageScrollTop / height;

  //     // because the ParallaxLayer below has an `offset` of `0`
  //     console.log(currentPage);
  //     if (currentPage === 0) {
  //       setRotate(currentPagePercent);
  //     }
  //   };

  //   const container = parallax.current.container.current;
  //   container.addEventListener("scroll", handleScroll);

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      {/* <Parallax
        ref={parallax}
        pages={7}
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

        <ParallaxLayer sticky={{ start: 1, end: 2 }} speed={1} className="flex items-center justify-around ">
          <Card className="">
            <div className="text-[#1A1A1A] text-7xl">
              <p>
                <span className="text-[#1a1a1a4d]">We’re disrupting and building</span> a new paradigm
                <span className="text-[#1a1a1a4d]">for VC market</span>
              </p>
            </div>
          </Card>
          <Card className="">
            <div className="text-[#1A1A1A] text-3xl">
              <p>
                <span className="text-[#1a1a1a4d]">So that</span> The best breakthrough ideas
                <span className="text-[#1a1a1a4d]">and technologies emerge faster and</span>
              </p>
              <p>
                and drive technological progress <span className="text-[#1a1a1a4d]">and humanity towards</span> a better future
              </p>
            </div>
          </Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2.5, end: 3 }} speed={1.5} className="flex items-center justify-around ">
          <Card className="">Problems we adress</Card>
          <Card className="">Startups</Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4 }} speed={1.5} className="flex items-center justify-start">
          <div className="w-20 h-20 bg-red-200"></div>
        </ParallaxLayer>
      </Parallax> */}

      <Navbar />
      <Banner />
      <Work />
      <What />
      <Statistics />

      {/*    <RoadMap />
      <Team />
      <Footer /> */}
    </div>
  );
}

export default HomePage;
