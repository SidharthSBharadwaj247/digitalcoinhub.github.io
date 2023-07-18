import React from 'react';
import Image from '../assets/img/why-img.png'
import Aos from 'aos';
const Why = () => {
  return (<section>
            <div className='container mx-auto'>
              <div className='flex flex-row items-center gap-x-8'>
                <div className='order-2 lg:order-1'>
                  <img data-aos='fade-right' data-aos-offser='400' src={Image}></img>
                </div>
                <div data-aos='fade-left' data-aos-offser='400' className='order-1 lg:order-2 max-w-[480px]'>
                  <h2 className='section-title'>Why you should choose CRAPPO?</h2>
                  <p className='section-subtitle'>Discover the future of cryptocurrency investment with CRAPPO, where cutting-edge technology, unparalleled security measures, and expert financial guidance converge to unlock a world of lucrative opportunities for investors like you. </p>
                <button className='btn px-6'>Learn More</button>
                </div>
              </div>

            </div>
  </section>);
};
          <div className='container mx-auto'>
            <div>
              <div>

              </div>
            </div>

          </div>
export default Why;
