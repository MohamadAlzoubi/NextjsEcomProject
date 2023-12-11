"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Emp1 from "../../assets/img/emp1.png";
import Company from "../../assets/img/company.png";
import Image from "next/image";

import "swiper/css";
import { Heading } from "../../components/Typography/Heading";
import Arrow from "../../assets/svg/Arrow";
import { twMerge } from "tailwind-merge";

function Card() {
  return (
    <div className="bg-[#FAFAFA] rounded-[50px] p-8">
      <div>
        <Image src={Emp1} alt="Company Logo" className="w-full" />
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
          <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
          <div className="hidden xl:block">
            <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
            <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
            <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
            <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
            Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
          </button>
          <Image src={Company} alt="Company Logo" />
        </div>
      </div>
    </div>
  );
}

const Team = ({ className }) => {
  return (
    <div className={twMerge("px-4 xl:px-12", className)}>
      <div className="flex justify-between items-center">
        <Heading className="text-start">C-level team</Heading>
        <div className="gap-2 hidden xl:flex">
          <Arrow className="prev-team cursor-pointer w-[52px] h-[48px]" />
          <Arrow className="next-team cursor-pointer -scale-x-100 w-[52px] h-[48px]" />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
          el: ".swiper-pagination-team",
        }}
        navigation={{
          prevEl: ".prev-team",
          nextEl: ".next-team",
        }}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>

        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>

      <div className="flex mt-6 gap-10 xl:hidden">
        <div className="w-full relative flex items-center justify-center">
          <div
            className="!top-1/2 -translate-y-1/2 swiper-pagination-team rounded-full overflow-hidden"
            style={{
              "--swiper-pagination-color": "black",
            }}></div>
        </div>

        <div className="flex gap-2">
          <Arrow className="prev-team cursor-pointer w-[52px] h-[48px]" />
          <Arrow className="next-team cursor-pointer -scale-x-100 w-[52px] h-[48px]" />
        </div>
      </div>
    </div>
  );
};

export default Team;
