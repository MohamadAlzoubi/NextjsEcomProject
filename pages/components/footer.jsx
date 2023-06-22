import React , {useState} from 'react';

const Footer = () => {


  return (
    <footer className={`footer`}>
      <div className="row main-wrapper">
        <div className="col-lg-9">
          <div className="row loggo-links-wrapper">
            <div className="col-lg-3">
              <div className="logo">
                <img src="./logos/logodark.png" alt="" />
              </div>
            </div>
              <div className="col-lg-9">
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
            </div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className='row social_accounts'>
          <img src="./images/facebook.png" alt="" />
          <img src="./images/instagram.png" alt="" />
          <img src="./images/Linkedin.png" alt="" />
          <img src="./images/Twitter.png" alt="" />
        </div>
        </div>
     
     
      </div>
    
    </footer>
  );
};

export default Footer;