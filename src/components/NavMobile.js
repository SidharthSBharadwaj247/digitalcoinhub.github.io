import React from 'react';
import {navData} from '../data';
import {CgClose} from 'react-icons/cg';
const NavMobile = ({setnavshow}) => {
  return (
    <nav className='lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center'>
      <div onClick={()=> setnavshow(false)} className='absolute top-2 left-2 cusor-pointer '>
      <CgClose/>
    </div>
    <ul className='text-xl flex flex-col gap-y-8'>
      {navData.map((item,index)=>{
        return (<li>
          <a href={item.href}>{item.name}</a>
        </li>);
      })}
    </ul>
    </nav>
    
  );
};

export default NavMobile;
