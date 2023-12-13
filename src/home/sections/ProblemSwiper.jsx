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

function Item({ title, index, className }) {
  return (
    <div className={twMerge("flex gap-3 py-[10px] items-start", className)}>
      <p className="bg-[#f3f7ff] px-2 rounded-full">{index}</p>
      <p className="">{title}</p>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="text-[15px] mt-4">
      <p className="text-2xl font-medium">{title}</p>
      <Item
        title="Searching for suitable investors and filling out briefs to venture capital funds take up to 10 hours per each"
        index={1}
      />
      <Item title="The startup can't get feedback on what to improve in its pitch deck, vision, or business model" index={2} />
      <Item title="Funds and investors take months to respond or don't respond to messages at all" index={3} />
      <Item title="The startup teams lack expertise on specific domains: legal, development, tokenomics, and more" index={4} />
      <Item title="Not clear where to look for smartmoney and other investors, outreaches on Linkedin or email don't work" index={5} />
    </div>
  );
}

const ProblemSwiper = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-between flex-col">
        <p className="text-[40px] leading-[44.8px] text-[rgba(26,26,26,0.25)]">Problems</p>
        <p className="text-[40px] leading-[44.8px]">we adress</p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
          el: ".swiper-pagination-problem",
        }}
        navigation={{
          prevEl: ".prev-problem",
          nextEl: ".next-problem",
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
          <Card title="Startup" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-[15px] mt-4">
            <p className="text-2xl font-medium">Investors & Experts</p>
            <Item
              title="Hundreds of pitchdecks per month are coming in, most of which are irrelevant and a lot of resource is consumed in processing them"
              index={1}
              className="mt-6"
            />
            <Item
              title="There are lots of scam projects around and you have to spend a lot of time researching applications, gathering information from different sources"
              index={2}
            />
            <Item title="There is no clear and safe infrastructure for the secondary allocations market" index={3} />
            <p className="text-2xl font-medium">Experts</p>
            <Item title="Lack of targeted and solvent leads for services" index={1} className="mt-6" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex mt-6 gap-10 xl:hidden">
        <div className="w-full relative flex items-center justify-center">
          <div
            className="!top-1/2 -translate-y-1/2 swiper-pagination-problem rounded-full overflow-hidden"
            style={{
              "--swiper-pagination-color": "black",
            }}></div>
        </div>

        <div className="flex gap-2">
          <Arrow className="prev-problem cursor-pointer w-[52px] h-[48px]" />
          <Arrow className="next-problem cursor-pointer -scale-x-100 w-[52px] h-[48px]" />
        </div>
      </div>
    </div>
  );
};

export default ProblemSwiper;
