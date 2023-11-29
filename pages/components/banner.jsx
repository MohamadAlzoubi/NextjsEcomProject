import React, { useState, useEffect  , useContext } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis'

const Banner = ({ onOpenModal }) => {

  const [activeImage, setActiveImage] = useState('startups');

  const [activeButton, setActiveButton] = useState('startups');
  const [activeSection, setActiveSectionn] = useState('first');
  let active = 'startups';
  let sectionType = 'first';
  let shouldScrollSection1 = true; // Flag variable
    let shouldScrollSection2 = true; // Flag variable

  const showImage = (image) => {
    active = image;
    setActiveImage(image);
    setActiveButton(image);
  };

  const getButtonClass = (button) => {
    return `banner_buttons_ ${button === activeButton ? 'active' : ''}`;
  };


  useEffect(() => {
    const howItWorks = document.getElementById('howItWorks');
    
    
    
    


    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    const lenis = new Lenis({
      lerp: 0.04, 
      })

      

      lenis.on('scroll', (e) => {
        const scrollY = window.scrollY;
        console.log(e.direction)
        
        if(scrollY >= 1000 && shouldScrollSection1){
          //console.log(sectionType)
          lenis.scrollTo(howItWorks , {
            offset : -1100,
            lerp: 0.08, 
            lock : false,
            onComplete : () => {
              console.log('completed')
              console.log(sectionType)
              if(e.direction > 0){
                if(sectionType == 'first' && active == 'investors'){
                  showImage('startups')
                }
              }else if(e.direction < 0){
                if(sectionType == 'first' && active == 'startups'){
                  shouldScrollSection1 = false;
                  sectionType = 'second';
                  showImage('investors')
                 
                  //lenis.destroy()
                  setTimeout(() => {
                    secondSection();
                  }, 1000)
                }
              }
            }
          })
          //lenis.stop()
          
          
         // 
          //smoothScrollToElement(howItWorks);
          
        }
      })

      const secondSection = () => {
        console.log('I am here' , sectionType)
        lenis.scrollTo('.app_details' , {
          offset : -100,
          lerp: 0.08, 
          lock : true,
          onComplete : () => {
            console.log('completed2')
          }
        })
      }

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      





    const handleScroll = (e) => {
      


    // if(scrollY >= 2019 ){
    //   window.addEventListener('wheel', handleScroll);
    //   lenis.stop()
    //   if(scrollY >= 1900){
    //     if (currentScroll > lastScrollTop) {
    //       // Scrolling down
    //       showImage('investors')
    //       howItWorks.style.top = '0px';
    //     } else {
    //           showImage('startups')
    //         // Scrolling up
    //         console.log('Scrolling up');
    //     }
    //   }
     

    // }else {
    //   if(scrollY < 1900){
    //     showImage('startups')
    //   }
    // }
    //   if (window.scrollY > 3374 && window.scrollY < 6000) {


    //   const st = window.pageYOffset || document.documentElement.scrollTop;
    //   if (st > lastScrollTop) {
    //     angle = Math.min(angle - 1, 77);
    //   } else {
    //     angle = Math.max(angle + 1, -88);
    //   }

    //   updateImagePositions(angle);
    //   lastScrollTop = st <= 0 ? 0 : st;
    // }
    };


    const updateImagePositions = (angle) => {
      
        // const images = document.querySelectorAll('.circle-container');
        // images.forEach((image, index) => {
        //   const delay = index * (180 / images.length);
        //   image.style.transform = `rotate(${angle + delay}deg)`;
        // });
      
    };

    // const throttledHandleScroll = throttle(handleScroll, 100);

    // window.addEventListener('wheel', handleScroll);

    // return () => {
    //   window.removeEventListener('wheel', handleScroll);
    // };
  }, [activeImage , activeButton , activeSection ,sectionType , shouldScrollSection1 , shouldScrollSection2]);

  return (
    <div className="banner">
      <div className="banner_back_ground">
        <div className="inner-banner">
            <div className="content">
            </div>
        </div>
        <div className='contents_list_banner'>
          <ul className="inner_list_banner">
            <li className='left_list'>
            <div className="second_right_text"> We’re disrupting and building <b style={{color: 'black'}}>a new paradigm</b> for VC market</div>
            <div className="problem_text"> <b style={{color: 'black'}}>Problems</b> we address</div>
              <div className="buttonsWrapper">
                  <div className={getButtonClass('startups')} onClick={() => showImage('startups')}>Startups</div>
                  <div className={getButtonClass('investors')} onClick={() => showImage('investors')}>Investors & Experts</div>
              </div>
            </li>
            <li className='middle_list'>
            <div className="row animated-element">
              <h1> AI app where startups
                and investors find each other</h1>
            </div>
            <div className="row animated-element">
              <p>It’s like <span><b>Tinder</b></span> <span><img src="./images/plus.png"/></span> <span><b>LinkedIn</b></span> for the LinkedIn <span><b>venture capital sector</b></span></p>
            </div>
            <div className="row buttons_banner_group animated-element">
              <button type='button' className='banner_buttons' onClick={onOpenModal}>Invest <span><img src="./images/bannerIcon.png"/></span></button>
              <button type='button' className='banner_buttons '>Try it<span><img src="./images/bannerIcon.png"/></span></button>
            </div>
            <img className="banner_image animateFromDownToTop" id="image"src="./images/iphone14.png" alt="" />
            </li>
            <li className='right_list'>
            <div className="first_right_text">So that the <b style={{color: 'black'}}>best breakthrough ideas</b> and technologies emerge faster <b style={{color: 'black'}}>drive technological progress</b> and  and humanity towards a better future</div>
            <div className="images_wrapper_invest" id='images_wrapper_invest' style={{display: 'block'}}>
              <img className="startup_image" id='startup_image' src="./images/startups.png" style={{ display: activeImage === 'startups' ? 'block' : 'none' }}/>
              <img className="investors_image" id='investors_image' src="./images/experts_image.png" style={{  display: activeImage === 'investors' ? 'block' : 'none' }} />
            </div>
            </li>
          </ul>
          {/* <div className='backGroundPlate'></div> */}
        </div>
        
      </div>
      
    </div>
       
  );
};

export default Banner;