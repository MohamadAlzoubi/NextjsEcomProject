import React, { useState } from 'react';

const Navbar = () => {

  return (
    <nav className={`navbar`}>
      <div className="row">
        <div className="col-md-1">
          <div className="logo">
            <img src="./images/logonew.png" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <ul className={`nav-menu`}>
          <li className="nav-option nav-menu-text">About</li>
            <li className="nav-option nav-menu-text">Problems</li>
            <li className="nav-option nav-menu-text">How it works</li>
            <li className="dropdown nav-menu-text">Inside the app</li>
            <li className="nav-option nav-menu-text">Tracking</li>
            <li className="nav-option nav-menu-text">Team</li>
          </ul>
        </div>
      </div>
      <div className="row">

          <div className="col-md-6">
            <button className="nav-button">Try it <span><img src="./images/bannerIconWhite.png"/></span></button>
          </div>
          <div className="col-md-6">
            <button className="nav-button">Invest <span><img src="./images/bannerIconWhite.png"/></span></button>
          </div>
        </div>

      <div className={`menu-toggle`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        
        {/* Include elements inside the menu toggle */}
        
        
      </div>
    </nav>
  );
};

export default Navbar;
