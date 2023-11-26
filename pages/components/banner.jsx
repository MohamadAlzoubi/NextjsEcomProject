import React, { useState, useEffect  } from 'react';


const Banner = () => {

  return (
    <div className="banner">
      <div className="banner_back_ground">
        <div className="inner-banner">
            <div className="content">
            <div className="row animated-element">
              <h1> AI app where startups
                and investors find each other</h1>
            </div>
            <div className="row animated-element">
              <p>It’s like <span><b>Tinder</b></span> <span><img src="./images/plus.png"/></span> <span><b>LinkedIn</b></span> for the LinkedIn <span><b>venture capital sector</b></span></p>
            </div>
            <div className="row buttons_banner_group animated-element">
              <button className='banner_buttons '>Invest <span><img src="./images/bannerIcon.png"/></span></button>
              <button className='banner_buttons '>Try it<span><img src="./images/bannerIcon.png"/></span></button>
            </div>
            
            
            </div>
        </div>
        <img className="banner_image animateFromDownToTop" src="./images/iphone14.png" alt="" />
      </div>
      
    </div>
       
  );
};

export default Banner;