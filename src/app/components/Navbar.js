"use client"
import React, { useState } from 'react'
import {IoClose, IoMenuSharp, IoSearchOutline} from "react-icons/io5"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ToggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
  }
  return (
    <div className='w-full flex  justify-between px-4 py-3  items-center lg:px-12 z-40 relative'>
      <div className='lg:hidden'>
        <IoSearchOutline className='w-8 h-8'/>
      </div>
      <div>
        <img src='./logo.svg' />
      </div>
      <div className='hidden lg:flex'>
        <ul className='flex gap-x-4 text-primary font-bold'>
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='hidden lg:flex items-center gap-x-2 p-2 bg-white rounded-lg'>
        <IoSearchOutline />
        <input type='text' placeholder='Search something here!' className=' outline-none'/>
      </div>
      <button className='text-white bg-primary rounded-3xl py-2 px-6 hidden lg:flex'>
        Join the community
      </button>
      <div className='lg:hidden'>
        <IoMenuSharp  className='w-8 h-8' onClick={ToggleMenu}/>
      </div>
      {isMenuOpen && (
        <div className='w-2/3 bg-white border-l-2 absolute top-0 right-0 h-screen  px-4 py-6 lg:hidden z-50'>
          <div className='w-full flex justify-end bg-white relative'>
            <IoClose  className='w-8 h-8 ' onClick={ToggleMenu}/>
          </div>
          <ul className='flex flex-col mt-8 gap-y-4 text-primary font-bold relative bg-white'>
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
