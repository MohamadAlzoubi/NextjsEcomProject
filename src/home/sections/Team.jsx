"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Emp1 from "../../assets/img/emp1.png";
import Emp2 from "../../assets/img/emp2.png";
import Emp3 from "../../assets/img/emp3.png";
import Emp4 from "../../assets/img/emp4.png";

import Company from "../../assets/img/company.png";
import Company2 from "../../assets/img/company2.png";
import Company3 from "../../assets/img/company3.png";
import Company4 from "../../assets/img/company4.png";

import Image from "next/image";

import "swiper/css";
import { Heading } from "../../components/Typography/Heading";
import Arrow from "../../assets/svg/Arrow";
import { twMerge } from "tailwind-merge";

function Card(ImageComponent, imageProps) {
  return (
    <div className="bg-[#FAFAFA] rounded-[50px] p-8">
      <div>{ImageComponent && <ImageComponent {...imageProps} />}</div>
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
    <div className={twMerge("px-4 xl:px-12 max-w-[1700px] m-auto mt-[200px]", className)}>
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
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" />
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
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp2} alt="Company Logo" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Development</p>
                <h2 className="text-4xl text-[#1A1A1A]">Andrew Lee</h2>
                <div className="hidden xl:block">
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">
                    Graduated from the Hangzhou Dianzi University: Electrical & Hardware Engineering
                  </p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Ex-Investment Director at Perohouse (London)</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Passionate Crypto & blockchain advocate</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Ex Technical PM at Photonics Solution (China)</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company2} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <Image src={Emp3} alt="Company Logo" />

            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Investors relation</p>
                <h2 className="text-4xl text-[#1A1A1A]">Tommy Walker</h2>
                <div className="hidden xl:block">
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Expertise in Partner Network Development for SaaS and AI Products</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Tashkent University: Computer Engineering</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">CTO at Etangle Protocol (London)</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">7+ years experience in Sales Closure</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company3} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp4} alt="Company Logo" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Operation management</p>
                <h2 className="text-4xl text-[#1A1A1A]">Max Bozhko</h2>
                <div className="hidden xl:block">
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">
                    12+ years in IT management as Project and Product manager in international corporations and startups
                  </p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Founder of 2 startups in crypto space</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">9+ years in crypto projects</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company4} alt="Company Logo" />
              </div>
            </div>
          </div>
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
