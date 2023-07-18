import React from 'react';
import Image1 from '../assets/img/feature-1-img.png'
const FeaturesSection1 = () => {
  return( <section className='pb-[30px] lg:pb-[120px] pt-0'>
    <div className='flex flex-col lg:flex-row justify-center items-center p-10'
    
    >
      <div data-aos='fade-right' data-aos-offset='400' className='max-w-[454px] mb-6 lg:mt-10'>
      <h3 className='h3 mb-6 '>Invest Smart</h3>
      <p className='text-gray mb-8'>Introducing our revolutionary tool that provides you with comprehensive statistics on buyer and seller behaviour! Gain invaluable insights to make informed decisions like never before. 
        Don't miss out on this game-changing opportunity!</p>
        <button className='btn px-8'>
          Learn more
        </button>
      </div>
      <div  className='lg:pl-10'>
        <img data-aos='fade-left' data-aos-offset='400' src={Image1}>

        </img>
      </div>
    </div>
  </section>);
};

export default FeaturesSection1;
