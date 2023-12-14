import React, { useState } from "react";

function StatisticChart({ className }) {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const handleMouseEnter = (segment) => {
    setHoveredSegment(segment);
  };

  const handleMouseLeave = () => {
    setHoveredSegment(null);
  };

  const getSegmentStyle = (segment) => {
    return {
      cursor: "pointer",
      filter: hoveredSegment === segment ? "contrast(120%)" : "none",
      fill: hoveredSegment && hoveredSegment !== segment ? "gray" : "inherit",
    };
  };

   // Add a function to calculate the position of the text for each segment
   const getTextPosition = (segment) => {
    // This is a placeholder function. You'll need to implement the logic to
    // determine the correct x and y coordinates for the text of each segment.
    return { x: 0, y: 0 };
  };
  const segmentsData = [
    { id: "segment1", value: "10", x: 100, y: 100 }, // Adjust x and y for positioning
    { id: "segment2", value: "20", x: 150, y: 150 },
  ];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 504 504" className={`${className} donut-chart`}>
       {segmentsData.map((segment, index) => {
        const position = getTextPosition(segment);
        return (
          <React.Fragment key={index}>
            <path
              style={getSegmentStyle(segment.id)}
              onMouseEnter={() => handleMouseEnter(segment.id)}
              onMouseLeave={handleMouseLeave}
              // Add other attributes for the path
            />
            <text
              x={position.x}
              y={position.y}
              dominantBaseline="middle"
              textAnchor="middle"
              fill="black"
              fontSize="10"
            >
              {segment.value}
            </text>
          </React.Fragment>
        );
      })}
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="10">
        Your Text Here
      </text>
      <defs>
        <mask id="mask" width="293.36" height="211.14" x="9.44" y="0" maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            strokeWidth="0"
            d="M30.1 209.7c-13.62-2.6-22.67-15.79-18.73-29.08 7.15-24.1 17.89-47.04 31.91-68.02a250.793 250.793 0 0170.87-70.34 250.86 250.86 0 0192.68-37.15C231.65.57 256.97-.2 281.93 2.8c13.76 1.65 22.28 15.2 19.26 28.73-3.02 13.53-16.44 21.88-30.24 20.58-18.35-1.74-36.88-.95-55.09 2.38A200.788 200.788 0 0060.98 190.1c-4.27 13.19-17.27 22.19-30.88 19.6z"
            data-name="path-1-inside-1 681 13414"></path>
        </mask>
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
          datasegment="segment1"
          style={getSegmentStyle("segment1")}
          onMouseEnter={() => handleMouseEnter("segment1")}
          onMouseLeave={handleMouseLeave}
          stroke="#fff"
          strokeWidth="2"
          d="M30.1 209.7c-13.62-2.6-22.67-15.79-18.73-29.08 7.15-24.1 17.89-47.04 31.91-68.02a250.793 250.793 0 0170.87-70.34 250.86 250.86 0 0192.68-37.15C231.65.57 256.97-.2 281.93 2.8c13.76 1.65 22.28 15.2 19.26 28.73-3.02 13.53-16.44 21.88-30.24 20.58-18.35-1.74-36.88-.95-55.09 2.38A200.788 200.788 0 0060.98 190.1c-4.27 13.19-17.27 22.19-30.88 19.6z"></path>
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
      </g>
    </svg>
  );
}

export default StatisticChart;
