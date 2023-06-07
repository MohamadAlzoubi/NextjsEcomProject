import React , {useState} from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar container ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src="./logos/logo.png" alt="" />
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <li className="nav-option nav-menu-text">
          Home
        </li>
        <li className="dropdown nav-menu-text">
          Community
        </li>
        <li className="nav-option nav-menu-text">
          Blog
        </li>
        <li className="nav-option nav-menu-text">
          Events
        </li>
      </ul>
      <div className="login-button nav-button">
        Log in
      </div>
    </nav>
  );
};

export default Navbar;