import React  from 'react';
import Script from 'next/script';
import NavBar from './components/navbar';
import Separator from './components/separator';
import Banner from './components/banner';



const  HomePage = () =>  {
    return (
      <div>
        <Script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" />
        <NavBar/>
        <Separator></Separator>
        <Banner/>
      </div>
    );
  }
  export default HomePage;