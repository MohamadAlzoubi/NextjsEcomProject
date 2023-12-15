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
import { ScrollProvider } from '../context/scrollContext';

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
  const size = useWindowSize();
  console.log(size)
  let bigScreen = {
    ImageAnimate: {
      start: 1.46,
      end: 1.72,
    },
    PhoneStart: {
      start: 0.25,
      end: 1.64
    },
    HowItWorks: {
      start: 2.4, 
      end: 5,
      startRotating : 2.4,
      endRotating : 4.86
    },
    otherLayers : {
      start : 8,
      animateApp : 4.75, 
      animateStat :4.75
    },
    NumberOfPages : 12
  };

  if (size.height >= 900 && size.height <= 1296){
    console.log('i am here1')
    bigScreen = {
      ImageAnimate: {
        start: 2.18,
        end: 2.25
      },
      PhoneStart: {
        start: 0.25,
        end: 2.18,
        startFlipOption : 2.18,
      },
      HowItWorks: {
        start: 3.2, 
        end: 5.87,
        startRotating : 3.4,
        endRotating : 5.87
      },
      otherLayers : {
        start : 7,
        animateApp : 7, 
        animateStat :8
      },
      NumberOfPages : 14 
    };
  }else if (size.height > 1296) {
    console.log('i am here')
    bigScreen = {
      ImageAnimate: {
        start: 1.46,
        end: 1.53,
      },
      PhoneStart: {
        start: 0.25,
        end: 1.53,
        startFlipOption : 1.53,
      },
      HowItWorks: {
        start : 2.3,
        end: 5,
        startRotating : 2.4,
        endRotating : 4.86
      },
      otherLayers : {
        start : 6,
        animateApp : 4.75, 
        animateStat :6.45
      },
      NumberOfPages : 9
    };
  }

  const parallax = useRef(null);
  const [phoneSlide, setPhoneSlide] = useState(1);
  const [currentPage, setCurrentPage] = useState(-1);
  const rotate = useRef(0);
  const PAGES = bigScreen.NumberOfPages;

  const updatePhoneSlide = useCallback(() => {
    if (currentPage > 1.67) setPhoneSlide(1);
    else setPhoneSlide(2);
  }, [currentPage]);

  const rotateWork = useCallback(() => {
    if (currentPage < bigScreen.HowItWorks.startRotating) return;
    if (currentPage >= bigScreen.HowItWorks.endRotating) return;
    rotate.current = (currentPage - bigScreen.HowItWorks.startRotating) * 25.5;
  }, [currentPage]);

  const animateImages = useCallback(() => {

    const totalImages = 15;
    const startPage = bigScreen.ImageAnimate.start;
    const endPage = bigScreen.ImageAnimate.end;
    const rangePerPage = (endPage - startPage) / totalImages;

    // Determine which image should be visible
    let visibleImageIndex = Math.min(totalImages - 1, Math.max(0, Math.floor((currentPage - startPage) / rangePerPage)));

    // Iterate over all images and set their display property
    const images = document.querySelectorAll(".animation-frame");
    images.forEach((img, index) => {
      img.style.display = index === visibleImageIndex ? "block" : "none";
    });
  }, [currentPage , size]);

  

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
      <p className="fixed z-[999999] top-3 left-1/2 text-8xl -translate-x-1/2">{currentPage}</p>
      <Parallax
      className="bg-red"
        ref={parallax}
        pages={PAGES}
        config={{}}
        innerStyle={{
          // marginTop: "132px",
        }}
        onChange={(e) => {
          console.log(e);
        }}>
        <ParallaxLayer offset={0} className="parallex1">
        <Navbar className="relative w-full z-[999] bg-white max-w-[1700px] m-auto" />
          <section className="max-w-[1700px] m-auto">
            <Banner />
            <div className="flex justify-between mt-[700px]" id="section-one">
              <Card className="w-[42.5%] relative left-0 justify-start">
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
              <Card className="w-[42.5%] relative right-0 justify-end">
                <p className="text-[28px] leading-[39.2px] w-[446px]">
                  <span className="text-[#1a1a1a4d]">So that</span> The best breakthrough ideas{" "}
                  <span className="text-[#1a1a1a4d]">and technologies emerge faster and</span> drive technological progress{" "}
                  <span className="text-[#1a1a1a4d]">and humanity towards</span> a better future
                </p>
              </Card>
            </div>
            <div className="flex justify-between mt-[450px]">
              <Card className="w-[42.5%] relative left-0 justify-start">
                <div className="flex flex-col gap-80">
                  <p className="text-[68px] leading-[76.16px]">
                    Problems <br /> <span className="text-[#1a1a1a4d]">we address</span>
                  </p>
                  <div className="flex gap-4 bg-white p-4" style={{backgroundColor : 'white'}}>
                  <div className="bg-[#F0FCFE] h-[500px] w-[500px] absolute rounded-[890px] z-10 purpelBackGround"></div>
                    <p className={twMerge("text-lg text-[#00000070]", phoneSlide !== "1" && "text-black")}>Startups</p>{" "}
                    <p className={twMerge("text-lg text-[#00000070]", phoneSlide === "1" && "text-black")}>Investors & Experts</p>
                  </div>
                </div>
              </Card>
              
              <Card className="w-[42.5%] relative right-0 justify-end">
              <div className="bg-[#F0FCFE] h-[500px] w-[500px] absolute rounded-[890px] z-10 blueBackGround"></div>
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
          </section>
        </ParallaxLayer>

        <ParallaxLayer
         offset={0.99}
          sticky={{ start: bigScreen.PhoneStart.start,end: bigScreen.PhoneStart.end }}
          className="flex flex-col items-center justify-start parallex2"
          style={{ top: "250px" }}>
          <div id="animation-container slide-up-animation" className="flex justify-center">
            <Image src={phone1} alt="iphone" width={500} className="w-[81%] animation-frame slide-up-animation" style={{ display: "block;" }} />
            <Image src={phone2} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone3} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone4} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone5} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone6} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone7} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone8} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone9} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone10} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone11} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone12} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone13} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone14} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone15} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone16} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
            <Image src={phone17} alt="iphone" width={500} className="w-[81%] animation-frame hidden" style={{ display: "none;" }} />
          </div>
          {/* <Image src={iphone} alt="iphone" width={400} className="w-[15%] " /> */}
        </ParallaxLayer>

        {/* <ParallaxLayer sticky={{ start: 0.7, end: 0.9 }} className="flex items-center justify-between relative m-auto max-w-[1700px] parallex3 relative">
         
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          sticky={{ start: 0.7, end: 1.5 }}
          className="flex items-center justify-between relative m-auto max-w-[1700px]"></ParallaxLayer> */}

        <ParallaxLayer sticky={{ start: bigScreen.HowItWorks.start, end: bigScreen.HowItWorks.end }} className="flex flex-col items-center  relative">
          <DesktopWork className="w-full" rotate={rotate.current} />
          
        </ParallaxLayer>
        <ParallaxLayer offset={bigScreen.otherLayers.start} className="flex flex-col items-center  relative">
          <DesktopWhat isIn={currentPage > bigScreen.otherLayers.animateApp} />
          <Statistics className="p-4" isInStat={currentPage > bigScreen.otherLayers.animateStat} />
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
