"use client";
import React, { useRef, useState } from "react";

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

const employeeData1 = {
  image: <Image src={Emp1} alt="Company Logo" />,
  role: "Founder",
  name: "Nick Berez",
  details: [
    "Built 13 companies, 3 of which are successfully developing",
    "1000+ startups scored as investor in 2022",
    "Raised $8.3 mln of investments",
    "Developed a startup scoring system of 220 parameters",
  ],
  companyLogo: <Image src={Company} alt="Company Logo" />,
};

const employeeData2 = {
  image: <Image src={Emp2} alt="Company Logo" />,
  role: "Development",
  name: "Andrew Lee",
  details: [
    "Graduated from the Hangzhou Dianzi University: Electrical & Hardware Engineering",
    "Ex-Investment Director at Perohouse (London)",
    "Passionate Crypto & blockchain advocate",
    "Ex Technical PM at Photonics Solution (China)",
  ],
  companyLogo: <Image src={Company2} alt="Company Logo" />,
};

const employeeData3 = {
  image: <Image src={Emp3} alt="Company Logo" />,
  role: "Investors relation",
  name: "Tommy Walker",
  details: [
    "Expertise in Partner Network Development for SaaS and AI Products",
    "Tashkent University: Computer Engineering",
    "CTO at Etangle Protocol (London)",
    "7+ years experience in Sales Closure",
  ],
  companyLogo: <Image src={Company3} alt="Company Logo" />,
};

