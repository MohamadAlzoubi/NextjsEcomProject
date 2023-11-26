import React, { useEffect } from 'react';

const GalleryRotation = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    let angle = 0;
    let isThrottled = false;
    let throttleTimeout;

    const handleScroll = () => {
      if (window.scrollY > 3374 && window.scrollY < 6000) {
      if (isThrottled) return;
      isThrottled = true;

      throttleTimeout = setTimeout(() => isThrottled = false, 10);

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
      
        const images = document.querySelectorAll('.circle-container');
        images.forEach((image, index) => {
          const delay = index * (180 / images.length);
          image.style.transform = `rotate(${angle + delay}deg)`;
        });
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(throttleTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
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
