import React, { useEffect,useState } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavMobile from './components/NavMobile';
import Stats from './components/Stats';
import Why from './components/Why';
import Calculate from './components/Calculate';
import Trade from './components/Trade';
import Features from './components/Features';
import Newsletter from './components/Newsletter'
import Footer from './components/Footer';
const App = () => {
  const [navshow,setnavshow]=useState(false);
  useEffect(()=>{
    Aos.init({
      duration: 3000,
      delay:400
    })
  })
  return (<div className='overflow-hidden '>
    <Header setnavshow={setnavshow}/>
    <Hero/>
    <div className={`${navshow ?'right-0':'-right-full'} z-10 top-0 fixed h-full   transition-all duartion-5000`}>
      <NavMobile setnavshow={setnavshow}>

      </NavMobile>
      
    </div>
    <Stats/>
    <Why/>
    <Calculate/>
    <Trade/>
    <Features/>
    <Newsletter/>
    <Footer/>
    
  </div >);
};

export default App;
