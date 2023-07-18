import React from 'react';
import Logo from '../assets/img/logo.png';
import VisaImg from '../assets/img/visa.png';
import MastercradImg from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';
import {IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io';
const Footer = () => {
  return (<footer className='lg:pt-24 pt-0'>
    <div className='container mx-auto lg:mb-24'>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
          <a href=''>
            <img src={Logo}></img>
          </a>
        </div>
        <div className='flex flex-1 flex-col lg:flex-row'>
          <div className='text-center w-full lg:text-left'>
            <div className='text-xl font-medium mb-6 '>
              Quick Links
              <ul className='space-y-4 text-gray'>
                <li className='hover:text-blue transition'><a href='#'>Home</a></li>
                <li className='hover:text-blue transition'><a href='#'>Products</a></li>
                <li className='hover:text-blue transition'><a href='#'>About</a></li>
                <li className='hover:text-blue transition'><a href='#'>Feature</a></li>
                <li className='hover:text-blue transition'><a href='#'>Contacts</a></li>
              </ul>
            </div>
          </div>
          <div className='text-center w-full lg:text-left'>
            <div className='text-xl font-medium mb-6 '>
              Resource Links
              <ul className='space-y-4 text-gray'>
                <li className='hover:text-blue transition'>
                  <a href='#'>Download Whitepapper</a></li>
                <li className='hover:text-blue transition'>
                  <a href='#'>Smart Token</a></li>
                <li className='hover:text-blue transition'>
                  <a href='#'>Blockchain Explore</a></li>
                <li className='hover:text-blue transition'>
                  <a href='#'>Crypto API</a></li>
                <li className='hover:text-blue transition'>
                  <a href='#'>Interest</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col flex-1'>
          <div className='lg:ml-[80px]'>
            <h3 className='h3 font-medium text-center items-center gap-6'>
              We accept following payment systems
            </h3>
            <div className='flex justify-center items-center  gap-6'>
              <img src={VisaImg}/>
              <img src={MastercradImg}/>
              <img src={BitcoinImg}/>
            </div>
          </div>
        </div>
      </div>
      </div> 
      <div className='py-12 container mx-auto flex flex-col items-center 
      gap-y-6 lg:flex-row lg:jusify-end lg:gap-y-0 lg:gap-x-10'>
        <div className=''>
        &copy; 2022 CRAPPO. All rights reserved.
        </div>
        <div className='flex text-2xl gap-x-8'><a className='hover:text-blue transition' href='#'><IoLogoYoutube></IoLogoYoutube></a>
        <a className='hover:text-blue transition' href='#'><IoLogoInstagram/></a>
        <a className='hover:text-blue transition' href='#'><IoLogoTwitter/></a>
        <a className='hover:text-blue transition' href='#'><IoLogoLinkedin/></a>
        </div>
        </div>
  </footer>);
};

export default Footer;
