"use client";
import React, { useState } from "react";
import ArrowButton from "../../assets/svg/ArrowButton";
import Button from "../../components/Button";
import Send from "../../assets/svg/Send";
import { Heading } from "../../components/Typography/Heading";
import { twMerge } from "tailwind-merge";
import Modal from "../../components/Modal"; // Import your Modal component

function Footer({ className }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div
      className={twMerge(
        "bg-[#1A1A1A] m-auto mt-20 rounded-[28px] xl:rounded-[100px] p-[10px] xl:p-20 max-w-[1900px] xl:mt-[200px]",
        className
      )}>
      <div className="bg-white text-center rounded-[28px] xl:rounded-[100px] py-14 xl:py-20 flex flex-col items-center ">
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
            <Button variant="light" text="Invest" onClick={openModal} icon={<Send className="fill-black" />} />
            <Button variant="light" text="Try it"  href="https://t.me/unimatchai_bot?start=utm_website" icon={<Send className="fill-black" />} />
          </div>
        </div>

        <div className="xl:w-1/2 mt-9 font-medium text-white text-2xl xl:text-5xl gap-3 grid grid-cols-1 xl:grid-cols-2 xl:m-0">
          <a className="font-extralight ">About</a>
          <a className="font-extralight " href='#section-team'>Team</a>
          <a className="font-extralight " href='#section-one'>Problems</a>

          <a className="font-extralight " href='#section-tracking'>Tracking</a>
          <a className="font-extralight " href='#section-how' >How it works</a>
          <a className="font-extralight " href='#section-inside'>Inside the app</a>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Footer;
