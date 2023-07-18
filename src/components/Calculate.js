import React from 'react';
import CalcForm from './CalcForm';
import Aos from 'aos';
const Calculate = () => {
  return (
    <section className='py-20 ' data-aos='fade-up' data-aos-offset='400'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2  className='section-title'>Have you ever wondered how much you can earn? Try this. </h2>
          <p className='section-subtitle'>
            Let's check your hash rate to see how much you will earn today.
          </p>
        </div>
        <CalcForm/>
        </div> 
    </section>
  );
};

export default Calculate;
