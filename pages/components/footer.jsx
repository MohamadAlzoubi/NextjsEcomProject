import React , {useState} from 'react';

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`footer ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src="./logos/logodark.png" alt="" />
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <li className="footer_links">
          Home
        </li>
        <li className="footer_links">
          Community
        </li>
        <li className="footer_links">
          Blog
        </li>
        <li className="footer_links">
          Events
        </li>
      </ul>
      <div className="login-button nav-button">
        Log in
      </div>
    </nav>
  );
};

export default Footer;