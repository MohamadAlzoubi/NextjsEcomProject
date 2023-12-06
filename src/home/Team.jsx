"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Emp1 from "../assets/img/emp1.png";
import Company from "../assets/img/company.png";
import Image from "next/image";

import "swiper/css";

const Team = () => {
  const swiperRef = useRef(null);

  // Click handlers for navigation arrows
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="w-full mt-[309px] p-4">
      <div className="flex justify-between mb-[54px]">
        <h1 className="text-6xl text-[#1A1A1A]">C-level team</h1>
        <div className="flex">
          <img src="./images/arrow-left.png" alt="" onClick={goPrev} />
          <img src="./images/arrow-right.png" alt="" onClick={goNext} />
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          414: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FAFAFA] rounded-[50px] p-8">
            <div>
              <Image src={Emp1} alt="Company Logo" className="w-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
                <h2 className="text-4xl text-[#1A1A1A]">Nick Berez</h2>
                <div>
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
                </div>
              </div>
              <div className="flex">
                <Image src={Company} alt="Company Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="control_group">
        <div className="arrows_group">
          <img src="./images/arrow-left.png" className="arrows_stat" alt="" onClick={goPrev} />
          <img src="./images/arrow-right.png" className="arrows_stat" alt="" onClick={goNext} />
        </div>
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Team;
