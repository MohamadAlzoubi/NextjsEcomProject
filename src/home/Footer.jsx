"use client";
import React from "react";
import ArrowButton from "../assets/svg/ArrowButton";
import Button from "../components/Button";
import Send from "../assets/svg/Send";

function Footer() {
  return (
    <div className="bg-[#1A1A1A] rounded-[100px] my-[54px] max-w-[1800px] m-auto py-20 px-20">
      <div className="bg-white text-center rounded-[70px] py-20">
        <h1 className="text-[66px]">Unimatch is raising Pre-seed</h1>
        <p className="text-[#1A1A1A] text-3xl w-1/2 mx-auto mt-11">
          Join our mission and <span className="text-[#1a1a1a61]">become a shareholder in</span> Unimatch{" "}
          <span className="text-[#1a1a1a61]">and the</span> future unicorn <span className="text-[#1a1a1a61]">that is disrupting the</span>
          venture <span className="text-[#1a1a1a61]">capital industry</span>
        </p>
        <div className="flex justify-center mt-16 ">
          <div className="flex bg-[#1A1A1A] items-center rounded-full pl-4 py-2 gap-5 pr-2">
            <button className="text-white text-[28px]">Request Pitch Deck</button>
            <ArrowButton className={"fill-white"} />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-40">
        <div className="flex flex-col justify-between">
          <p className="text-[#FFF] text-xl">Office Address:</p>
          <p className="text-[#ffffff66] text-xl">7 Bell Yard London England WCA 2JR</p>
          <div className="mt-14 flex gap-2">
            <Button variant="light" text="Invest" icon={<Send className="fill-black" />} />
            <Button variant="light" text="Try it" icon={<Send className="fill-black" />} />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col">
            <div className="text-[#FFF] text-5xl">
              <a>About</a>
            </div>
            <div className="text-[#FFF] text-5xl mt-6">
              <a>About</a>
            </div>
            <div className="text-[#FFF] text-5xl mt-6">
              <a>About</a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[#FFF] text-5xl">
              <a>About</a>
            </div>
            <div className="text-[#FFF] text-5xl mt-6">
              <a>About</a>
            </div>
            <div className="text-[#FFF] text-5xl mt-6">
              <a>About</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
