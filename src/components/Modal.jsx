import React, { useState } from "react";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="modal z-[2000]  bg-white fixed">
          <div className="modal-content rounded-[50px] p-14">
            <span className="close-button" onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4L20 20M20 4L4 20" stroke="#A8A8A8" />
              </svg>
            </span>
            <div className="flex flex-col justify-between gap-8">
              <div className="text-5xl">Fill out the form to request a Pitch Deck</div>
              <input className="rounded-2xl bg-[#bababa12] p-8" placeholder="Your Name"></input>
              <input className="rounded-2xl bg-[#bababa12] p-8" placeholder="Telegram"></input>
              <input className="rounded-2xl bg-[#bababa12] p-8" placeholder="Investment amount"></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
