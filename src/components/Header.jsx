"use client"

// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or brand */}
        <Link className="text-black text-lg font-bold" href="/">
        HiSAURABH
        </Link>

        {/* Responsive toggle button */}
        <button
          className="lg:hidden text-black focus:outline-none hover:bg-gray-800 hover:text-white rounded-xl p-1"
          onClick={toggleNavbar}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <Link className="text-black  hover:bg-gray-600 hover:text-white rounded-xl p-1  " href="/">
            Home
          </Link>
          <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/about">
            How HiSAURABH work?
          </Link>
          <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/contact">
           Services
          </Link>
          <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/contact">
           Pricing
          </Link>
          <Link className="text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/contact">
           Contact Us
          </Link>
          <button className="block text-white bg-black rounded-xl p-1 hover:bg-gray-600" >
            Login
            </button>
        </div>

        {/* Responsive Navbar links */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0  p-4">
            <Link  className="block text-black mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/">
              home
            </Link>
            <Link className="block text-black mb-2 hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/about">
            How HiSAURABH work?
            </Link>
            <Link className="block text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/contact">
            Services
            </Link>
            <Link className="block text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/contact">
             Pricing 
            </Link>
            <Link className="block text-black hover:bg-gray-600 hover:text-white rounded-xl p-1" href="/contact">
             Contact Us
            </Link>
            <button className="block text-white bg-black rounded-xl p-1 hover:bg-gray-700" >
            Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
