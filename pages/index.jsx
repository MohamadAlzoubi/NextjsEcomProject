import React  from 'react';
import Script from 'next/script';
import NavBar from './components/navbar';
import Separator from './components/separator';
import Banner from './components/banner';
import GalleryRotation from './components/galleryRotation';
import Achievements from './components/achievements';
import Footer from './components/footer';
import Statistics from './components/Statistics';
import StatisticsDesktop from './components/StatisticsDesktop';
import QuarterTable from './components/QuarterTable';
import Employees from './components/Employees';
import DataSubmit from './components/DataSubmit';

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <GalleryRotation/>
    <Achievements/>
    <StatisticsDesktop/>
    <QuarterTable/>
    <Employees/>  
    <Footer/>
    <DataSubmit/>
    </>
  );
};

export default HomePage;