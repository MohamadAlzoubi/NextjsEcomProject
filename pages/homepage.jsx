import React , {useState , useEffect} from 'react';
import Script from 'next/script';
import NavBar from './components/navbar';
import Swiper from './components/swiper';
import ProductList from './components/productslist';
import Separator from './components/separator';
import SignUpModal from '../pages/components/signUpModal';



const  HomePage = () =>  {
  const [cart , setCart] = useState([]);
  const [isLoggedIn , setIsLoggedIn] = useState(false); 

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(isLoggedIn));
    console.log('triggered')
  }, [isLoggedIn]);
  
  const handleAddToCart  = (item) => {
      setCart([...cart , item])
      console.log(cart)
  }
    return (
      <div>
        <Script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" />
        <NavBar cartCount={cart.length} isLoggedIn={isLoggedIn}/>
        <Swiper/>
        <Separator></Separator>
        <ProductList handleAddToCart={handleAddToCart}/>
        <SignUpModal setIsLoggedIn={setIsLoggedIn}/>
      </div>
    );
  }
  export default HomePage;
  
  
