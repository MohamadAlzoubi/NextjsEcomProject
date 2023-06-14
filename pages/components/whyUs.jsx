import React from 'react';

const WhyUs = () => {
  return (
    <div className="section mt-116 section_why_us container_custom">

        <div className="content col-md-4">
            <div className="row title">
                <div className="nav_titles">Whats Netboks?</div>
            </div>
            <div className="row title">
                    <h1> Why Join to Netbook Social Network?</h1>
            </div>
            <div className="row col-md-10">
                <p>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
            </div>
            <div className="row col-md-10">
            <ul className="dotted-list">
                <li><span className="dot"></span> Groups</li>
                <li><span className="dot"></span> Messages</li>
                <li><span className="dot"></span> Share</li>
            </ul>
            </div>
        </div>
        <div className="container col-md-6">
        <div className="row">
            <div className="col-md-6 mt-5">
            <img src="./images/gal3.png" alt="" />
            </div>
            <div className="col-md-6">
            <div className="row mb-4">
                <div className="col">
                <img src="./images/gal2.png" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <img src="./images/gal1.png" alt="" />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
       
  );
};

export default WhyUs;