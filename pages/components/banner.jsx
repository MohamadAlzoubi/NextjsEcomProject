import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
        <div className="inner-banner container_custom row">
        <div className="content">
        <div className="row col-md-8">
          <button className="link"><div>Netbook community</div></button>
        </div>
        <div className="row">
          <h1> Your Solutions For Community!</h1>
        </div>
        <div className="row">
          <p>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
        </div>
        <div className="row">
          <button className='banner_buttons col-md-4'><div>About More</div></button>
          <button className='banner_buttons col-md-4'><div>Invite Friend</div></button>
        </div>
        </div>
        <div className="image">
            <img src="./images/image.png" alt="" />
        </div>
        </div>
    </div>
       
  );
};

export default Banner;