import React, { useState, useEffect  } from 'react';
import { gsap } from "gsap";

const Banner = () => {

  const [activeImage, setActiveImage] = useState('startups');

  const [activeButton, setActiveButton] = useState('startups');

  let stateTest = 'startups';
  let scrollCounter = 0;
  const showImage = (image) => {
    stateTest = image
    console.log(image)
    if(image == 'startups'){
      scrollCounter = 0;
    }
    setActiveImage(image);
    setActiveButton(image);
  };

  const getButtonClass = (button) => {
    return `banner_buttons_ ${button === activeButton ? 'active' : ''}`;
  };

  useEffect(() => {
    const fixedElement = document.getElementById('images_wrapper_invest');
    const myAbsoluteElement = document.getElementById('myAbsoluteElement');
    const myBodyElement = document.body;


    const handleScroll = () => {

      if(window.scrollY >= 3000){
        //myBodyElement.style.overflow = 'hidden';
       
      }

      if(window.scrollY >= 2333){
        fixedElement.style.display = 'block';
      }

      if(window.scrollY >= 3800){
        fixedElement.style.right = '81px';
        fixedElement.style.top = '4171px';
        fixedElement.style.position = 'absolute';
      }else{
        fixedElement.style.position = 'fixed';
        fixedElement.style.right = '78px';
        fixedElement.style.top = '632px';
      }


      if(window.scrollY >= 3500){
        myAbsoluteElement.style.position = 'absolute';
        myAbsoluteElement.style.left = '7%';
        myAbsoluteElement.style.top = '4325px';
      }

      
    };

    const handleScrollWheel = (event) => {
      const deltaY = event.deltaY;
      
    
     
      if (deltaY < 0) {
        // Scrolling up
          scrollCounter = scrollCounter + 1;
          console.log(scrollCounter)
          if(scrollCounter > 10){
            showImage('experts');
          }else if(scrollCounter < 10 && scrollCounter > 5) {
            showImage('investors');
          }else{
            showImage('startups');
          }

      } else if (deltaY > 0) {
        scrollCounter = scrollCounter - 1;
        // Scrolling down
        if (stateTest === 'startups') {
          showImage('investors');
         
        } else if (stateTest === 'investors') {
          showImage('experts');
         
        } else {
          // If 'experts' or any other state, go to 'startups'
          myBodyElement.classList.add('overFlowUnSet');
         
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

   // window.addEventListener('wheel', handleScrollWheel);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      //window.removeEventListener('wheel', handleScrollWheel);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="banner">
      <div className="banner_back_ground">
        <div className="inner-banner">
            <div className="content">
            <div className="row animated-element">
              <h1> AI app where startups
                and investors find each other</h1>
            </div>
            <div className="row animated-element">
              <p>It’s like <span><b>Tinder</b></span> <span><img src="./images/plus.png"/></span> <span><b>LinkedIn</b></span> for the LinkedIn <span><b>venture capital sector</b></span></p>
            </div>
            <div className="row buttons_banner_group animated-element">
              <button className='banner_buttons '>Invest <span><img src="./images/bannerIcon.png"/></span></button>
              <button className='banner_buttons '>Try it<span><img src="./images/bannerIcon.png"/></span></button>
            </div>
            <div className="second_right_text"> We’re disrupting and building <b style={{color: 'black'}}>a new paradigm</b> for VC market</div>
            <div className="problem_text"> <b style={{color: 'black'}}>Problems</b> we address</div>
            <div className="first_right_text">So that the <b style={{color: 'black'}}>best breakthrough ideas</b> and technologies emerge faster <b style={{color: 'black'}}>drive technological progress</b> and  and humanity towards a better future</div>
            <div className="banner_investors_buttons" id='myAbsoluteElement'>
               <div className={getButtonClass('startups')} onClick={() => showImage('startups')}>Startups</div>
               <div className={getButtonClass('investors')} onClick={() => showImage('investors')}>Investors</div>
               <div className={getButtonClass('experts')} onClick={() => showImage('experts')}>Experts</div>
            </div>
            <div className="images_wrapper_invest" id='images_wrapper_invest' style={{display: 'none'}}>
              <img className="startup_image" id='startup_image' src="./images/startups.png" style={{ display: activeImage === 'startups' ? 'block' : 'none' }}/>
              <img className="investors_image" id='investors_image' src="./images/investors_image.png" style={{  display: activeImage === 'investors' ? 'block' : 'none' }} />
              <img className="experts_image"  id='experts_image' src="./images/experts_image.png" style={{  display: activeImage === 'experts' ? 'block' : 'none' }}/>
            </div>
            </div>
        </div>
        <img className="banner_image animateFromDownToTop" src="./images/iphone14.png" alt="" />
      </div>
      
    </div>
       
  );
};

export default Banner;