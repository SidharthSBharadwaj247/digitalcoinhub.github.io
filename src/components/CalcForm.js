import React from 'react';

const CalcForm = () => {
  const list=[{name:'TH/s', value:1}, {name:'H/s',value:2} , {name:'KH/s', value:3}, {name:'MH/s' , value:4}, {name:'GH/s', value:5}]
  return (<div className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary ' data-aos='fade-up'>
    <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
      <input className=' ' type="text" placeholder='Enter your hash rate'/>
      <select className='select'>
        {list.map((data,index)=>{
          return(
            <option key={index} value=''>{data.name}</option>
          );
        })}
        {/* <option value=''>TH/s</option>
        <option value=''>H/s</option>
        <option value=''>KH/s</option>
        <option value=''>MH/s</option>
        <option value=''>GH/s</option> */}
      </select >
      <button className='btn text-white px-8 flex self-start'>
        Calculate
      </button>
    </form>
    <div>
      <div className='font-blue font-medium'>ESTIMATED 24 HOUR REVENUE:</div>
      <div className='text-[32px] font-bold mb-3'>0.055 130 59 ETH<span className='text-blue'>($1275)</span></div>
      <div className='text-gray-500 tracking-[1%]'>Revenue will change based on mining difficulty and Ethereum price</div>
    </div>
  </div>);
};

export default CalcForm;
