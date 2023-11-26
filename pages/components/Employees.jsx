import React , { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


const Employees = () => {
    const swiperRef = useRef(null);

  // Click handlers for navigation arrows
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
    <div className="swiper_wrapper">
    <div className="row emps_header">
        <h1 className="header_text">C-level team</h1>
        <div className="arrows_group">
            <img src="./images/arrow-left.png" className="nasdaq_image"alt="" onClick={goPrev}/>
            <img src="./images/arrow-right.png" className="nasdaq_image"alt="" onClick={goNext} />
        </div>
    </div>
    <Swiper
       onSwiper={(swiper) => (swiperRef.current = swiper)}
       slidesPerView={2}
       spaceBetween={3}
       navigation={true}
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
           slidesPerView: 5,
           spaceBetween: 35,
         },
       }}
       modules={[Navigation, Pagination]}
       className="mySwiper"
       >
         <SwiperSlide> 
         <div className="profile-card">
            <div className="card-header">
                <img src="/images/emp1.png" alt="Nick Berez" className="profile-picture"/>
            </div>
            <div className="row car_body_wrapper">
                <div className="card-body">
                    <p className="title">Founder</p>
                    <h2 className="name">Nick Berez</h2>
                    <div className="emp_details">
                    <p>
                        Built 13 companies, 3 of which are successfully developing
                    </p>
                    <p>
                        1000+ startups scored as investor in 2022
                    </p>
                    <p>
                        Raised $8.3 mln of investments
                    </p>
                    <p>
                        Developed a startup scoring system of 220 parameters
                    </p>
                    </div>
                   
                    <button className="read-more-btn">Read more <span>+</span></button>
                </div>
                <div className="card-footer">
                    <img src="/images/company.png" alt="Company Logo" className="company-logo"/>
                </div>
            </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="profile-card">
            <div className="card-header">
                <img src="/images/emp3.png" alt="Nick Berez" className="profile-picture"/>
            </div>
            <div className="row car_body_wrapper">
                <div className="card-body">
                    <p className="title">Development</p>
                    <h2 className="name">Andrew Lee</h2>
                    <div className="emp_details">
                        <p>
                        Graduated from the Hangzhou Dianzi University: Electrical & Hardware Engineering
                        </p>
                        <p>
                            Ex-Investment Director at Perohouse (London)
                        </p>
                        <p>
                            Passionate Crypto & blockchain advocate
                        </p>
                        <p>
                            Ex Technical PM at Photonics Solution (China)
                        </p>
                    </div>
                    <button className="read-more-btn">Read more <span>+</span></button>
                </div>
                <div className="card-footer">
                    <img src="/images/company.png" alt="Company Logo" className="company-logo"/>
                </div>
            </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="profile-card">
            <div className="card-header">
                <img src="/images/emp2.png" alt="Nick Berez" className="profile-picture"/>
            </div>
            <div className="row car_body_wrapper">
                <div className="card-body">
                    <p className="title">Founder</p>
                    <h2 className="name">Tommy Walker</h2>
                    <div className="emp_details">
                        <p>
                            Expertise in Partner Network Development for SaaS and AI Products
                        </p>
                        <p>
                             Ex-Investment Director at Perohouse (London)
                        </p>
                        <p>
                            Passionate Crypto & blockchain advocate
                        </p>
                        <p>
                            7+ years experience in Sales Closure
                        </p>
                    </div>
                    <button className="read-more-btn">Read more <span>+</span></button>
                </div>
                <div className="card-footer">
                    <img src="/images/company.png" alt="Company Logo" className="company-logo"/>
                </div>
            </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="profile-card">
            <div className="card-header">
                <img src="/images/emp4.png" alt="Nick Berez" className="profile-picture"/>
            </div>
            <div className="row car_body_wrapper">
                <div className="card-body">
                    <p className="title">Operation management</p>
                    <h2 className="name">Max Bozhko</h2>
                    <div className="emp_details">
                        <p>
                            12+ years in IT management as Project and Product manager in international corporations and startups
                        </p>
                        <p>
                            Founder of 2 startups in crypto space
                        </p>
                        <p>
                            9+ years in crypto projects
                        </p>
                    </div>
                    <button className="read-more-btn">Read more <span>+</span></button>
                </div>
                <div className="card-footer">
                    <img src="/images/company.png" alt="Company Logo" className="company-logo"/>
                </div>
            </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="profile-card">
            <div className="card-header">
            <img src="/images/emp1.png" alt="Nick Berez" className="profile-picture"/>
            </div>
            <div className="row car_body_wrapper">
                <div className="card-body">
                    <p className="title">Founder</p>
                    <h2 className="name">Oleksandr Vinichenko</h2>
                    <div className="emp_details">
                        <p>
                            12+ years of experience in tech companies
                        </p>
                        <p>
                             MBA - ESBS, Valencia
                        </p>
                        <p>
                            Bachelor of Law and master of Law - National University of Kyiv-Mohyla Academy MBA - ESBS, Valencia
                        </p>
                    </div>
                    <button className="read-more-btn">Read more <span>+</span></button>
                </div>
                <div className="card-footer">
                    <img src="/images/company.png" alt="Company Logo" className="company-logo"/>
                </div>
            </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="profile-card">
            <div className="card-header">
            <img src="/images/emp1.png" alt="Nick Berez" className="profile-picture"/>
            </div>
            <div className="row car_body_wrapper">
                <div className="card-body">
                    <p className="title">Founder</p>
                    <h2 className="name">Nick Berez</h2>
                    <div className="emp_details">
                        <p>
                            Experienced AI engineer and mathematician
                        </p>
                        <p>
                            M.S. in Computer Science (Harvard), M.S. in Technology Commercialization (UT), B.S. in Applied Mathematics (UM)
                        </p>
                        <p>
                            Prominent member of the Token Engineering academy and Solana ecosystem
                        </p>
                    </div>
                    <button className="read-more-btn">Read more <span>+</span></button>
                </div>
                <div className="card-footer">
                    <img src="/images/company.png" alt="Company Logo" className="company-logo"/>
                </div>
            </div>
        </div>
         </SwiperSlide>
       </Swiper>
       </div>
  );
};

export default Employees;