const employeeData4 = {
  image: <Image src={Emp4} alt="Company Logo" />,
  role: "Operation management",
  name: "Max Bozhko",
  details: [
    "12+ years in IT management as Project and Product manager in international corporations and startups",
    "Founder of 2 startups in crypto space",
    "9+ years in crypto projects",
  ],
  companyLogo: <Image src={Company4} alt="Company Logo" />,
};
const EmployeeDetails = ({ employeeData, onClose }) => {
  return (
    <>
      <div
        style={{
          width: "112%",
          height: "972px",
          background: "#30353578",
          bottom: "-14px",
          position: "fixed",
          left: "-18px",
          zIndex: 1,
        }}></div>

      <div className="bg-[#FAFAFA] rounded-t-[28px] p-2 flex flex-col fixed bottom-0 z-[3] items-center left-[1px]">
        {employeeData.image}

        <div className="flex flex-col justify-between p-8">
          <p className="text-[#1a1a1a80] text-xs mt-5">{employeeData.role}</p>
          <h2 className="text-[24px] text-[#1A1A1A]">{employeeData.name}</h2>
          <div className="flex flex-col flex-grow">
            {employeeData.details.map((detail, index) => (
              <p key={index} className="text-[#1A1A1A] opacity-60 pt-3 pb-2">
                {detail}
              </p>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button onClick={onClose} className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
              Hide <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
            </button>
            {employeeData.companyLogo}
          </div>
        </div>
      </div>
    </>
  );
};

const Team = ({ className }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleReadMore = (employeeData) => {
    setSelectedEmployee(employeeData);
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className={twMerge("px-4 xl:px-12  m-auto mt-20 max-w-[1700px] xl:mt-[200px]", className)} id="section-team">
      <div className="flex justify-between items-center">
        <Heading className="text-start">C-level team</Heading>
        <div className="gap-2 hidden xl:flex">
          <Arrow className="prev-team cursor-pointer w-[52px] h-[48px]" />
          <Arrow className="next-team cursor-pointer -scale-x-100 w-[52px] h-[48px]" />
        </div>
      </div>
      {selectedEmployee && <EmployeeDetails employeeData={selectedEmployee} onClose={handleCloseDetails} />}
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
        className="mySwiper mt-7">
        <SwiperSlide className="!h-auto">
          <div className="bg-[#FAFAFA] rounded-[50px] p-4 xl:h-full flex flex-col">
            <div>
              <Image src={Emp1} alt="Company Logo" />
            </div>
            <div className="flex flex-col flex-grow">
              <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
              <h2 className="text-2xl xl:text-4xl text-[#1A1A1A]">Nick Berez</h2>
              <div className="hidden xl:block flex-grow">
                <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Built 13 companies, 3 of which are successfully developing</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">1000+ startups scored as investor in 2022</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">Raised $8.3 mln of investments</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">Developed a startup scoring system of 220 parameters</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReadMore(employeeData1)}
                  className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company} alt="Company Logo" className="w-[11%] xl:w-[16%]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="bg-[#FAFAFA] rounded-[50px] p-4 xl:h-full flex flex-col">
            <div>
              <Image src={Emp2} alt="Company Logo" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#1a1a1a80] text-xs mt-5">Development</p>
              <h2 className="text-2xl xl:text-4xl text-[#1A1A1A]">Andrew Lee</h2>
              <div className="flex flex-col flex-grow">
                <div className="hidden xl:block flex-grow">
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">
                    Graduated from the Hangzhou Dianzi University: Electrical & Hardware Engineering
                  </p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Ex-Investment Director at Perohouse (London)</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Passionate Crypto & blockchain advocate</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Ex Technical PM at Photonics Solution (China)</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReadMore(employeeData2)}
                  className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company2} alt="Company Logo" className="w-[22%] xl:w-[27%]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="bg-[#FAFAFA] rounded-[50px] p-4 xl:h-full flex flex-col">
            <Image src={Emp3} alt="Company Logo" />

            <div className="flex flex-col flex-grow justify-between">
              <div>
                <p className="text-[#1a1a1a80] text-xs mt-5">Investors relation</p>
                <h2 className="text-2xl xl:text-4xl text-[#1A1A1A]">Tommy Walker</h2>
                <div className="flex flex-col flex-grow">
                  <div className="hidden xl:block flex-grow">
                    <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Expertise in Partner Network Development for SaaS and AI Products</p>
                    <p className="text-[#1A1A1A] opacity-60 pb-3">Tashkent University: Computer Engineering</p>
                    <p className="text-[#1A1A1A] opacity-60 pb-3">CTO at Etangle Protocol (London)</p>
                    <p className="text-[#1A1A1A] opacity-60 pb-3">7+ years experience in Sales Closure</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReadMore(employeeData3)}
                  className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company3} alt="Company Logo" className="w-[11%] xl:w-[19%]" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!h-auto">
          <div className="bg-[#FAFAFA] rounded-[50px] p-4 xl:h-full flex flex-col">
            <div>
              <Image src={Emp4} alt="Company Logo" />
            </div>
            <div className="flex flex-col flex-grow justify-between">
            <div>
              <p className="text-[#1a1a1a80] text-xs mt-5">Operation management</p>
              <h2 className="text-2xl xl:text-4xl text-[#1A1A1A]">Max Bozhko</h2>
              <div className="flex flex-col flex-grow">
                <div className="hidden xl:block flex-grow">
                  <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">
                    12+ years in IT management as Project and Product manager in international corporations and startups
                  </p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">Founder of 2 startups in crypto space</p>
                  <p className="text-[#1A1A1A] opacity-60 pb-3">9+ years in crypto projects</p>
                </div>
              </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReadMore(employeeData4)}
                  className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company4} alt="Company Logo" className="w-[22%] xl:w-[27%]" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="bg-[#FAFAFA] rounded-[50px] p-4 xl:h-full flex flex-col">
            <div>
              <Image src={Emp1} alt="Company Logo" />
            </div>
            <div className="flex flex-col flex-grow">
              <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
              <h2 className="text-2xl xl:text-4xl text-[#1A1A1A]">Oleksandr Vinichenko</h2>
              <div className="hidden xl:block flex-grow">
                <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">12+ years of experience in tech companies</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">MBA - ESBS, Valencia</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">Bachelor of Law and master of Law - National University of Kyiv-Mohyla Academy MBA - ESBS, Valencia</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReadMore(employeeData1)}
                  className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company} alt="Company Logo" className="w-[11%] xl:w-[16%]" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="bg-[#FAFAFA] rounded-[50px] p-4 xl:h-full flex flex-col">
            <div>
              <Image src={Emp1} alt="Company Logo" />
            </div>
            <div className="flex flex-col flex-grow">
              <p className="text-[#1a1a1a80] text-xs mt-5">Founder</p>
              <h2 className="text-2xl xl:text-4xl text-[#1A1A1A]">Grigory Gonastarev</h2>
              <div className="hidden xl:block flex-grow">
                <p className="text-[#1A1A1A] opacity-60 pt-4 pb-3">Experienced AI engineer and mathematician</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">M.S. in Computer Science (Harvard), M.S. in Technology Commercialization (UT), B.S. in Applied Mathematics (UM)</p>
                <p className="text-[#1A1A1A] opacity-60 pb-3">Prominent member of the Token Engineering academy and Solana ecosystem</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReadMore(employeeData1)}
                  className="px-4 py-2 border rounded-full flex justify-between items-center gap-4 xl:hidden">
                  Read More <span className="bg-black rounded-full text-white w-[18px] h-[18px] flex items-center justify-center">+</span>
                </button>
                <Image src={Company} alt="Company Logo" className="w-[11%] xl:w-[16%]" />
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
