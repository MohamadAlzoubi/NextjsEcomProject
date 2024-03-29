import React from 'react';
import DonChart from './DonChart'; // Import the chart component

const Card = ({ imageSrc, info, cardStyle , para , classExtra}) => {
    return (
      <div className={`card stat-card ${classExtra}`} style={cardStyle}>
        <div>
          <span>
            <img src={imageSrc} alt="" />
          </span>
          <p className="card-text">{info}</p>
          <p className="paragraph">{para}</p>
        </div>
      </div>
    );
  };

const StatisticsDesktop = () => {
  return (
    <div className="stat_container desktop_view" style={{display : 'flex' , flexWrap: 'wrap'}}>
    <div className="backText">
          <div className="backTextValue"> Unimatch in numbers</div>
      </div>
      <div className="container_stat_new" style={{display : 'flex' , width: '100%' , justifyContent : 'space-between'}}>
        <div className="left">
          <Card
            imageSrc="/images/stat1.png"
            info="94.37%"
            para="Investors retention rate"
            cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
            classExtra="card1"
          />
          <img src="./images/StatisticsImage.png" alt="" />
        </div>
        <div className="right" style={{display : 'flex'   , flexWrap: 'wrap'}}>
          <div className="right_inner" style={{display : 'flex' , flexWrap : 'wrap'}}>
           <div className="inner_left" style={{display : 'flex' , width : '50%' , height : '50%' , flexWrap : 'wrap'}}>
            <Card
            imageSrc="/images/stat2.png"
            info="2780"
            para="Matches between startups and investors"
            cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
            classExtra="card2"
            />
            <Card
              imageSrc="/images/stat4.png"
              info="145"
              para="Investors on board"
              cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
              classExtra="card3"
            />
           </div>
           <div className="inner_right" style={{display : 'flex' , width : '50%' , height : '50%' , flexWrap : 'wrap'}}>
            <Card
              imageSrc="/images/stat3.png"
              info="211"
              para="Startup on board"
              cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
              classExtra="card4"
            />
             <Card
              imageSrc="/images/stat5.png"
              info="98%"
              para="Startups retention rates"
              cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
              classExtra="card5"
            />
           </div>
          </div>
         
        <Card
          imageSrc="/images/stat6.png"
          info="2367"
          para="Startup blurb views by Investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
        </div>
       
    </div>
    {/* <div className="container_stat">
        <div className="Card-1"><Card
          imageSrc="/images/stat1.png"
          info="94.37%"
          para="Investors retention rate"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        /></div>
        <div className="card-2"><img src="./images/StatisticsImage.png" alt="" /></div>
        <div className="card-3"><Card
          imageSrc="/images/stat2.png"
          info="2780"
          para="Matches between startups and investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
        <Card
          imageSrc="/images/stat3.png"
          info="211"
          para="Startup on board"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
        <Card
          imageSrc="/images/stat4.png"
          info="145"
          para="Investors on board"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
        <Card
          imageSrc="/images/stat5.png"
          info="98%"
          para="Startups retention rates"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        /></div>
        <div className="card-4">
        <Card
          imageSrc="/images/stat6.png"
          info="2367"
          para="Startup blurb views by Investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
        </div>
    </div> */}
    </div>

  );
};

export default StatisticsDesktop;