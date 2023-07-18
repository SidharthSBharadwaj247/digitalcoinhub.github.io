import React from 'react';
import { useState } from 'react';
import {currency} from '../data';
import {IoIosArrowforward} from 'react-icons/io';
const Trade = () => {
  const [itemName,setItemName]=useState('Bitcoin');
  return (<section className='section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]'>
    <div className='container mx-auto'>
        <h2  data-aos='fade-up' data-aos-offset='400' className=' section-title text-center'>Discover the ultimate solution for secure trading and unlock the potential of high-growth crypto currencies! </h2>
        <div  data-aos='fade-up' data-aos-offset='400' className='flex flex-col gap-[45px] lg:flex-row'>
          {currency.map((item,index)=>{
            const{image,name,abbr,description}=item;
           return ( <div onClick={()=>{
              setItemName(name);
           }} className={`${name === itemName? 'bg-violet text-white':'bg-white'} w-full rounded-full py-12 px-6 shadow-primary cursor-pointer transition duration-300`} key={index}>
            <div  className='flex flex-col justify-center items-center'>
            <img src={image}>
                    
                    </img>
                    <div className='mb-4 flex items-center gap-x-2'>
                    <div className='text-[32px] font-bold'>{name}</div>
                        <div>{abbr}</div>
                      </div>
                    
                        <p className='mb-6 text-center'>{description}</p>
                    <button className={`${name===itemName?'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3':'text-blue w-16 '} border-2 border-gray-300 rounded-full h-16 flex justify-center items-center text-sm`}>Start Mining</button>
            </div>
                
            </div>)
          })}
        </div>
    </div>
  </section>);
};  

export default Trade;
