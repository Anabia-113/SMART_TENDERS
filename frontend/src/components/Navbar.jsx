import React, { useState } from 'react';
import logo from '../images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#145289] p-5 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img className="" width={154} src={logo} alt="Logo" />
            </div>
          </div>
            <div className="hidden my-auto md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">HOME</a>
                <a href="/contact" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">CONTACT</a>
                <a href="/about" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">ABOUT</a>
              </div>
            </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">LOGIN</button>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">SIGNUP</button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">HOME</a>
            <a href="/contact" className="block text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">CONTACT</a>
            <a href="/about" className="block text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">ABOUT</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <button className="block text-white hover:text-gray-900 w-full text-left px-3 py-2 rounded-md text-base font-medium">LOGIN</button>
              <button className="block bg-blue-500 text-white w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">SIGNUP</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;