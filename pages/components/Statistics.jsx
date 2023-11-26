import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const Card = ({ imageSrc, info, cardStyle , para}) => {
  return (
    <div className="card statistics" style={cardStyle}>
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

const Statistics = () => {
  return (
    <div className="swiper_statistics_wrapper">
 <Swiper
    slidesPerView={1}
    spaceBetween={3}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
    >
      <SwiperSlide> 
        <Card
          imageSrc="/images/statisticsIcon.png"
          info="2780"
          para="Matches between startups and investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
      </SwiperSlide>
      <SwiperSlide>
      <Card
          imageSrc="/images/statisticsIcon.png"
          info="211"
          para="Matches between startups and investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
      </SwiperSlide>
      <SwiperSlide>
      <Card
          imageSrc="/images/statisticsIcon.png"
          info="98%"
          para="Matches between startups and investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
      </SwiperSlide>
      <SwiperSlide>
      <Card
          imageSrc="/images/statisticsIcon.png"
          info="2367"
          para="Matches between startups and investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
      </SwiperSlide>
      <SwiperSlide>
      <Card
          imageSrc="/images/statisticsIcon.png"
          info="94.37%"
          para="Matches between startups and investors"
          cardStyle = {{zIndex: 1 , whiteSpace: "nowrap"}}
        />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/images/Statistics.png" />
      </SwiperSlide>
    </Swiper>
    </div>
   
  );
};

export default Statistics;
