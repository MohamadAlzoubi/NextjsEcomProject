import React, { useState, useEffect  } from 'react';

const GalleryRotation = () => {

 

  return (
    <>
    
      <div className="row gallery_wrapper" id='howItWorks'>
        <h1 className="howItWorks">How it works</h1>
        <div className="circle-container">
          <img className="moving-element" id="image1" src="./images/CardsTest.png" alt="a dream catcher"/>
          <img className="moving-element" id="image2" src="./images/CardsTest.png" alt="a dream catcher"/>
          <img className="moving-element" id="image3" src="./images/CardsTest.png" alt="a dream catcher"/>
          <img className="moving-element" id="image4" src="./images/CardsTest.png" alt="a dream catcher"/>
        </div>
      </div>
    </>
  );
};

export default GalleryRotation;
