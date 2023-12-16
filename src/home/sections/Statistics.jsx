"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import React, { useState, useEffect, useRef } from "react";
import StatIcon from "../../assets/svg/StatIcon";
import StatisticChart from "../../assets/svg/StatisticChart";
import { twMerge } from "tailwind-merge";
import Arrow from "../../assets/svg/Arrow";

import First from "../../assets/svg/statistics/First";
import Second from "../../assets/svg/statistics/Second";
import Third from "../../assets/svg/statistics/Third";
import Fourth from "../../assets/svg/statistics/Fourth";
import Fifth from "../../assets/svg/statistics/Fifth";
import Sixth from "../../assets/svg/statistics/Sixth";
import useResponsive from "../../hooks/useResponsive";

const AnimatedNumber = ({ value, duration, number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animatedNumberRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = easeOutExpo(frame / totalFrames);
            setDisplayValue(value * progress);

            if (frame === totalFrames) {
              clearInterval(counter);
            }
          }, frameDuration);

          observer.unobserve(entry.target);
        }
      });
    };

    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    const element = animatedNumberRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={animatedNumberRef}>
      {Math.floor(displayValue)}
      {number}
    </div>
  );
};

function Card({ className, value, text, duration, IconComponent, number }) {
  return (
    <div
      className={twMerge(
        "p-6 xl:p-11 xl:h-[411px] bg-custom-gradient_stat border rounded-[26px] xl:rounded-[50px]",
        "flex flex-col justify-between",
        className
      )}>
      {IconComponent && <IconComponent />}
      <div className="flex flex-col">
        <div className="text-[52px] xl:text-8xl text-[#1A1A1A]">
          <AnimatedNumber value={value} duration={duration} number={number} />
        </div>
        <div className="text-[15px] xl:text-lg">{text}</div>
      </div>
    </div>
  );
}

function Desktop({ className, isInStat }) {
  return (
    <div className={twMerge("flex w-full bg-white mt-[200px] max-w-[1700px] m-auto", className)} id="section-tracking">
      <div className="text-center text-6xl xl:text-[134px] 2xl:text-[168px] text-[rgba(26,26,26,0.10)] mt-[250px] relative">
        <div className="flex items-center justify-center relative top-[45px]">
          <h1 className="whitespace-nowrap">Unimatch in numbers</h1>
        </div>
      </div>
      <div className="block z-10 relative">
        <div className="grid grid-cols-4 gap-5 w-full">
          <Card value={94.37} number="%" text="Investors retention rate" className="col-span-2 bg-white" duration={2000} IconComponent={First} />

          <Card value={2780} text="Matches between startups and investors" className="bg-white" duration={2000} IconComponent={Second} />

          <Card value={211} text="Startup on board" className="bg-white" duration={2000} IconComponent={Third} />

          <div className="flex flex-col justify-between p-6 xl:p-11  bg-custom-gradient_stat row-span-2 border rounded-[50px] col-span-2 bg-white">
            <p>Investors presence</p>
            <div className="flex justify-center">
              <StatisticChart className={"w-[618px]"} />
            </div>

            <div className="flex flex-col justify-center gap-3 mt-3">
              <div className="flex flex-grow justify-center">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#D6C2FF] h-[20px] w-[20px] rounded-md"></div>
                  <div>Angel Investor</div>
                  <div className="bg-[#BAD4FE] h-[20px] w-[20px] rounded-md"></div>
                  <div>VC Fund</div>
                </div>
              </div>
              <div className="flex gap-3 items-center flex-grow justify-center">
                <div className="bg-[#F1E1FE] h-[20px] w-[20px] rounded-md"></div>
                <div>Family Office</div>
                <div className="bg-[#BDEDFE] h-[20px] w-[20px] rounded-md"></div>
                <div>Syndicate</div>
                <div className="bg-[#CBFBE4] h-[20px] w-[20px] rounded-md"></div>
                <div>Other</div>
              </div>
            </div>
          </div>

          <Card value={145} text="Investors on board" duration={2000} IconComponent={Fourth} className="bg-white" />

          <Card value={98} number="%" text="Startups retention rates" duration={2000} IconComponent={Fifth} />

          <Card value={2367} text="Startup blurb views by Investors" className="col-span-2" duration={2000} IconComponent={Sixth} />
        </div>
      </div>
    </div>
  );
}

function Mobile({ className }) {
  return (
    <div className={className} id="section-tracking">
      <div className="text-center text-6xl xl:text-[73px] 2xl:text-[168px] text-[rgba(26,26,26,0.10)] mt-[87px]  xl:mt-[250px] relative">
        <div className="flex items-center justify-center relative top-[18px] xl:top-[45px]">
          <h1 className="whitespace-nowrap">
            Unimatch <br /> in numbers
          </h1>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
          el: ".swiper-pagination-statics",
        }}
        navigation={{
          prevEl: ".prev-statics",
          nextEl: ".next-statics",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper z-10 bg-white">
        <SwiperSlide className="!h-auto">
          <div className="h-full grid grid-cols-2 gap-[10px]">
            <Card value={2780} number="" text="Matches between startups and investors" className="col-span-2" duration={2000} />
            <Card value={211} number="" text="Startup on board" duration={2000} />
            <Card value={145} number="" text="Investors on board" duration={2000} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="h-full grid grid-cols-2 gap-[10px]">
            <Card value={94.37} number="%" text="Investors retention rate" className="col-span-2" duration={2000} />
            <Card value={121} number="" text="Startup blurb views by Investors" duration={2000} />
            <Card value={98} number="%" text="Startups retention rates" duration={2000} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px]">
            <StatisticChart isMobile />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex mt-6 gap-10">
        <div className="w-full relative flex items-center justify-center">
          <div
            className="!top-1/2 -translate-y-1/2 swiper-pagination-statics rounded-full overflow-hidden"
            style={{
              "--swiper-pagination-color": "black",
            }}></div>
        </div>

        <div className="flex gap-2">
          <Arrow className="prev-statics cursor-pointer w-[52px] h-[48px]" />
          <Arrow className="next-statics cursor-pointer -scale-x-100 w-[52px] h-[48px]" />
        </div>
      </div>
    </div>
  );
}

function Statistics({ className, isInStat }) {
  const xl = useResponsive("xl");

  return (
    <>
      <div className={className}>{xl ? <Desktop className="hidden xl:block bg-white" /> : <Mobile className="xl:hidden" />}</div>
    </>
  );
}

export default Statistics;
