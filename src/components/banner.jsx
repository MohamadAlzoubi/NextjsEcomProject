import React, { useState, useEffect, useContext } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Banner = ({ onOpenModal }) => {
  const [activeImage, setActiveImage] = useState("startups");

  const [activeButton, setActiveButton] = useState("startups");
  const [activeSection, setActiveSectionn] = useState("first");
  let active = "startups";
  let sectionType = "first";
  let shouldScrollSection1 = true; // Flag variable
  let shouldScrollSection2 = true; // Flag variable

  const showImage = (image) => {
    active = image;
    setActiveImage(image);
    setActiveButton(image);
  };

  const getButtonClass = (button) => {
    return `banner_buttons_ ${button === activeButton ? "active" : ""}`;
  };

  useEffect(() => {
    const howItWorks = document.getElementById("howItWorks");

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  }, [activeImage, activeButton, activeSection, sectionType, shouldScrollSection1, shouldScrollSection2]);

  return (
    <div className="banner bg-red-500">
      <div className="banner_back_ground">
        <div className="inner-banner">
          <div className="content"></div>
        </div>
        <div className="contents_list_banner">
          <ul className="inner_list_banner">
            <li className="left_list">
              <div className="second_right_text">
                {" "}
                We’re disrupting and building <b style={{ color: "black" }}>a new paradigm</b> for VC market
              </div>
              <div className="problem_text">
                {" "}
                <b style={{ color: "black" }}>Problems</b> we address
              </div>
              <div className="buttonsWrapper desktop_view">
                <div className={getButtonClass("startups")} onClick={() => showImage("startups")}>
                  Startups
                </div>
                <div className={getButtonClass("investors")} onClick={() => showImage("investors")}>
                  Investors & Experts
                </div>
              </div>
            </li>
            <li className="middle_list">
              <div className="row animated-element">
                <h1>
                  {" "}
                  AI app where startups <br />
                  and investors find each other
                </h1>
              </div>
              <div className="row animated-element">
                <p className="header_text_gray">
                  It’s like{" "}
                  <span>
                    <b className="bold">Tinder</b>
                  </span>{" "}
                  <span>
                    <img src="./images/plus.png" />
                  </span>{" "}
                  <span>
                    <b className="bold">LinkedIn</b>
                  </span>{" "}
                  for the LinkedIn{" "}
                  <span>
                    <b className="bold">venture capital sector</b>
                  </span>
                </p>
              </div>
              <div className="row buttons_banner_group animated-element">
                <button type="button" className="banner_buttons ">
                  Try it
                  <span>
                    <img src="./images/bannerIcon.png" />
                  </span>
                </button>
                <button type="button" className="banner_buttons" onClick={onOpenModal}>
                  Invest{" "}
                  <span>
                    <img src="./images/bannerIcon.png" />
                  </span>
                </button>
              </div>
              <img className="banner_image animateFromDownToTop" id="image" src="./images/iphone14.png" alt="" />
            </li>
            <li className="right_list">
              <div className="first_right_text">
                So that the <b style={{ color: "black" }}>best breakthrough ideas</b> and technologies emerge faster{" "}
                <b style={{ color: "black" }}>drive technological progress</b> and and humanity towards a better future
              </div>
              <div className="images_wrapper_invest desktop_view" id="images_wrapper_invest" style={{ display: "block" }}>
                <img
                  className="startup_image"
                  id="startup_image"
                  src="./images/startups.png"
                  style={{ display: activeImage === "startups" ? "block" : "none" }}
                />
                <img
                  className="investors_image"
                  id="investors_image"
                  src="./images/experts_image.png"
                  style={{ display: activeImage === "investors" ? "block" : "none" }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
