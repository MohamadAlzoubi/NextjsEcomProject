"use client";
import React, { useState } from 'react';

import Image from "next/image";
import Button from "../components/Button";
import logo from "../assets/img/logonew.png";
import Send from "../assets/svg/Send";
import { twMerge } from "tailwind-merge";

function HamburgerMenu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="9" fill="#1A1A1A"></circle>
      <path stroke="#fff" d="M6 7h6M6 9h6m-6 2h6"></path>
    </svg>
  );
}

function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <>
      <nav className={twMerge("flex justify-between px-11 py-7 m-auto", className)}>
        <div className="flex items-center gap-14 w-full justify-between">
          <Image src={logo} alt="Picture of the author" />

          <div className="hidden xl:flex items-center flex-grow">
            <ul className="flex gap-11 flex-grow">
              <li className="">About</li>
              <li className=""><a href='#section-one'>Problems</a></li>
              <li className=""><a href='#section-how'>How it works</a></li>
              <li className=""><a href='#section-inside'>Inside the app</a></li>
              <li className=""><a href='#section-tracking'>Tracking</a></li>
              <li className=""><a href='#section-team'>Team</a></li>
            </ul>
            <div className="flex items-center gap-2">
              <Button variant="light" text="Try it" icon={<Send className="fill-gray-500" />} />
              <Button variant="light" text="Invest" icon={<Send className="fill-gray-500" />} />
            </div>
          </div>

          <button
            className="bg-[#f4f6f6] px-3 py-2 rounded-full flex items-center gap-2 xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <p className="text-[#1A1A1A]">Menu</p>
            <HamburgerMenu />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="px-10 xl:hidden">
          <ul className="flex gap-3 flex-grow flex-col ">
            <li className="text-[32px] font-medium">About</li>
            <li className="text-[32px] font-medium">Problems</li>
            <li className="text-[32px] font-medium">How it works</li>
            <li className="text-[32px] font-medium">Inside the app</li>
            <li className="text-[32px] font-medium">Tracking</li>
            <li className="text-[32px] font-medium">Team</li>
          </ul>

          <div className="mt-10">
            <p className="font-medium">Office Adress:</p>
            <p className="text-light-gray">7 Bell Yard London England WCA 2JR</p>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <Button variant="dark" text="Try it" icon={<Send className="fill-gray-500" />} />
            <Button variant="dark" text="Invest" icon={<Send className="fill-gray-500" />} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
