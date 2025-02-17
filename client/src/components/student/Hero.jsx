import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full
     md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center 
     bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-[48px] md:leading-[56px] text-[28px] leading-[34px] relative font-bold 
       text-gray-800 max-w-3xl mx-auto'>Empowering your learning journey and <span className='text-blue-600'>achieve your educational goals with ease.</span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden 
        absolute -bottom-7 right-0' />
      </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'> 
        Our platform offers a wide range of courses designed to help you excel in your studies and career.
      </p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
        Join our community of learners and take the next step in your educational journey.
      </p>
      <SearchBar/>
    </div>
  );
}

export default Hero;