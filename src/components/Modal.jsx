import React, { useState, useEffect } from "react";
import ArrowButton from "../assets/svg/ArrowButton";

const Modal = ({ children, isOpen, onClose }) => {
  const handleClose = () => {
    if (onClose) onClose(); // Call the onClose prop if provided
  };

  // Hide or show the parallex2 element based on the isOpen state
  useEffect(() => {
    const parallex2Element = document.querySelector('.parallex2');
    if (isOpen) {
      // Disable scrolling and hide parallex2
      document.body.style.overflow = 'hidden';
      if (parallex2Element) {
        parallex2Element.style.display = 'none';
      }
    } else {
      // Enable scrolling and show parallex2
      document.body.style.overflow = 'visible';
      if (parallex2Element) {
        parallex2Element.style.display = '';
      }
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal z-[2000] bg-white fixed h-[5000px]">
          <div className="modal-content w-[100%] xl:max-w-[637px] z-[2000] rounded-t-[50px] xl:rounded-[50px] p-7 xl:p-14 fixed bg-white top-[73%] left-[50%] xl:top-[50%] xl:left-[50%]">
            <span className="close-button" onClick={(handleClose)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4L20 20M20 4L4 20" stroke="#A8A8A8" />
              </svg>
            </span>
            <div className="flex flex-col justify-between gap-8">
              <div className="text-[32px] xl:text-5xl">Fill out the form to request a Pitch Deck</div>
              <input className="rounded-2xl bg-[#bababa12] p-5 xl:p-8" placeholder="Your Name"></input>
              <input className="rounded-2xl bg-[#bababa12] p-5 xl:p-8" placeholder="Telegram"></input>
              <input className="rounded-2xl bg-[#bababa12] p-5 xl:p-8" placeholder="Investment amount"></input>
              <div className="flex bg-[#1A1A1A] items-center rounded-full pl-4 py-2 gap-5 pr-2 w-full xl:w-1/2">
                <button className="text-white xl:text-[14px]">Request Pitch Deck</button>
                <ArrowButton className={"fill-white"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
