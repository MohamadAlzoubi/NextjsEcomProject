"use client";
import React from "react";
import iphone from "../assets/img/nasdaq.png";
import Image from "next/image";

function RoadMap() {
  

  return (
    <div className="w-full mt-36">
      <div className="flex justify-between">
      <h1 className="text-7xl">Roadmap 2024</h1>
         <Image src={iphone}/>
      </div>

<div className="mt-[392px] h-[400px] border-b-4 border-indigo-500 border-l-4 ">
<div className="grid grid-cols-4">
    <div className="text-xl bg-[#1A1A1A] text-white p-9 relative">Q0 2023</div>
    <div className="text-xl bg-[#1A1A1A] text-white p-9 relative top-[-97px]">Q1 2023</div>
    <div className="text-xl bg-[#1A1A1A] text-white p-9 relative top-[-197px]">Q5 2023</div>
    <div className="text-xl bg-[#1A1A1A] text-white p-9 relative top-[-297px]">Q4 2023</div>
</div>
</div>
      

      
        
    </div>
  );
}

export default RoadMap;
