import React , {useState} from 'react';

const Footer = () => {


  return (
    <footer className={`footer`}>
     <div>
        <div className="request_pitch">
          <h1 className="header_text">Unimatch is raising Pre-seed</h1>
          <p className="sub_header"><b>Join our mission</b> and become a shareholder in <b>Unimatch</b> and the <b>future unicorn</b> that is disrupting the <b>venture</b> capital industry</p>
          <button className="pitch_deck_button">Request Pitch Deck <span><img src="./images/pitch_button.png"/></span></button>
        </div>
        
          <div className='row lower_content'>
            <div className='left_side_list'>
              <div>
                Office Address: <br/> <div style={{color: 'rgba(255, 255, 255, 0.4)'}}>7 Bell Yard London England WC2A 2JR</div></div>
                <div className='buttons_group'>
                <div className="row">
                  <div className="col-md-6">
                    <button className="footer_button">
                      Try it <span><img src="./images/BrainIcon.png"/></span>
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="footer_button">
                      Invest <span><img src="./images/BrainIcon.png"/></span>
                    </button>
                  </div>
                </div>
              </div>
              </div>

            <div className='lists_wrapper'>
            <div className='footer_list right_side_list row'>
              <div className='inner_list_left'>
                <a href="#" className="nav_links">About</a> 
                <a href="#" className="nav_links">Problems</a>
                <a href="#" className="nav_links">How it works</a>
              </div>
              <div className='inner_list_right'>
                <a href="#" className="nav_links">Team</a> 
                <a href="#" className="nav_links">Tracking</a> 
                <a href="#" className="nav_links">Inside the app</a>
              </div>
            </div>
            <div className='row bottom_text'>Made by <span><a style={{color : 'white' , textDecoration : "underline"}} >Karankola</a></span></div>
            </div>
          </div>
           
      </div>
    </footer>
  );
};

export default Footer;