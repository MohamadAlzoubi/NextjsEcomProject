"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "../components/navbar";
import Circle from "../assets/svg/Circle";
import Button from "../components/Button";
import Send from "../assets/svg/Send";
import iphone from "../assets/img/iphone14.png";
import Footer from "./sections/Footer";
import Team from "./sections/Team";
import { DesktopWhat } from "./sections/What";
import { DesktopWork } from "./sections/Work";
import Statistics from "./sections/Statistics";
import RoadMap from "./sections/RoadMap";
import Banner from "./sections/Banner";

function Card({ children, className }) {
  return <div className={twMerge("flex items-center justify-center rounded-xl z-50", className)}>{children}</div>;
}

function Item({ title, index, className }) {
  return (
    <div className={twMerge("flex gap-3 py-[10px] items-start", className)}>
      <p className="bg-[#f3f7ff] px-2 rounded-full">{index}</p>
      <p className="">{title}</p>
    </div>
  );
}

function DesktopHomePage() {
  const parallax = useRef(null);
  const [phoneSlide, setPhoneSlide] = useState(1);
  const [currentPage, setCurrentPage] = useState(-1);
  const rotate = useRef(0);
  const PAGES = 12;

  const updatePhoneSlide = useCallback(() => {
    if (currentPage > 2) setPhoneSlide(1);
    else setPhoneSlide(2);
  }, [currentPage]);

  const rotateWork = useCallback(() => {
    if (currentPage < 3.5) return;
    if (currentPage >= 6) return;
    rotate.current = (currentPage - 3.5) * 25.5;
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = (e) => {
      const height = parallax.current.space;
      const scrollablePages = PAGES - 1; // because you can't scroll past the last page
      const scrollHeight = height * scrollablePages;

      const scrollTop = e.target.scrollTop;
      const percentScrolled = scrollTop / scrollHeight;
      const parallaxPage = Math.round(percentScrolled * scrollablePages * 100) / 100;

      if (parallaxPage !== currentPage) {
        setCurrentPage(parallaxPage);
        updatePhoneSlide();
      }

      rotateWork();
    };

    const container = parallax.current.container.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, rotateWork, updatePhoneSlide]);

  return (
    <div className="w-full">
      <Navbar className="absolute w-full z-[999] bg-white" />
      <p className="fixed z-[999999] top-3 left-1/2 text-8xl -translate-x-1/2">{currentPage}</p>

      <Parallax
        ref={parallax}
        pages={PAGES}
        config={{}}
        innerStyle={{
          marginTop: "132px",
        }}
        onChange={(e) => {
          console.log(e);
        }}>
        <ParallaxLayer className="">
          <Banner />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.25, end: 2.5 }} className="flex flex-col items-center justify-start" style={{ top: "250px" }}>
          <Image src={iphone} alt="iphone" width={400} className="w-[15%]" />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.75, end: 1.2 }} className="flex items-center justify-around relative">
          <Card className="w-[42.5%] absolute left-0 bg-red-200">
            <p className="text-[68px] leading-[76.16px]">
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
          <Card className="w-[42.5%] absolute right-0 bg-red-200">
            <p className="text-[28px] leading-[39.2px] w-[446px]">
              <span className="text-[#1a1a1a4d]">So that</span> The best breakthrough ideas{" "}
              <span className="text-[#1a1a1a4d]">and technologies emerge faster and</span> drive technological progress{" "}
              <span className="text-[#1a1a1a4d]">and humanity towards</span> a better future
            </p>
          </Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.5, end: 2.5 }} className="flex items-center justify-around relative">
          <Card className="w-[42.5%] absolute left-0 bg-red-200">
            <p className="text-[68px] leading-[76.16px]">Problems we adress</p>
          </Card>
          <Card className="w-[42.5%] absolute right-0 bg-red-200">
            {phoneSlide === 1 ? (
              <div className="mt-4 xl:w-1/2">
                <Item
                  title="Searching for suitable investors and filling out briefs to venture capital funds take up to 10 hours per each"
                  index={1}
                />
                <Item title="The startup can't get feedback on what to improve in its pitch deck, vision, or business model" index={2} />
                <Item title="Funds and investors take months to respond or don't respond to messages at all" index={3} />
                <Item title="The startup teams lack expertise on specific domains: legal, development, tokenomics, and more" index={4} />
                <Item
                  title="Not clear where to look for smartmoney and other investors, outreaches on Linkedin or email don't work"
                  index={5}
                />
              </div>
            ) : (
              <p className="">Funk my lIf</p>
            )}
          </Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3.5, end: 6 }} className="flex items-center  relative">
          <DesktopWork className="w-full mt-[150px]" rotate={rotate.current} />
        </ParallaxLayer>

        <ParallaxLayer offset={6.9} className="">
          <DesktopWhat isIn={currentPage > 6.7} />
        </ParallaxLayer>

        <ParallaxLayer offset={7.6} className="">
          <Statistics className="p-4" />
        </ParallaxLayer>

        <ParallaxLayer offset={8.8} className="">
          <RoadMap />
        </ParallaxLayer>

        <ParallaxLayer offset={9.8} className="">
          <Team />
        </ParallaxLayer>

        <ParallaxLayer offset={10.3} className="">
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default DesktopHomePage;
