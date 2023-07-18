import React from 'react';
import Logo from '../assets/img/logo.png'
import Nav from './Nav';
import AccountBtns from './AccountBtns';
import { CgMenuRight} from 'react-icons/cg'
import { useState } from 'react';
import Aos from 'aos';
const Header = ({setnavshow}) => {
  return (
  <header data-aos='fade-down' data-aos-delay='900' data-aos-duation='2000' className='py-[30px] lg:pt-[60px]'>
    <div className='container mx-auto flex items-center justify-between'><a href='#'>
      <img className=' h-36 inline'  src={Logo}/>
      DIGITAL COIN HUB
      </a>
      <div className='hidden lg:flex gap-x-[55px]'>
        <Nav/>
        <AccountBtns/>
      </div>
      <div onClick={()=> setnavshow(true)} className='lg:hidden cursor-pointer'>
        <CgMenuRight className='text-2xl'/>
      </div>
      </div>
  </header>
  );
};

export default Header;
