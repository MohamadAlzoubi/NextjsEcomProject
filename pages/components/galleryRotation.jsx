import React, { useState, useEffect  } from 'react';

const GalleryRotation = () => {

  const [activeImage, setActiveImage] = useState('startups');

  const [activeButton, setActiveButton] = useState('startups');


  const showImage = (image) => {
    setActiveImage(image);
    setActiveButton(image);
  };

  const getButtonClass = (button) => {
    return `banner_buttons_ ${button === activeButton ? 'active' : ''}`;
  };

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  useEffect(() => {
    let lastScrollTop = 0;
    let angle = 0;

    let throttleTimeout;

    const handleScroll = () => {
      console.log('I am here')
      if (window.scrollY > 3374 && window.scrollY < 6000) {


      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        angle = Math.min(angle - 1, 77);
      } else {
        angle = Math.max(angle + 1, -88);
      }

      updateImagePositions(angle);
      lastScrollTop = st <= 0 ? 0 : st;
    }
    };

    const updateImagePositions = (angle) => {
      
        // const images = document.querySelectorAll('.circle-container');
        // images.forEach((image, index) => {
        //   const delay = index * (180 / images.length);
        //   image.style.transform = `rotate(${angle + delay}deg)`;
        // });
      
    };

    const throttledHandleScroll = throttle(handleScroll, 3000);

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <>
    
    <div className="controlWrapper" style={{width : '90%' , margin : 'auto' , maxWidth: '1800px'}}>
      <div className="banner_investors_buttons" id='myAbsoluteElement'>
      <div className="second_right_text"> We’re disrupting and building <b style={{color: 'black'}}>a new paradigm</b> for VC market</div>
      <div className="problem_text"> <b style={{color: 'black'}}>Problems</b> we address</div>
      <div className="buttonsWrapper">
      <div className={getButtonClass('startups')} onClick={() => showImage('startups')}>Startups</div>
            <div className={getButtonClass('investors')} onClick={() => showImage('investors')}>Investors & Experts</div>
        </div>
      </div>
           
        <div className="images_wrapper_invest" id='images_wrapper_invest' style={{display: 'block'}}>
        <div className="first_right_text">So that the <b style={{color: 'black'}}>best breakthrough ideas</b> and technologies emerge faster <b style={{color: 'black'}}>drive technological progress</b> and  and humanity towards a better future</div>
        {/* <div className="background" style={{height: '0px' , position: 'relative' , zIndex : '0'}}>
           <img src="./images/bannerBackGround.png" alt="" />
        </div> */}

          <img className="startup_image" id='startup_image' src="./images/startups.png" style={{ display: activeImage === 'startups' ? 'block' : 'none' }}/>
          <img className="investors_image" id='investors_image' src="./images/experts_image.png" style={{  display: activeImage === 'investors' ? 'block' : 'none' }} />
        </div>
    </div>
    
      <div className="row gallery_wrapper">
        <h1 className="howItWorks">How it works</h1>
        <div className="circle-container">
          <img className="moving-element" id="image1" src="./images/CardsTest.png" alt="a dream catcher"/>
          <img className="moving-element" id="image2" src="./images/CardsTest.png" alt="a dream catcher"/>
          <img className="moving-element" id="image3" src="./images/CardsTest.png" alt="a dream catcher"/>
          <img className="moving-element" id="image4" src="./images/CardsTest.png" alt="a dream catcher"/>
        </div>
      </div>
    </>
  );
};

export default GalleryRotation;
