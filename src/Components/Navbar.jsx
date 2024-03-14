import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-2">
      <div className="flex items-center justify-between">
        <div className="p-4 text-white text-xl font-bold"><Link to="/"><img src={logo} alt="logo" className='w-10' /></Link></div>
        <ul className="flex space-x-4 text-white hover:text-gray-300">

          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>Über Uns</li></Link>
          <Link to="/contact"><li>Kontakt</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;