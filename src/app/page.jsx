"use client";

import HomePage from "../home";
import LoadingPage from '../home/sections/loadingPage';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };


  return <>
  <LoadingPage onLoadingComplete={handleLoadingComplete} />
      {isLoadingComplete && <HomePage />}
  </>  
}
