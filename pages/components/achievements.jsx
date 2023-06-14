import React from 'react';

const Achievements = () => {
  return (
    <div className="section mt-116 achievements container_custom">
        <div className="card_wrapper">
            <div className="card">
                <div className="card-body">
                <span><img src="/images/Vector.png" alt="" /><h5 className="card-title">4.8 Rating</h5></span>
                <span>
                    <div className="circles-gallery">
                        <img src="/images/char1.png" alt="Some Tech Picture" />
                        <img src="/images/char2.png" alt="Some Tech Picture" />
                        <img src="/images/char3.png" alt="Some Tech Picture" />
                    </div>
                    <h5 className="card_info"><span>+836k</span>Members</h5></span>
                    <p className="card-text">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                    <a href="#" >Join Our Community <span><i className="fa fa-arrow-right"></i></span></a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <span><img src="/images/Trophy.png" alt="" /><h5 className="card-title">Awwwards</h5></span>
                <span className='card_info_wrapper'><img src="/images/Ellipse14.png" alt=""  /><h5 className="card_info">Best of <span>2021</span> on Github</h5></span>
                    <p className="card-text">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                    <a href="#" >Go To Awardss<span><i className="fa fa-arrow-right"></i></span></a>
                </div>
            </div>
        </div>
        
        <div className="content col-md-4">
            <div className="row">
                <div className="nav_titles">Our Achievement</div>
            </div>
            <div className="row title">
                    <h1> We are Connecting You The Digital Life.?</h1>
            </div>
            <div className="row col-md-12">
                <p>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
            </div>
            <div className="row">
            <button className='col-md-6'><div>Discover me</div></button>
            </div>
        </div>
        
    </div>
       
  );
};

export default Achievements;