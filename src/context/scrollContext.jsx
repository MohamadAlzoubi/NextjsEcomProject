// ScrollContext.js
'use client'
import React, { createContext } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionOneRef = React.useRef(null);
  const sectionTwoRef = React.useRef(null);


  return (
    <ScrollContext.Provider value={{ sectionOneRef, sectionTwoRef }}>
      {children}
    </ScrollContext.Provider>
  );
};