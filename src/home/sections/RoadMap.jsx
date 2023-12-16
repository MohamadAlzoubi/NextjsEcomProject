"use client";
import iphone from "../../assets/img/nasdaq.png";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "../../components/Typography/Heading";
import { twMerge } from "tailwind-merge";

function RoadMap({ className }) {
  const [selectedSection, setSelectedSection] = useState("q3");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const data = {
    h1: {
      title: "First half of 2024",
      list: [
        "Full-feature application v1 release: mobile+web applications",
        "Monetization launch",
        "Token launch",
        "Intensive online marketing, referral program, content marketing",
        "20,000 users",
        "Fundraise Seed Round",
      ],
    },
    h2: {
      title: "Second half of 2024",
      list: [
        "Application v2 release: deep ML/AI integration, Big data analytical reporting tool",
        "Break-even point",
        "Alternative monetization hypotheses tests",
        "SNew regions scale-up",
        "100,000 users",
        "Fundraise Series A round",
        "Micro IPO MENA region",
      ],
    },
    q3: {
      title: "Third quarter of 2023",
      list: [
        "Ideation",
        "Team building",
        "Custdev research",
        "Prototype launch",
        "Setting up Unimatch AI LTD, UK",
        "Raised $75,000 in Pre-seed",
        "First users - 192",
      ],
    },
    q4: {
      title: "Fourth quarter of 2023",
      list: [
        "MVP release (mobile application)",
        "Tier1 media publications",
        "5,000 users",
        "Partnership program with accelerators",
        "Pre-seed closure $300,000",
      ],
    },
  };

  const selectedData = data[selectedSection];

  return (
    <div className={twMerge("w-full m-auto mt-20 max-w-[1800px]  xl:mt-[200px]", className)}>
      <div className="flex justify-between mb-4 mx-3">
        <div className="relative">
          <Heading>Roadmap 2024</Heading>
          <div
            className="left-[28px] top-[113px] text-xs xl:text-base xl:left-[44px] xl:top-[138px]"
            style={{ transform: "rotate(270deg)", position: "absolute" }}>
            Result
          </div>
          <div
            className="left-[21px] top-[95px] xl:left-[22.5px] xl:top-[109px]"
            style={{ transform: "rotate(270deg)", position: "absolute" }}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L0.999999 13" stroke="#1A1A1A" />
            </svg>
          </div>
        </div>

        <Image src={iphone} className="w-1/7 h-[75px] hidden xl:block" alt="image" />
      </div>

      <div className="bg-[#eff2ff9e] mx-3 p-6 rounded-2xl">
        <div className="border-[#1A1A1A] flex border-b-2 border-l-2">
          <div className="w-full">
            <div className="grid grid-row-4">
              <div className="w-full flex h-11 xl:h-[100px] border-b-2 border-[#D9D9D9] z-10">
                <div className="w-3/4 h-full" />
                <div
                  className={twMerge(
                    "text-xs xl:text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white relative w-1/4 flex items-center px-4 xl:px-9",
                    selectedSection === "h2" && "bg-[#1A1A1A] text-white"
                  )}
                  onClick={() => handleSectionClick("h2")}>
                  H2 2023
                </div>

                <div className="relative">
                  <div className="bg-[#F0FCFE] h-[350px] w-[350px] absolute rounded-[890px] left-[-917px] z-10 RoadMapBackGround"></div>
                  <div
                    className="left-[-36px] top-[143px] text-xs xl:text-base  xl:left-[-36px] xl:top-[363px]"
                    style={{ transform: "rotate(0deg)", position: "absolute" }}>
                    Time
                  </div>
                  <div
                    className="left-[-6px] top-[170px] xl:left-[-6px] xl:top-[394px]"
                    style={{ transform: "rotate(0deg)", position: "absolute" }}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L0.999999 13" stroke="#1A1A1A" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full flex h-11 xl:h-[100px] border-b-2 border-[#D9D9D9] z-10">
                <div className="w-2/4 h-full" />
                <div
                  className={twMerge(
                    "text-xs xl:text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white relative w-1/4 flex items-center px-4 xl:px-9",
                    selectedSection === "h1" && "bg-[#1A1A1A] text-white"
                  )}
                  onClick={() => handleSectionClick("h1")}>
                  H1 2023
                </div>
              </div>

              <div className="w-full flex h-11 xl:h-[100px] border-b-2 border-[#D9D9D9] z-10">
                <div className="w-1/4 h-full" />
                <div
                  className={twMerge(
                    "text-xs xl:text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white relative w-1/4 flex items-center px-4 xl:px-9",
                    selectedSection === "q4" && "bg-[#1A1A1A] text-white"
                  )}
                  onClick={() => handleSectionClick("q4")}>
                  Q4 2023
                </div>
              </div>

              <div className="w-full flex h-11 xl:h-[100px]">
                <div
                  className={twMerge(
                    "text-xs xl:text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white relative w-1/4 flex items-center px-4 xl:px-9",
                    selectedSection === "q3" && "bg-[#1A1A1A] text-white"
                  )}
                  onClick={() => handleSectionClick("q3")}>
                  Q3 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 xl:flex-row mx-3">
        <h1 className="text-xl xl:w-1/2 xl:text-5xl">{selectedData.title}</h1>

        <div className="mt-4 divide-y xl:w-1/2">
          {selectedData.list.map((item, index) => (
            <div key={index} className="flex gap-3 py-[10px] items-start">
              <p className="bg-[#f3f7ff] px-2 rounded-full">{index + 1}</p>
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
