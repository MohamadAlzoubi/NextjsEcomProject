import React from 'react';

const Card = ({ imageSrc, title, info, buttonText }) => {
  return (
    <div className="card">
      <div className="card-body">
        <span>
          <img src={imageSrc} alt="" />
          <h5 className="card-title">{title}</h5>
        </span>
        <span className="card_info_wrapper">
          <div className="circles-gallery">
            <GalleryImage src="/images/char1.png" alt="Some Tech Picture" />
            <GalleryImage src="/images/char2.png" alt="Some Tech Picture" />
            <GalleryImage src="/images/char3.png" alt="Some Tech Picture" />
          </div>
          <h5 className="card_info">
            <span>+836k</span>Members
          </h5>
        </span>
        <p className="card-text">{info}</p>
        <Button text={buttonText} iconClass="fa fa-arrow-right" />
      </div>
    </div>
  );
};

const GalleryImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

const Button = ({ text, iconClass }) => {
  return (
    <a href="#">
      {text} <span><i className={iconClass}></i></span>
    </a>
  );
};

const AchievementSection = () => {
  return (
    <div className="section mt-116 achievements container">
      <div className="row content_wrapper">
        <div className="col-lg-6">
          <div className="card_wrapper">
            <div className="row">
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Vector.png"
                  title="4.8 Rating"
                  info="More than 2 billion people over countries use Socibooks to stay in touch with friends."
                  buttonText="Join Our Community"
                />
              </div>
              <div className="col-sm-8 col-md-6 col-lg-6">
                <Card
                  imageSrc="/images/Trophy.png"
                  title="Awwwards"
                  info="More than 2 billion people over countries use Socibooks to stay in touch with friends."
                  buttonText="Go To Awards"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="content col-lg-4">
          <div className="row">
            <div className="nav_titles">Our Achievement</div>
          </div>
          <div className="row title">
            <h1>We are Connecting You to The Digital Life.</h1>
          </div>
          <div className="row col-lg-12">
            <p>The scope of Social Media becomes crucial. It helps businesses to directly engage with their needs and wants.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <DiscoverButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoverButton = () => {
  return (
    <button>
      <div>Discover me</div>
    </button>
  );
};

export default AchievementSection;
