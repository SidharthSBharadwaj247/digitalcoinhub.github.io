import React from 'react';
import {HiChartBar , HiUser, HiGlobe} from 'react-icons/hi';
import Aos from 'aos';
const Stats = () => {
  return (
    // <div className='z-[999] cursor-pointer'>
    //   <h1 className='text-white'>
    //     Hiiii
    //   </h1>
    // </div>
    <section className='pt-24' data-aos="fade-up" data-aos-delay="1200">

<div className='container mx-auto '>
      <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
        <div className='flex items-center gap-x-6'>
        <div className='bg-white/10 w-20 h-20 rounded-full flex items-cente justify-center text-blue text-2xl lg:text-4xl'>
            <HiChartBar className='text-6xl  pt-5'/>
        </div>
        <div>
        <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
          $30B
        </div>
        <div className=''>Digital Currency Exchanged</div>
        </div>
        </div>
        <div className='flex items-center gap-x-6'>
        <div className='bg-white/10 w-20 h-20 rounded-full flex items-cente justify-center text-blue text-2xl lg:text-4xl'>
            <HiUser className='text-6xl  pt-5'/>
        </div>
        <div>
        <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
          10M+
        </div>
        <div className=''>Trusted Wallet Investor</div>
        </div>
        </div>
        <div className='flex items-center gap-x-6'>
        <div className='bg-white/10 h-20 w-20 flex justify-center items-center rounded-full  text-blue text-2xl lg:text-4xl'>
        
            <HiGlobe  className='text-6xl  pt-0'/>
        </div>
        <div>
        <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
          195
        </div>
        <div className=''>Countries Supported</div>
        </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Stats;
