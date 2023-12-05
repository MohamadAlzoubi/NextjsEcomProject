import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import logo from "../assets/img/logonew.png";
import Send from "../assets/svg/Send";

function Navbar() {
  return (
    <nav className="flex justify-between px-11 py-7 w-full">
      <div className="flex items-center gap-14">
        <Image src={logo} alt="Picture of the author" />

        <ul className="flex gap-11">
          <li className="">About</li>
          <li className="">Problems</li>
          <li className="">How it works</li>
          <li className="">Inside the app</li>
          <li className="">Tracking</li>
          <li className="">Team</li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="light" text="Try it" icon={<Send className="fill-gray-500" />} />
        <Button variant="light" text="Invest" icon={<Send className="fill-gray-500" />} />
      </div>
    </nav>
  );
}

export default Navbar;
