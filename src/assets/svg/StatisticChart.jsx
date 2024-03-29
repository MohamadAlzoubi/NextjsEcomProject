"use client";
import React, { useState } from "react";
import useResponsive from "../../hooks/useResponsive";

function StatisticChart({ className, isMobile }) {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (segment) => {
    console.log(segment);
    setIsHovered(true);
    setHoveredSegment(segment);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredSegment(null);
  };

  const getSegmentStyle = (segment) => {
    let gridiant;
    if (segment == "segment2") {
      gridiant = "familyOffice";
    } else if (segment == "segment1") {
      gridiant = "VC";
    } else if (segment == "segment3") {
      gridiant = "synd";
    } else if (segment == "segment4") {
      gridiant = "other";
    } else if (segment == "segment5") {
      gridiant = "angle";
    }

    return {
      cursor: "pointer",
      filter: hoveredSegment === segment ? "contrast(100%)" : "none",
      fill: hoveredSegment && hoveredSegment !== segment ? "#F1F1F1" : `url(#${gridiant})`,
      boxShadow: hoveredSegment === segment ? "-2px 4px 24px 0px rgba(0, 0, 0, 0.13)" : "none",
    };
  };

  let value = {
    text: "",
    number: 0,
  };
  switch (hoveredSegment) {
    case "segment1":
      value = {
        text: "VC Fund",
        number: 22,
      };
      break;
    case "segment2":
      value = {
        text: "Family office",
        number: 12,
      };
      break;
    case "segment3":
      value = {
        text: "Syndicate",
        number: 11,
      };
      break;
    case "segment4":
      value = {
        text: "Other",
        number: 7,
      };
      break;
    case "segment5":
      value = {
        text: "Angel Investors",
        number: 48,
      };
      break;
    default:
      value = {
        text: "",
        number: 0,
      };
      break;
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute flex flex-col items-center">
        {!!value.number && <p className="text-center bg-black w-fit text-white px-2 py-1 rounded">{value.number}%</p>}
        {!!value.text && <p className="text-center mt-1">{value.text}</p>}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 504 504" className={`${className} donut-chart`}>
        {/* <g dominantBaseline="middle" textAnchor="middle" style={{ transform: "translate(50%, 50%)" }}>
          <text
            fill="black"
            fontSize="10"
            style={{ transform: "translate(0px, -7px)", background: "black", color: "white", padding: "2px 3px" }}></text>

          <text fill="black" fontSize="10" style={{ transform: "translate(0px, 7px)" }}>
            {value.text || "0"}
          </text>
        </g> */}
        <defs>
          <mask id="mask" width="293.36" height="211.14" x="9.44" y="0" maskUnits="userSpaceOnUse">
            <path
              fill="#fff"
              strokeWidth="0"
              d="M30.1 209.7c-13.62-2.6-22.67-15.79-18.73-29.08 7.15-24.1 17.89-47.04 31.91-68.02a250.793 250.793 0 0170.87-70.34 250.86 250.86 0 0192.68-37.15C231.65.57 256.97-.2 281.93 2.8c13.76 1.65 22.28 15.2 19.26 28.73-3.02 13.53-16.44 21.88-30.24 20.58-18.35-1.74-36.88-.95-55.09 2.38A200.788 200.788 0 0060.98 190.1c-4.27 13.19-17.27 22.19-30.88 19.6z"
              data-name="path-1-inside-1 681 13414"></path>
          </mask>
          <linearGradient id="angle" gradientTransform="rotate(95)">
            <stop offset="7.33%" style={{ stopColor: "#CBB2FF", stopOpacity: 1 }} />
            <stop offset="102.12%" style={{ stopColor: "#DCCCFF", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="other" gradientTransform="rotate(134)">
            <stop offset="17.59%" style={{ stopColor: "#C5FAE1", stopOpacity: 1 }} />
            <stop offset="41.09%" style={{ stopColor: "#DAFFED", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="synd" gradientTransform="rotate(50)">
            <stop offset="25.92%" style={{ stopColor: "#C8F0FF", stopOpacity: 1 }} />
            <stop offset="59.57%" style={{ stopColor: "#AFE9FE", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="VC" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="27.42%" style={{ stopColor: "#C2DAFF", stopOpacity: 1 }} />
            <stop offset="73.97%" style={{ stopColor: "#ADCCFD", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="familyOffice" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="24.1%" style={{ stopColor: "#F5E7FF", stopOpacity: 1 }} />
            <stop offset="68.23%" style={{ stopColor: "#ECD6FD", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient
            id="linear-gradient"
            x1="6.61"
            x2="255.61"
            y1="290.79"
            y2="506.79"
            gradientTransform="matrix(1 0 0 -1 0 503.89)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c2daff"></stop>
            <stop offset="1" stopColor="#adccfd"></stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="206.91"
            x2="53.41"
            y1="-9"
            y2="173"
            gradientTransform="matrix(1 0 0 -1 0 503.89)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c8f0ff"></stop>
            <stop offset="1" stopColor="#afe9fe"></stop>
          </linearGradient>
          <mask id="mask-1" width="150.23" height="58.52" x="183.84" y="445.48" maskUnits="userSpaceOnUse">
            <path
              fill="#fff"
              strokeWidth="0"
              d="M331.46 463.46c4.88 12.98-1.67 27.58-15.07 31.14a251.12 251.12 0 01-113.46 3.56c-13.6-2.71-21.04-16.88-16.99-30.13 4.05-13.26 18.08-20.55 31.74-18.18a200.78 200.78 0 0080.96-2.54c13.48-3.22 27.94 3.18 32.82 16.16z"
              data-name="path-4-inside-4 681 13414"></path>
          </mask>
          <linearGradient
            id="linear-gradient-3"
            x1="206.58"
            x2="322.42"
            y1="-23.98"
            y2="96.09"
            gradientTransform="matrix(1 0 0 -1 0 503.89)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c5fae1"></stop>
            <stop offset="1" stopColor="#daffed"></stop>
          </linearGradient>
          <mask id="mask-2" width="253" height="497.07" x="251" y="1.14" maskUnits="userSpaceOnUse">
            <path
              fill="#fff"
              strokeWidth="0"
              d="M252 26.1c0-13.86 11.27-25.23 25.06-23.85a251.013 251.013 0 01146.76 66.78 250.999 250.999 0 0178.68 167.21 250.965 250.965 0 01-57.11 175.75 251.03 251.03 0 01-137.23 84.64c-13.51 3.1-26.11-6.76-27.85-20.52-1.74-13.75 8.07-26.16 21.5-29.59a200.803 200.803 0 00104.91-66.53 200.797 200.797 0 00-17.27-274.37 200.88 200.88 0 00-112.42-52.86c-13.75-1.73-25.04-12.8-25.04-26.67z"
              data-name="path-5-inside-5 681 13414"></path>
          </mask>
          <linearGradient
            id="linear-gradient-4"
            x1="348.76"
            x2="390.99"
            y1="12"
            y2="523.66"
            gradientTransform="matrix(1 0 0 -1 0 503.89)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cbb2ff"></stop>
            <stop offset="1" stopColor="#dcccff"></stop>
          </linearGradient>
        </defs>
        <g mask="url(#mask)" fill="url(#linear-gradient)">
          <path
            className={`your-component ${isHovered ? "hover" : ""}`}
            datasegment="segment1"
            style={getSegmentStyle("segment1")}
            onMouseEnter={() => handleMouseEnter("segment1")}
            onMouseLeave={handleMouseLeave}
            stroke="#fff"
            strokeWidth="2"
            d="M30.1 209.7c-13.62-2.6-22.67-15.79-18.73-29.08 7.15-24.1 17.89-47.04 31.91-68.02a250.793 250.793 0 0170.87-70.34 250.86 250.86 0 0192.68-37.15C231.65.57 256.97-.2 281.93 2.8c13.76 1.65 22.28 15.2 19.26 28.73-3.02 13.53-16.44 21.88-30.24 20.58-18.35-1.74-36.88-.95-55.09 2.38A200.788 200.788 0 0060.98 190.1c-4.27 13.19-17.27 22.19-30.88 19.6z"></path>
          <text x="17%" y="100" fill="#000000" fontSize="12" textAnchor="middle">
            22%
          </text>
        </g>
        <g fill="#ecd6fd">
          <path
            datasegment="segment2"
            style={getSegmentStyle("segment2")}
            onMouseEnter={() => handleMouseEnter("segment2")}
            onMouseLeave={handleMouseLeave}
            fill="#ecd6fd"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M61.28 373.07c-11.7 7.43-27.34 4.01-33.56-8.38A251.044 251.044 0 0110.99 181.9c3.87-13.31 18.63-19.51 31.48-14.33 12.86 5.18 18.92 19.78 15.38 33.19-5.97 22.6-7.95 46.14-5.81 69.55 2.14 23.41 8.37 46.19 18.34 67.33 5.91 12.54 2.61 28-9.1 35.43z"></path>
          <text x="6%" y="250" fill="#000000" fontSize="12" textAnchor="middle">
            21%
          </text>
        </g>
        <g fill="url(#linear-gradient-2)">
          <path
            datasegment="segment3"
            style={getSegmentStyle("segment3")}
            onMouseEnter={() => handleMouseEnter("segment3")}
            onMouseLeave={handleMouseLeave}
            fill="url(#linear-gradient-2)"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M229.57 476.78c-1.38 13.79-13.72 23.99-27.3 21.24a250.97 250.97 0 01-103.52-47.24 250.917 250.917 0 01-72.02-88.09c-6.11-12.44.6-26.97 13.59-31.81s27.31 1.86 33.73 14.15a200.792 200.792 0 00133.26 102.72c13.51 3.08 23.64 15.23 22.26 29.02z"></path>
          <text x="20%" y="420" fill="#000000" fontSize="12" textAnchor="middle">
            11%
          </text>
        </g>
        <g mask="url(#mask-1)" fill="url(#linear-gradient-3)">
          <path
            datasegment="segment4"
            style={getSegmentStyle("segment4")}
            onMouseEnter={() => handleMouseEnter("segment4")}
            onMouseLeave={handleMouseLeave}
            fill="url(#linear-gradient-3)"
            stroke="#fff"
            strokeWidth="2"
            d="M331.46 463.46c4.88 12.98-1.67 27.58-15.07 31.14a251.12 251.12 0 01-113.46 3.56c-13.6-2.71-21.04-16.88-16.99-30.13 4.05-13.26 18.08-20.55 31.74-18.18a200.78 200.78 0 0080.96-2.54c13.48-3.22 27.94 3.18 32.82 16.16z"></path>
          <text x="47%" y="95%" fill="#000000" fontSize="12" textAnchor="middle">
            7%
          </text>
        </g>
        <g mask="url(#mask-2)" fill="url(#linear-gradient-4)">
          <path
            datasegment="segment5"
            style={getSegmentStyle("segment5")}
            onMouseEnter={() => handleMouseEnter("segment5")}
            onMouseLeave={handleMouseLeave}
            className="fill-[url(#linear-gradient-4)]"
            stroke="#fff"
            strokeWidth="2"
            d="M252 26.1c0-13.86 11.27-25.23 25.06-23.85a251.013 251.013 0 01146.76 66.78 250.999 250.999 0 0178.68 167.21 250.965 250.965 0 01-57.11 175.75 251.03 251.03 0 01-137.23 84.64c-13.51 3.1-26.11-6.76-27.85-20.52-1.74-13.75 8.07-26.16 21.5-29.59a200.803 200.803 0 00104.91-66.53 200.797 200.797 0 00-17.27-274.37 200.88 200.88 0 00-112.42-52.86c-13.75-1.73-25.04-12.8-25.04-26.67z"></path>
          <text x="95%" y="50%" fill="#000000" fontSize="12" textAnchor="middle">
            48%
          </text>
        </g>
      </svg>
    </div>
  );
}

export default StatisticChart;
