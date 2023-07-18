import React from 'react';
import Image2 from '../assets/img/feature-2-img.png'
const FeaturesSection2 = () => {
  return (
    <section className='pb-[30px] lg:pb-[120px] '>
    <div className='flex flex-col lg:flex-row justify-center items-center p-10'
    
    >
      
      <div data-aos='fade-right' data-aos-offset='400' className='lg:order-2 max-w-[454px] mb-6 lg:mt-10'>
      <h3 className='h3 mb-6 '>Detailed statistics</h3>
      <p className='text-gray mb-8'>Experience the power of real-time mining information at your fingertips! Explore a world of mining possibilities, anytime, anywhere. 
      Discover and choose the perfect mining polls that suit your needs.!</p>
        <button className='btn px-8'>
          Learn more
        </button>
      </div>
      <div  className=' lg:p-10  '>
        <img data-aos='fade-left' data-aos-offset='400' src={Image2}>

        </img>
      </div>
    </div>
  </section>
  );
};

export default FeaturesSection2;
