/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React , { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const Card = ({ imageSrc, info, cardStyle, para }) => {
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
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="swiper_statistics_wrapper_mobile mobile_view">
      <div className="backText">
        <div className="backTextValue"> Unimatch in numbers</div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          414: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cards_group_wrapper">
            <Card
              imageSrc="/images/statisticsIcon.png"
              info="2780"
              para="Matches between startups and investors"
              cardStyle={{ zIndex: 1, whiteSpace: 'nowrap' }}
            />
            <Card
              imageSrc="/images/statisticsIcon.png"
              info="211"
              para="Startup on board"
              cardStyle={{ zIndex: 1, whiteSpace: 'nowrap' }}
            />
            <Card
              imageSrc="/images/statisticsIcon.png"
              info="145"
              para="Investors on board"
              cardStyle={{ zIndex: 1, whiteSpace: 'nowrap' }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="cards_group_wrapper">
            <Card
              imageSrc="/images/statisticsIcon.png"
              info="2780"
              para="Matches between startups and investors"
              cardStyle={{ zIndex: 1, whiteSpace: 'nowrap' }}
            />
            <Card
              imageSrc="/images/statisticsIcon.png"
              info="211"
              para="Startup on board"
              cardStyle={{ zIndex: 1, whiteSpace: 'nowrap' }}
            />
            <Card
              imageSrc="/images/statisticsIcon.png"
              info="145"
              para="Investors on board"
              cardStyle={{ zIndex: 1, whiteSpace: 'nowrap' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Statistics.png" />
        </SwiperSlide>
      </Swiper>
      <div className="control_group">
      <div className="arrows_group">
        
        <img
          src="./images/arrow-left.png"
          className="arrows_stat"
          alt=""
          onClick={goPrev}
        />
        <img
          src="./images/arrow-right.png"
          className="arrows_stat"
          alt=""
          onClick={goNext}
        />
      </div>
      <div className="loader-line"></div>

      </div>
      
    </div>
  );
};

export default Statistics;
