import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar container ${isOpen ? 'open' : ''}`}>
      <div className="row">
        <div className="col-md-6">
          <div className="logo">
            <img src="./logos/logo.png" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li className="nav-option nav-menu-text">Home</li>
            <li className="dropdown nav-menu-text">Community</li>
            <li className="nav-option nav-menu-text">Blog</li>
            <li className="nav-option nav-menu-text">Events</li>
            <li className="inputs_list">
            <div className={`row inputs  ${isOpen ? 'open' : ''}`}>
                <div className="col-md-6">
                  <div className="search-container">
                    <button className="search-button">
                      <i className="fa fa-search"></i>
                    </button>
                    <input type="text" className="search-input" placeholder="Search here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="login-button nav-button">Log in</div>
                </div>
            </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
          <div className="col-md-6">
            <div className="search-container">
              <button className="search-button">
                <i className="fa fa-search"></i>
              </button>
              <input type="text" className="search-input" placeholder="Search here" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="login-button nav-button">Log in</div>
          </div>
        </div>

      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        
        {/* Include elements inside the menu toggle */}
        
        
      </div>
    </nav>
  );
};

export default Navbar;
