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
      title: "h1 Third quarter of 2024",
      list: [
        "Ideation ",
        "Customer research",
        "Prototype launch ",
        "Setting up Unimotech AI LTD, UK ",
        "Raised $75,000 in Pre-seed ",
        "First users - 192 ",
      ],
    },
    h2: {
      title: "h2 Third quarter of 2024",
      list: [
        "Ideation ",
        "Customer research",
        "Prototype launch ",
        "Setting up Unimotech AI LTD, UK ",
        "Raised $75,000 in Pre-seed ",
        "First users - 192 ",
      ],
    },
    q3: {
      title: "q3 Third quarter of 2024",
      list: [
        "Ideation ",
        "Customer research",
        "Prototype launch ",
        "Setting up Unimotech AI LTD, UK ",
        "Raised $75,000 in Pre-seed ",
        "First users - 192 ",
      ],
    },
    q4: {
      title: "q4 Third quarter of 2024",
      list: [
        "Ideation ",
        "Customer research",
        "Prototype launch ",
        "Setting up Unimotech AI LTD, UK ",
        "Raised $75,000 in Pre-seed ",
        "First users - 192 ",
      ],
    },
  };

  const selectedData = data[selectedSection];

  return (
    <div className={twMerge("w-full p-9 max-w-[1800px] m-auto mt-[200px]", className)}>
      <div className="flex justify-between">
        <Heading>Roadmap 2024</Heading>
        <Image src={iphone} className="w-1/7 h-[75px] hidden xl:block" alt="image" />
      </div>

      <div className="border-[#1A1A1A] flex border-b-4 border-l-4 mt-14">
        <div className="w-full">
          <div className="grid grid-row-4">
            <div className="w-full flex h-11 xl:h-[100px] border-b-2 border-[#D9D9D9]">
              <div className="w-3/4 h-full" />
              <div
                className={twMerge(
                  "text-xs xl:text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white relative w-1/4 flex items-center px-4 xl:px-9",
                  selectedSection === "h2" && "bg-[#1A1A1A] text-white"
                )}
                onClick={() => handleSectionClick("h2")}>
                H2 2023
              </div>
            </div>

            <div className="w-full flex h-11 xl:h-[100px] border-b-2 border-[#D9D9D9]">
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

            <div className="w-full flex h-11 xl:h-[100px] border-b-2 border-[#D9D9D9]">
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

            {/* <div className="text-xl bg-[#1A1A1A] text-white p-9 relative w-1/4">Q1 2023</div>
            <div className="text-xl bg-[#1A1A1A] text-white p-9 relative w-1/4">Q5 2023</div>
            <div className="text-xl bg-[#1A1A1A] text-white p-9 relative w-1/4">Q4 2023</div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 xl:flex-row">
        <h1 className="text-xl xl:w-1/2 xl:text-5xl">{selectedData.title}</h1>

        <div className="mt-4 divide-y xl:w-1/2">
          {selectedData.list.map((item, index) => (
            <div key={index} className="flex gap-3 py-[10px]">
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