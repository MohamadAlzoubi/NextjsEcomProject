"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "../components/navbar";
import iphone from "../assets/img/iphone14.png";
import Footer from "./sections/Footer";
import Team from "./sections/Team";
import { DesktopWhat } from "./sections/What";
import { DesktopWork } from "./sections/Work";
import Statistics from "./sections/Statistics";
import RoadMap from "./sections/RoadMap";
import Banner from "./sections/Banner";

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

import Modal from "../components/Modal";

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

  const animateImages = useCallback(() => {
    const totalImages = 15;
    const startPage = 1.53;
    const endPage = 2.5;
    const rangePerPage = (endPage - startPage) / totalImages;

    // Determine which image should be visible
    let visibleImageIndex = Math.min(totalImages - 1, Math.max(0, Math.floor((currentPage - startPage) / rangePerPage)));

    // Iterate over all images and set their display property
    const images = document.querySelectorAll(".animation-frame");
    images.forEach((img, index) => {
      img.style.display = index === visibleImageIndex ? "block" : "none";
    });
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

      animateImages();
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
      <Modal>
        <p>This is modal content!</p>
      </Modal>
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
          <div id="animation-container slide-up-animation" className="flex justify-center">
            <Image src={phone1} alt="iphone" width={500} className="w-[63%] animation-frame" style={{ display: "block;" }} />
            <Image src={phone2} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone3} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone4} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone5} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone6} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone7} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone8} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone9} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone10} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone11} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone12} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone13} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone14} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone15} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone16} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone17} alt="iphone" width={500} className="w-[63%] animation-frame hidden" style={{ display: "none;" }} />
          </div>
          {/* <Image src={iphone} alt="iphone" width={400} className="w-[15%] " /> */}
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.7, end: 1.1 }} className="flex items-center justify-around relative">
          <Card className="w-[42.5%] absolute left-0">
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
          <Card className="w-[42.5%] absolute right-0">
            <p className="text-[28px] leading-[39.2px] w-[446px]">
              <span className="text-[#1a1a1a4d]">So that</span> The best breakthrough ideas{" "}
              <span className="text-[#1a1a1a4d]">and technologies emerge faster and</span> drive technological progress{" "}
              <span className="text-[#1a1a1a4d]">and humanity towards</span> a better future
            </p>
          </Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.5, end: 2.5 }} className="flex items-center justify-around relative">
          <Card className="w-[42.5%] absolute left-0">
            <div className="flex flex-col gap-80">
              <p className="text-[68px] leading-[76.16px]">
                Problems <br /> <span className="text-[#1a1a1a4d]">we address</span>
              </p>
              <div className="flex gap-4">
                <p className={twMerge("text-lg text-[#00000070]", phoneSlide !== "1" && "text-black")}>Startups</p>{" "}
                <p className={twMerge("text-lg text-[#00000070]", phoneSlide === "1" && "text-black")}>Investors & Experts</p>
              </div>
            </div>
          </Card>
          <Card className="w-[42.5%] absolute right-0">
            {phoneSlide === 1 ? (
              <div className="mt-4 xl:w-1/2">
                <p className="text-[32px] leading-[35.84px] mb-[36px]">Investors</p>
                <Item
                  title="Hundreds of pitchdecks per month are coming in, most of which are irrelevant and a lot of resource is consumed in processing them"
                  index={1}
                />
                <Item
                  title="There are lots of scam projects around and you have to spend a lot of time researching applications, gathering information from different sources"
                  index={2}
                />
                <Item title="There is no clear and safe infrastructure for the secondary allocations market" index={3} />
                <p className="text-[32px] leading-[35.84px] mt-[52px] mb-[36px]">Experts</p>
                <Item title="Lack of targeted and solvent leads for services" index={1} />
              </div>
            ) : (
              <div className="mt-4 xl:w-1/2">
                <p className="text-[32px] leading-[35.84px] mb-[36px]">Startups</p>
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
            )}
          </Card>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3.2, end: 6 }} className="flex flex-col items-center  relative">
          <DesktopWork className="w-full mt-[150px]" rotate={rotate.current} />
          <DesktopWhat isIn={currentPage > 6.7} />
          <Statistics className="p-4" isInStat={currentPage > 7.5} />
          <RoadMap />
          <Team />
          <Footer />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={7} className=""></ParallaxLayer> */}

        {/* <ParallaxLayer offset={7.7} className=""></ParallaxLayer>

        <ParallaxLayer offset={8.8} className=""></ParallaxLayer>

        <ParallaxLayer offset={9.8} className=""></ParallaxLayer>

        <ParallaxLayer offset={10.5} className=""></ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default DesktopHomePage;
