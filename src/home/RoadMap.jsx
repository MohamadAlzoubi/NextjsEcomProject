"use client";
import iphone from "../assets/img/nasdaq.png";
import Image from "next/image";
import React, { useState } from "react";

function RoadMap() {
  const [selectedSection, setSelectedSection] = useState("q3");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const contentMap = {
    h2: (
      <div className="flex justify-between w-full mt-14 justify-start">
        <div className="text-[#1A1A1A] text-5xl w-1/2">Third quarter of 2024</div>
        <div className="flex flex-col w-1/4">
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Ideation </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Customer research</div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Prototype launch </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Setting up Unimotech AI LTD, UK </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Raised $75,000 in Pre-seed </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> First users - 192 </div>
          </div>
        </div>
      </div>
    ),
    h1: (
      <div className="flex justify-between w-full mt-14 justify-start">
        <div className="text-[#1A1A1A] text-5xl w-1/2">Third quarter of 2023 4</div>
        <div className="flex flex-col w-1/4">
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Ideation </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Customer research</div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Prototype launch </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Setting up Unimotech AI LTD, UK </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Raised $75,000 in Pre-seed </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> First users - 192 </div>
          </div>
        </div>
      </div>
    ),
    q4: (
      <div className="flex justify-between w-full mt-14 justify-start">
        <div className="text-[#1A1A1A] text-5xl w-1/2">Third quarter of 2023 6</div>
        <div className="flex flex-col w-1/4">
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Ideation </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Customer research</div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Prototype launch </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Setting up Unimotech AI LTD, UK </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Raised $75,000 in Pre-seed </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> First users - 192 </div>
          </div>
        </div>
      </div>
    ),
    q3: (
      <div className="flex justify-between w-full mt-14 justify-start">
        <div className="text-[#1A1A1A] text-5xl w-1/2">Third quarter of 2023</div>
        <div className="flex flex-col w-1/4">
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Ideation </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Customer research</div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Prototype launch </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]">Setting up Unimotech AI LTD, UK </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> Raised $75,000 in Pre-seed </div>
          </div>
          <div className="flex flex-row border-b-2 border-[#E3E3E3] py-3 gap-4">
            <div class="rounded-full border-2 flex p-3 relative bg-[#F2FCFF]">
              <div class="absolute top-[2px] left-[8px]">4</div>
            </div>
            <div className="text-xl text-[#1A1A1A]"> First users - 192 </div>
          </div>
        </div>
      </div>
    ),
  };
  return (
    <div className="w-full p-9 max-w-[1800px] m-auto mt-[200px]">
      <div className="flex justify-between">
        <h1 className="text-7xl w-1/2">Roadmap 2024</h1>
        <Image src={iphone} className="w-1/7 h-[75px]" />
      </div>

      <div className="border-[#1A1A1A] flex border-b-4  border-l-4 mt-14">
        <div className="w-full">
          <div className="grid grid-row-4">
            <div className="w-full flex">
              <div className="w-3/4 h-full" />
              <div
                className="text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white p-9 relative w-1/4"
                onClick={() => handleSectionClick("h2")}>
                H2 2023
              </div>
            </div>

            <div className="w-full flex border-b-2 border-[#D9D9D9]">
              <div className="w-2/4 h-full" />
              <div
                className="text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white p-9 relative w-1/4"
                onClick={() => handleSectionClick("h1")}>
                H1 2023
              </div>
            </div>

            <div className="w-full flex border-b-2 border-[#D9D9D9]">
              <div className="w-1/4 h-full" />
              <div
                className="text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white p-9 relative w-1/4"
                onClick={() => handleSectionClick("q4")}>
                Q4 2023
              </div>
            </div>

            <div className="w-full flex">
              <div
                className="text-xl bg-[#1a1a1a08] hover:bg-[#1A1A1A] hover:text-white p-9 relative w-1/4"
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
      {contentMap[selectedSection]}
    </div>
  );
}

export default RoadMap;
