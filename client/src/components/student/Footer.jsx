import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row justify-center items-start
       gap-10 py-10 px-8 md:px-0 md:gap-32 border-b border-white/30'>
         <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
         </div>
         <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col  w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>

          </ul>
         </div>
         <div className='hidden md:flex flex-col md:items-start  w-full'>
             <h2 className='font-semibold text-white mb-5'>Subcribe to our newsletter</h2>
            <p className='text-sm text-white/80'>Stay updated with our latest news, articles, 
            and resources, sent straight to your inbox every month.</p>
            <div className='flex items-center gap-2 pt-4'>
              <input type="email" placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800
              text-gary-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
              <button className='w-24 h-9 bg-blue-600 text-white rounded'>Subscribe</button>
         </div>
      </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'> copyright 2025 @Samudra. All Rights Reserved.</p>
    </footer>
  
  )
}

export default Footer