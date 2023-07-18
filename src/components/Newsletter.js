import React from 'react';
import NewsletterForm from '../components/NewsletterForm';
const Newsletter = () => {
  return (<section className='py-[40px] lg:py-[88px] bg-newsletter bg-cover'>
    <div className='container mx-auto'>
      <div data-aos='fade-up' data-aos-offset='400'  className='flex flex-col lg:flex-row items-center justify-between
       bg-blue p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat 
       lg:h-[216px]'>
        <div className='flex-1 w-full'>
          <h3 className='h3 mb-4'>
            Start mining now
          </h3>
          <p className='max-w-[3448px] mb-8'>Experience the ultimate news and mining revolution with CRAPPO!
             Join now to unlock the latest updates and embark on an incredible mining journey. </p>
        </div>
        <NewsletterForm/>
      </div>
    </div>
  </section>);
};

export default Newsletter;
