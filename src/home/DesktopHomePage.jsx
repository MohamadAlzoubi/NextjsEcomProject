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
import { ScrollProvider } from "../context/scrollContext";

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
  return <div className={twMerge("flex items-center rounded-xl z-50", className)}>{children}</div>;
}

function Item({ title, index, className }) {
  return (
    <div className={twMerge("flex gap-3 py-[10px] items-start", className)}>
      <p className="bg-[#f3f7ff] px-2 rounded-full">{index}</p>
      <p className="">{title}</p>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function DesktopHomePage() {
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

  const [phoneSlide, setPhoneSlide] = useState(2);
  const [visibleImage, setVisibleImage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updatePhoneSlide = useCallback((numberOfPage) => {
    console.log(numberOfPage);
    if (numberOfPage == 1) setPhoneSlide(1);
    else setPhoneSlide(2);
  }, []);

  function handleScroll() {
    const newScrollPosition = window.scrollY || window.pageYOffset;
    setScrollPosition(newScrollPosition);
    // Adjust the threshold value to determine when the animation should start
    const threshold = 1000; // Change this value based on your design
    const flipOptions = 2000;

    if (newScrollPosition >= flipOptions) {
      updatePhoneSlide(1);
    } else {
      updatePhoneSlide(2);
    }

    // updatePhoneSlide(2)
    console.log(newScrollPosition);
    // Toggle the visibility only when the scroll position passes the threshold
    if (newScrollPosition >= threshold) {
      const imageIndex = Math.floor((newScrollPosition - threshold) / 100);

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
  }, [updatePhoneSlide]);

  return (
    <div className="w-full">
      <Navbar className="relative w-full z-[999] bg-white max-w-[1900px] m-auto" />
      <section className="max-w-[1900px] m-auto">
        <ul className="flex justify-center h-[2719px]">
          <li className="w-[0%] relative top-[1255px]">
            <div className="flex flex-col justify-between right-[-429%] top-[19%] w-[764px] gap-[660px] xl:ml-[123px]" id="section-one">
              <Card className="relative left-0 justify-start">
                <p className="text-[50px] 2xl:text-[65px] leading-[76.16px]">
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
              <Card className="relative left-0 justify-start">
                <div className="flex flex-col gap-80">
                  <p className="text-[68px] leading-[76.16px]">
                    Problems <br /> <span className="text-[#1a1a1a4d]">we address</span>
                  </p>
                  <div className="flex gap-4 bg-white p-4" style={{ backgroundColor: "white" }}>
                    <div className="bg-[#F0FCFE] h-[500px] w-[500px] absolute rounded-[890px] top-[40px] z-10 purpelBackGround"></div>
                    <p className={`text-lg ${phoneSlide === 2 && scrollPosition <= 2000 ? "text-black" : "text-[#00000070]"}`}>Startups</p>
                    <p className={`text-lg ${phoneSlide === 1 && scrollPosition > 2000 ? "text-black" : "text-[#00000070]"}`}>
                      Investors & Experts
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </li>
          <li className="w-[100%]">
            <Banner>
              <div id="animation-container slide-up-animation" className="flex justify-center z-[2] sticky top-[79px] mt-[80px]">
                {imagePaths.map((path, index) => (
                  <Image
                    key={index}
                    src={path}
                    alt={`iphone ${index + 1}`}
                    width={407}
                    className={`animation-frame ${index === 0 ? "slide-up-animation" : ""} ${visibleImage === index ? "block" : "hidden"}`}
                  />
                ))}
              </div>
            </Banner>
          </li>
          <li className="w-[0%] relative top-[737px]">
            <div className="flex flex-col justify-between relative left-[-507px] top-[19%] w-fit gap-[660px]">
              <Card className="relative right-0">
                <p className="text-[28px] leading-[39.2px] w-[446px]">
                  <span className="text-[#1a1a1a4d]">So that</span> The best breakthrough ideas{" "}
                  <span className="text-[#1a1a1a4d]">and technologies emerge faster and</span> drive technological progress{" "}
                  <span className="text-[#1a1a1a4d]">and humanity towards</span> a better future
                </p>
              </Card>

              <Card className="relative right-0">
                <div className="bg-[#F0FCFE] h-[500px] w-[500px] rounded-[890px] z-10 blueBackGround absolute"></div>
                {phoneSlide === 1 ? (
                  <div className="mt-4 xl:w-[410px] z-20 bg-white p-4 rounded-2xl">
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
                  <div className="mt-4 xl:w-[410px] z-20 bg-white p-4 rounded-2xl">
                    <p className="text-[32px] leading-[35.84px] mb-[36px]">Startups</p>
                    <Item
                      title="Searching for suitable investors and filling out briefs to venture capital funds take up to 10 hours per each"
                      index={1}
                    />
                    <Item
                      title="The startup can't get feedback on what to improve in its pitch deck, vision, or business model"
                      index={2}
                    />
                    <Item title="Funds and investors take months to respond or don't respond to messages at all" index={3} />
                    <Item
                      title="The startup teams lack expertise on specific domains: legal, development, tokenomics, and more"
                      index={4}
                    />
                    <Item
                      title="Not clear where to look for smartmoney and other investors, outreaches on Linkedin or email don't work"
                      index={5}
                    />
                  </div>
                )}
              </Card>
            </div>
          </li>
        </ul>
      </section>

      <DesktopWork className="w-full sticky top-0" />

      <DesktopWhat />
      <Statistics className="p-4" />
      <RoadMap />
      <Team />
      <Footer />
    </div>
  );
}

export default DesktopHomePage;
