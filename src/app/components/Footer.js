import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='bg-secondary rounded-t-2xl p-4 relative lg:px-32 lg:py-12'>
      <div className='bg-primary rounded-2xl px-4 py-4 text-white flex flex-col gap-y-4 lg:flex-row items-center w-full gap-x-8 lg:py-8 lg:mb-8 lg:px-12'>
        <p className='text-lg lg:text-2xl lg:w-1/3'>Register now so you dont miss our programs</p>
        <div className='flex flex-col bg-white rounded-2xl p-3 gap-y-4 mt-4 lg:flex-row w-full lg:w-2/3 lg:gap-x-4 lg:mt-0'>
          <input type='text' className='rounded-xl p-1 py-2 border-2 lg:w-2/3 text-black' placeholder='Enter your email'/>
          <button className='bg-primary rounded-xl p-2 lg:w-1/3'>Subscribe Now</button>
        </div>
      </div>
      <div className='w-full mt-6 flex flex-col lg:flex-row items-center'>
        <ul className='flex w-full justify-center items-center gap-x-8'>
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className='flex w-full justify-center items-center gap-x-8 mt-4 lg:mt-0'>
          <li><IoLogoFacebook  className='w-6 h-6'/></li>
          <li><IoLogoTwitter  className='w-6 h-6'/></li>
          <li><IoLogoInstagram  className='w-6 h-6'/></li>
          <li><IoLogoYoutube  className='w-6 h-6'/>
          </li>
        </ul>
      </div>
      <div className='w-full flex flex-col items-center justify-center text-center mt-12 border-t-gray-600 lg:mt-36'>
        <img src='./logo.svg'/>
        <div className='text-gray-500'>
          <ul className='flex gap-x-4 mt-4'>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <span className='mt-4'>© 2022 Monito. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
