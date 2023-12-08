"use client";
import React from "react";
import StatIcon from "../assets/svg/StatIcon";
import StatisticChart from "../assets/svg/StatisticChart";

function Statistics() {
  return (
    <div className="p-4 h-[1233px] max-w-[1800px] m-auto">
      <div className="flex w-full">
        <div className="grid grid-cols-4 gap-5 w-full">
          <div className=" p-11 bg-custom-gradient_stat border rounded-[50px] col-span-2">
            <StatIcon />
            <div className="flex flex-col mt-28">
              <div className="text-xl md:text-8xl text-[#1A1A1A]">94.37%</div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px]">
            <StatIcon />
            <div className="flex flex-col mt-28">
              <div className="text-xl md:text-8xl text-[#1A1A1A]">2780</div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px]">
            <StatIcon />
            <div className="flex flex-col mt-28">
              <div className="text-xl md:text-8xl text-[#1A1A1A]">2780</div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat row-span-2 border rounded-[50px] col-span-2 ">
            <StatisticChart />
          </div>

          <div className="p-11 bg-custom-gradient_stat border rounded-[50px]">
            <StatIcon />
            <div className="flex flex-col mt-28">
              <div className="text-xl md:text-8xl text-[#1A1A1A]">2780</div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px]">
            <StatIcon />
            <div className="flex flex-col mt-28">
              <div className="text-xl md:text-8xl text-[#1A1A1A]">2780</div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px] col-span-2">
            <StatIcon />
            <div className="flex flex-col mt-28">
              <div className="text-xl md:text-8xl text-[#1A1A1A]">2780</div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
