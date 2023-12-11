"use client";

import React from "react";
import ArrowButton from "../../assets/svg/ArrowButton";
import Button from "../../components/Button";
import Send from "../../assets/svg/Send";
import { Heading } from "../../components/Typography/Heading";
import { twMerge } from "tailwind-merge";

function Footer({ className }) {
  return (
    <div className={twMerge("bg-[#1A1A1A] rounded-[28px] xl:rounded-[100px] m-auto p-[10px] xl:p-20 mt-52 mx-2", className)}>
      <div className="bg-white text-center rounded-[28px] xl:rounded-[100px] py-14 xl:py-20 flex flex-col items-center">
        <Heading className="leading-[44.8px]">
          Unimatch <br className="xl:hidden" /> is raising <br />
          Pre-seed
        </Heading>
        <p className="text-[#1A1A1A] text-[17px] xl:text-3xl mx-8 mt-6 xl:mt-11 xl:w-1/2">
          Join our mission and <span className="text-[#1a1a1a61]">become a shareholder in</span> Unimatch{" "}
          <span className="text-[#1a1a1a61]">and the</span> future unicorn <span className="text-[#1a1a1a61]">that is disrupting the</span>
          venture <span className="text-[#1a1a1a61]">capital industry</span>
        </p>
        <div className="flex justify-center mt-8 xl:mt-16">
          <div className="flex bg-[#1A1A1A] items-center rounded-full pl-4 py-2 gap-5 pr-2">
            <button className="text-white xl:text-[28px] text-[14px]">Request Pitch Deck</button>
            <ArrowButton className={"fill-white"} />
          </div>
        </div>
      </div>
      <div className="flex px-6 mt-8 xl:mt-[120px] flex-col xl:flex-row">
        <div className="xl:w-1/2">
          <p className="text-white xl:text-xl">Office Address:</p>
          <p className="text-[#ffffff66] xl:text-xl">7 Bell Yard London England WCA 2JR</p>
          <div className="mt-6 xl:mt-14 flex gap-2">
            <Button variant="light" text="Invest" icon={<Send className="fill-black" />} />
            <Button variant="light" text="Try it" icon={<Send className="fill-black" />} />
          </div>
        </div>

        <div className="xl:w-1/2 mt-9 font-medium text-white text-2xl xl:text-5xl gap-3 grid grid-cols-1 xl:grid-cols-2 xl:m-0">
          <a className="">About</a>
          <a className="">About</a>
          <a className="">About</a>
          <a className="">About</a>
          <a className="">About</a>
          <a className="">About</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;