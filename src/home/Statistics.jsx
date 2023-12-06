"use client";
import React from "react";
import StatIcon from "../assets/svg/StatIcon";



function Statistics() {
  

  return (
    <div className="p-4 h-[1233px] ">
    <div className="flex items-center w-full justify-center">
        <div className="grid grid-cols-4 gap-5">
          <div className=" p-11 bg-custom-gradient_stat border rounded-[50px] col-span-2 h-[411px]">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px] h-[411px]">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px] h-[411px]">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat row-span-2 border rounded-[50px] col-span-2 ">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>

          <div className="p-11 bg-custom-gradient_stat border rounded-[50px] h-[411px]">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px] h-[411px]">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
          <div className="p-11 bg-custom-gradient_stat border rounded-[50px] col-span-2 h-[411px]">
            <StatIcon/>
            <div className="flex flex-col mt-28">
              <div className="text-9xl text-[#1A1A1A]">
                94.37%
              </div>
              <div className="text-lg">Investors retention rate</div>
            </div>
          </div>
        </div>
    </div>
    </div>
    
  );
}

export default Statistics;
