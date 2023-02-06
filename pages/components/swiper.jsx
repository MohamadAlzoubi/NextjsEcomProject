/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Swiper.module.css'


// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      cssMode={true}
    >
      <SwiperSlide>
      <div className={[styles.card , 'card']}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
        <div className={styles.container} >
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

