"use client"
import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Top' },
    { id: 2, text: 'About US' },
    { id: 3, text: 'Events' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='fixed bg-neutral-800 flex justify-between items-center h-15 w-screen mx-auto px-4 text-white z-20'>
      {/* Logo
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <img src='/misaelLogo.png' alt={"Logo Misael Project"} height={75} width={75} />
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        <img src='/misaelLogo.png' alt={"Logo Misael Project"} height={50} width={50} />
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-100 h-full border-r border-r-gray-900 bg-neutral-800 ease-in-out duration-500 px-3'
            : 'ease-in-out w-100 duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className='flex justify-center'>
            <img src='/misaelLogo.png' alt={"Logo Misael Project"} height={50} width={50} onClick={()=>handleNav()}/>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
