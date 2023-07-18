import React from 'react';
import Image3 from '../assets/img/feature-3-img.png'
const FeaturesSection3 = () => {
  return ( <section className='pb-[30px] lg:pb-[120px] '>
  <div className='flex flex-col lg:flex-row justify-center items-center p-10'
  
  >
    <div data-aos='fade-right' data-aos-offset='400' className='max-w-[454px] mb-6 lg:mt-10'>
    <h3 className='h3 mb-6 '>Grow your profit and track your investment</h3>
    <p className='text-gray mb-8'>Innovative trading tools!
     Our innovative technology unlocks your trading potential. 
      Tracking profit investments has never been easier. 
      Don't wait—get your Clear Investment Chart immediately!</p>
      <button className='btn px-8'>
        Learn more
      </button>
    </div>
    <div  className='lg:pl-3'>
      <img data-aos='fade-left' data-aos-offset='400'  src={Image3}>

      </img>
    </div>
  </div>
</section>) ;
};

export default FeaturesSection3;
