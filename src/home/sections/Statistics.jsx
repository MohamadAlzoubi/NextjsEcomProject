"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import React from "react";
import StatIcon from "../../assets/svg/StatIcon";
import StatisticChart from "../../assets/svg/StatisticChart";
import { twMerge } from "tailwind-merge";
import Arrow from "../../assets/svg/Arrow";

function Card({ className, number, text }) {
  return (
    <div
      className={twMerge(
        "p-6 xl:p-11 xl:h-[411px] bg-custom-gradient_stat border rounded-[26px] xl:rounded-[50px]",
        "flex flex-col justify-between",
        className
      )}>
      <StatIcon />
      <div className="flex flex-col">
        <div className="text-[52px] xl:text-8xl text-[#1A1A1A]">{number}</div>
        <div className="text-[15px] xl:text-lg">{text}</div>
      </div>
    </div>
  );
}

function Desktop({ className }) {
  return (
    <div className={twMerge("flex w-full", className)}>
      <div className="grid grid-cols-4 gap-5 w-full">
        <Card number="94.37%" text="Investors retention rate" className="col-span-2" />

        <Card number="2780" text="Investors retention rate" />

        <Card number="2780" text="Investors retention rate" />

        <div className="p-6 xl:p-11 bg-custom-gradient_stat row-span-2 border rounded-[50px] col-span-2 ">
          <StatisticChart />
        </div>

        <Card number="2780" text="Investors retention rate" />

        <Card number="2780" text="Investors retention rate" />

        <Card number="2780" text="Investors retention rate" className="col-span-2" />
      </div>
    </div>
  );
}

function Mobile({ className }) {
  return (
    <div className={className}>
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
            <Card number="94.37" text="Investors retention rate" className="col-span-2" />
            <Card number="94.37" text="Investors retention rate" />
            <Card number="94.37" text="Investors retention rate" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="h-full grid grid-cols-2 gap-[10px]">
            <Card number="94.37" text="Investors retention rate" className="col-span-2" />
            <Card number="94.37" text="Investors retention rate" />
            <Card number="94.37" text="Investors retention rate" />
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

function Statistics({ className }) {
  return (
    <div className={className}>
      <h1 className="text-center text-[73px] 2xl:text-[168px] text-[rgba(26,26,26,0.10)]">Unimatch in numbers</h1>

      <Desktop className="hidden xl:block" />

      <Mobile className="xl:hidden" />
    </div>
  );
}

export default Statistics;
