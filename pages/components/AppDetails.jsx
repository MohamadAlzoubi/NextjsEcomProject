import React, { useState, useEffect  , useContext } from 'react';

const Card = ({ imageSrc, title, info, cardStyle , id}) => {
  return (
    <div className="card" style={cardStyle} id={id}>
      <div>
        <span>
          <img src={imageSrc} alt="" />
          <h5 className="card-title">{title}</h5>
        </span>
        <p className="card-text">{info}</p>
      </div>
    </div>
  );
};

const GalleryImage = ({ src, alt , className}) => {
  return <img src={src} alt={alt} className={className} />;
};


const AppDetails = () => {

  useEffect(() => {
    var cards = document.querySelectorAll(".app_details .card");

    cards.forEach(function(cardWrapper) {
        cardWrapper.addEventListener("mousemove", function (event) {
            var boundingClientRect = cardWrapper.getBoundingClientRect();
            var cardWidth = boundingClientRect.width;
            var cardHeight = boundingClientRect.height;
            var cardX = boundingClientRect.left + window.scrollX;
            var cardY = boundingClientRect.top + window.scrollY;

            // Calculate mouse position relative to the card
            var mouseX = event.pageX - cardX - (cardWidth / 2);
            var mouseY = event.pageY - cardY - (cardHeight / 2);

            // Sensitivity factors
            var sensitivityX = 20; // Adjust as needed
            var sensitivityY = 15; // Adjust as needed

            // Calculate rotation values
            var rotateY = (mouseX / sensitivityX);
            var rotateX = -(mouseY / sensitivityY);

            // Limit the rotation angles to avoid flipping
            rotateY = Math.min(Math.max(rotateY, -15), 15);
            rotateX = Math.min(Math.max(rotateX, -15), 15);

            cardWrapper.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            cardWrapper.style.webkitTransform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            cardWrapper.style.mozTransform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        cardWrapper.addEventListener("mouseleave", function () {
          // Resetting the transform properties to the original values
          cardWrapper.style.transform = 'rotateY(29deg) rotateX(-387.65deg)';
          cardWrapper.style.webkitTransform = 'rotateY(29deg) rotateX(-387.65deg)';
          cardWrapper.style.mozTransform = 'rotateY(29deg) rotateX(-387.65deg)';
      });
    });

  }, []);
  
  return (
    <div className="app_details">
    <div className="row">
     <h1>What’s inside the app?</h1>
    </div>
    <div className="row">
        <GalleryImage src="/images/image2Details.png" alt="Some Tech Picture" className="iphone_image"/>
    </div>
    <div className="section mt-116 achievements container" style={{height : '50px'}}>
      <div className="row content_wrapper">
        <div className="col-lg-6">
          <div className="card_wrapper">
            <div className="row">
              <div className="col-sm-8 col-md-6 col-lg-6 card_wrapper1" id='test'>
                <Card
                  imageSrc="/images/Icon1Details.png"
                  info="AI-powered matchmaking"
                  cardStyle = {{position: 'relative', bottom: '398%', left: "38%" , zIndex: 1 , whiteSpace: "nowrap"}}
                  id = 'test1'
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon2Details.png"
                  info="OTC secondary market for early-stage equities"
                  cardStyle = {{position: 'relative', bottom: '234%', left: "-90%" , zIndex: 4}}
                  id = 'test2'
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon3Details.png"
                  info="AI tools for startups"
                  cardStyle = {{position: 'relative', bottom: '316%', left: "188%", zIndex: 4}}
                  id = 'test3'
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon4Details.png"
                  info="AI-powered automated startup scoring"
                  cardStyle = {{position: 'relative', bottom: '503%', left: "120%" ,zIndex: 4}}
                  id = 'test4'
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default AppDetails;
