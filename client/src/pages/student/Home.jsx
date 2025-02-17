import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TesttimonialsSection from '../../components/student/TesttimonialsSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center text-center  space-y-7 '>

      <Hero/>
      <Companies/>
      <CoursesSection/>
      <TesttimonialsSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home