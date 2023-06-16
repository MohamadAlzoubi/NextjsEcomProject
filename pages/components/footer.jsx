import React , {useState} from 'react';

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className={`footer`}>
      
      <div className="logo">
        <img src="./logos/logodark.png" alt="" />
      </div>
      <ul className={`footer-menu`}>
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
      <div className='row social_accounts'>
        <img src="./images/facebook.png" alt="" />
        <img src="./images/instagram.png" alt="" />
        <img src="./images/Linkedin.png" alt="" />
        <img src="./images/Twitter.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;