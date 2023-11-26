import React from 'react';

const Card = ({ imageSrc, title, info, cardStyle}) => {
  return (
    <div className="card" style={cardStyle}>
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


const AchievementSection = () => {
  
  return (
    <div className="app_details">
    <div className="row">
     <h1>What’s inside the app?</h1>
    </div>
    <div className="row">
        <GalleryImage src="/images/appDetails.png" alt="Some Tech Picture" className="iphone_image"/>
    </div>
    <div className="section mt-116 achievements container" style={{height : '50px'}}>
      <div className="row content_wrapper">
        <div className="col-lg-6">
          <div className="card_wrapper">
            <div className="row">
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon1Details.png"
                  info="AI-powered matchmaking"
                  cardStyle = {{position: 'relative', bottom: '441%', left: "31%" , zIndex: 1 , whiteSpace: "nowrap"}}
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon2Details.png"
                  info="OTC secondary market for early-stage equities"
                  cardStyle = {{position: 'relative', bottom: '248%', left: "-106%" , zIndex: 4}}
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon3Details.png"
                  info="AI tools for startups"
                  cardStyle = {{position: 'relative', bottom: '316%', left: "233%", zIndex: 4}}
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Icon4Details.png"
                  info="AI-powered automated startup scoring"
                  cardStyle = {{position: 'relative', bottom: '503%', left: "155%" ,zIndex: 4}}
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

export default AchievementSection;
