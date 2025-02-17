import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'


const TesttimonialsSection = () => {
     
  return (
    <div className='pb-14 px-8 md:px-0 mx-4 md:mx-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>Hear from our learners about their experiences and success stories. Our platform has helped <br/>
      countless students achieve their goals and unlock their full potential.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='bg-white rounded-lg text-sm text-left border border-gray-500/30 pb-6 shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full'/>
              <div>
                <h1 className='text-lg font-medium text-gray-800 px-4 py-4'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) =>(<img key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt='' className='h-5'/>))}        
                </div>
                <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
              </div>
              <a href="#" className='text-blue-500 underline px-5'>Read more...</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TesttimonialsSection