// components/LoadingPage.js
"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/loadingPage.css"; // Make sure to create a corresponding CSS module file
import FirstLoading from "../../assets/svg/loadingPageIcone/FirstLoading"
import SecondLoading from "../../assets/svg/loadingPageIcone/SecondLoading"

const RisingText = ({ text }) => {
    // Splitting the text into an array of letters
    const letters = text.split("").map((letter, index) => (
      <span key={index} className="risingLetter" style={{ animationDelay: `${0.1 * index}s` }}>
        {letter}
      </span>
    ));
  
    return <div>{letters}</div>;
  };

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          // Set a timeout to "remove" the loading bar after it reaches 100%
          setTimeout(() => setLoadingComplete(true), 500); // Adjust time as needed
          return 100;
        }
        return Math.min(oldProgress + 10, 100); // Increment progress here
      });
    }, 200); // Speed of the loading bar. Adjust as needed.

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    !loadingComplete && (
    <div className="fixed flex flex-col justify-between h-screen w-full bg-white z-[10000] background">
        <div className="opacity-0">text</div>
      <div className="flex justify-center">
        <div className="flex flex-col">
        <div className="flex justify-center"> <FirstLoading /></div>
        <div className="text-5xl marker:"><RisingText text="Unimatch"/></div>
        </div>
        
      </div>

      <div>
        <div className="loadingContainer">
          <div className="loadingText text-center bg-[#f0f7ff] text-4xl">{progress}%</div>
          <div className="loadingBar bg-[#1A1A1A]" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
    )
  );
};

export default LoadingPage;
