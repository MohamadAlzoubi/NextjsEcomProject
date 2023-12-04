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
    // Store the initial rotation values
    var initialRotateY = 29;
    var initialRotateX = -387.65;

    cardWrapper.addEventListener("mousemove", function(event) {
        var boundingClientRect = cardWrapper.getBoundingClientRect();
        var cardWidth = boundingClientRect.width;
        var cardHeight = boundingClientRect.height;
        var cardX = boundingClientRect.left + window.scrollX;
        var cardY = boundingClientRect.top + window.scrollY;

        var mouseX = event.pageX - cardX - (cardWidth / 2);
        var mouseY = event.pageY - cardY - (cardHeight / 2);

        var sensitivityX = 20;
        var sensitivityY = 15;

        // Calculate rotation values
        var rotateY = (mouseX / sensitivityX);
        var rotateX = -(mouseY / sensitivityY);

        // Limit the rotation angles to avoid flipping
        rotateY = Math.min(Math.max(rotateY, -15), 15);
        rotateX = Math.min(Math.max(rotateX, -15), 15);

        // Combine the initial rotation with the calculated rotation
        cardWrapper.style.transform = `rotateY(${initialRotateY + rotateY}deg) rotateX(${initialRotateX + rotateX}deg)`;
        cardWrapper.style.webkitTransform = `rotateY(${initialRotateY + rotateY}deg) rotateX(${initialRotateX + rotateX}deg)`;
        cardWrapper.style.mozTransform = `rotateY(${initialRotateY + rotateY}deg) rotateX(${initialRotateX + rotateX}deg)`;
    });

    cardWrapper.addEventListener("mouseleave", function() {
        // Resetting the transform properties to the original values
        cardWrapper.style.transform = `rotateY(${initialRotateY}deg) rotateX(${initialRotateX}deg)`;
        cardWrapper.style.webkitTransform = `rotateY(${initialRotateY}deg) rotateX(${initialRotateX}deg)`;
        cardWrapper.style.mozTransform = `rotateY(${initialRotateY}deg) rotateX(${initialRotateX}deg)`;
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
                  cardStyle = {{position: 'relative', bottom: '385%', left: "37%" , zIndex: 1 , whiteSpace: "nowrap"}}
                  id = 'test1'
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6 card_wrapper2">
                <Card
                  imageSrc="/images/Icon2Details.png"
                  info="OTC secondary market for early-stage equities"
                  cardStyle = {{position: 'relative', bottom: '190%', left: "-93%" , zIndex: 4}}
                  id = 'test2'
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6 card_wrapper3">
                <Card
                  imageSrc="/images/Icon3Details.png"
                  info="AI tools for startups"
                  cardStyle = {{position: 'relative', bottom: '247%', left: "221%", zIndex: 4}}
                  id = 'test3'
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6 card_wrapper4">
                <Card
                  imageSrc="/images/Icon4Details.png"
                  info="AI-powered automated startup scoring"
                  cardStyle = {{position: 'relative', bottom: '448%', left: "135%" ,zIndex: 4}}
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
