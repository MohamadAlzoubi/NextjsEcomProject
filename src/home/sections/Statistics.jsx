"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import React, { useState, useEffect } from "react";
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

const AnimatedNumber = ({ value, duration, isInStat }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInStat) {
      const frameDuration = 1000 / 60; // Assuming 60 fps for smooth animation
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

      return () => clearInterval(counter);
    }
    // This will reset the displayValue to 0 when isInStat is false again if needed.
    // Remove the next line if you do not want to reset the value to 0.
    setDisplayValue(0);
  }, [isInStat, value, duration]);

  return Math.floor(displayValue);
};

function Card({ className, value, text, duration, isInStat, IconComponent }) {
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
          {isInStat && <AnimatedNumber value={value} duration={duration} isInStat={isInStat} />}
          {!isInStat && <span>0{text.includes("%") ? "%" : ""}</span>}
        </div>
        <div className="text-[15px] xl:text-lg">{text}</div>
      </div>
    </div>
  );
}

function Desktop({ className, isInStat }) {
  return (
    <div className={twMerge("flex w-full bg-white mt-[200px] max-w-[1700px] m-auto", className)} id="section-tracking">
      <div className="text-center text-6xl xl:text-[73px] 2xl:text-[168px] text-[rgba(26,26,26,0.10)] mt-[250px] relative">
        <div className="flex items-center justify-center relative top-[45px]">
          <h1 className="whitespace-nowrap">Unimatch <br/> in numbers</h1>
        </div>
      </div>
      <div className="block z-10 relative">
      <div className="grid grid-cols-4 gap-5 w-full">
        <Card
          value={94.37}
          text="Investors retention rate"
          className="col-span-2 bg-white"
          duration={2000}
          isInStat={isInStat}
          IconComponent={First}
        />

        <Card
          value={2780}
          text="Matches between startups and investors"
          className="bg-white"
          duration={2000}
          isInStat={isInStat}
          IconComponent={Second}
        />

        <Card value={211} text="Startup on board" className="bg-white" duration={2000} isInStat={isInStat} IconComponent={Third} />

        <div className="flex flex-col justify-between p-6 xl:p-11  bg-custom-gradient_stat row-span-2 border rounded-[50px] col-span-2 bg-white">
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

        <Card value={145} text="Investors on board" duration={2000} isInStat={isInStat} IconComponent={Fourth} className="bg-white" />

        <Card value={98} text="Startups retention rates" duration={2000} isInStat={isInStat} IconComponent={Fifth} />

        <Card
          value={2367}
          text="Startup blurb views by Investors"
          className="col-span-2"
          duration={2000}
          isInStat={isInStat}
          IconComponent={Sixth}
        />
      </div>
      </div>
      
    </div>
  );
}

function Mobile({ className }) {
  return (
    <div className={className} id="section-tracking">
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
        className="mySwiper">
        <SwiperSlide className="!h-auto">
          <div className="h-full grid grid-cols-2 gap-[10px]">
            <Card value={2780} number="94.37" text="Investors retention rate" className="col-span-2" duration={2000} />
            <Card value={2780} number="94.37" text="Investors retention rate" duration={2000} />
            <Card value={2780} number="94.37" text="Investors retention rate" duration={2000} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="h-full grid grid-cols-2 gap-[10px]">
            <Card value={2780} number="94.37" text="Investors retention rate" className="col-span-2" duration={2000} />
            <Card value={2780} number="94.37" text="Investors retention rate" duration={2000} />
            <Card value={2780} number="94.37" text="Investors retention rate" duration={2000} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px]">
            <StatisticChart />
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
  return (
    <>
      <div className={className}>
        <Desktop className="hidden xl:block bg-white" isInStat={isInStat} />

        <Mobile className="xl:hidden" />
      </div>
    </>
  );
}

export default Statistics;
