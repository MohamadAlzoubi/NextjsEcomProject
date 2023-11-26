import React  from 'react';
import Script from 'next/script';
import NavBar from './components/navbar';
import Separator from './components/separator';
import Banner from './components/banner';
import WhyUs from './components/galleryRotation';
import Achievements from './components/achievements';
import Footer from './components/footer';
import ActiveMembers from './components/activeMembers';



const  HomePage = () =>  {
    return (
      <div>
        <Script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" />
        <NavBar/>
        <Separator></Separator>
        <Banner/>
        <WhyUs/>
        <Achievements/>
        <ActiveMembers/>
        <Footer/>
      </div>
    );
  }
  export default HomePage;