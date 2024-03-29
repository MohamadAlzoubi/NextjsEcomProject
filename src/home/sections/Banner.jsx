"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React, { useState, useEffect } from "react";
import { Heading } from "../../components/Typography/Heading";
import Button from "../../components/Button";
import Send from "../../assets/svg/Send";
import Circle from "../../assets/svg/Circle";
import iphone from "../../assets/img/iphone14.png";
import Modal from "../../components/Modal"; // Import your Modal component

function Banner({ className, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={twMerge("px-6", className)}>
        <div
          className="flex flex-col items-center xl:pt-10 w-full"
          >
            <div className="h-[0] w-full z-[1]">
            <div className="relative w-[100%] max-w-[1900px] h-[805px] m-auto rounded-[30px] xl:rounded-[108px]" style={{ background: "linear-gradient(-45deg, #f1fbfe, #eff2ff, #f1fbfe, #eff2ff)" }}></div>
            </div>
            
          <div className="flex flex-col z-[2] mt-[62px]">
            <Heading className={"text-fade-in"}>AI app where startups</Heading>
            <Heading className={"text-fade-in"}>and investors find each other</Heading>
          </div>

          <div className="flex text-2xl mt-8 items-center flex-wrap justify-center text-fade-in z-[2]">
            <p className="text-center">
              <span className="text-[#1a1a1a4d] "> It&apos;s like</span> Tinder <Circle className="mx-2 inline-flex" /> LinkedIn{" "}
            </p>
            <p className="text-center">
              <span className="text-[#1a1a1a4d]">for the</span> venture capital sector
            </p>
          </div>

          <div className="mt-14 flex gap-2 z-[2]">
            <Button
              variant="dark"
              text="Try it"
              href="https://t.me/unimatchai_bot?start=utm_website"
              icon={<Send className="fill-white" />}
            />
            <Button variant="dark" text="Invest" icon={<Send className="fill-white" />} onClick={openModal} />
          </div>
          <div className="h-[0]"></div>

          <div className="mt-4 xl:hidden z-10">
            <Image src={iphone} alt="iphone" width={400} className="slide-up-animation z-10 w-[275px] xl:w-[407px]"/>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      {children}
    </>
  );
}

export default Banner;
