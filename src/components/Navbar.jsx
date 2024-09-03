import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-950 p-4 text-white fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between px-3">
        
        <div className="hidden sm:flex space-x-5 items-center text-sm">
          <Link to='/' className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to='/about' className="hover:text-red-400 transition duration-300">About</Link>
        </div>
        
        <div className="text-2xl font-extrabold">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">Nitish SM</Link>
        </div>
        
        <div className="hidden sm:flex space-x-5 items-center text-sm">
          <Link to='/projects' className="hover:text-blue-400 transition duration-300">Projects</Link>
          <Link to='/experience' className="hover:text-green-400 transition duration-300">Experience</Link>
          <Link to='/contact' className="hover:text-orange-400 transition duration-300">Contact</Link>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-950 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu} className="hover:text-yellow-400 transition duration-300">Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu} className="hover:text-red-400 transition duration-300">About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu} className="hover:text-blue-400 transition duration-300">Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu} className="hover:text-green-400 transition duration-300">Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu} className="hover:text-orange-400 transition duration-300">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;