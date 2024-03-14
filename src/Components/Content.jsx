import React from 'react';
import { Link } from 'react-router-dom';
import sportwagen from '../img/lambo.png';
import suv from '../img/suv.png';
import kleinwagen from '../img/kleinwagen.png';

function Content() {
  return (
    <>
      <div className="flex justify-around p-10 items-center text-center">
        {/* Sportwagen Card */}
        <div className="w-80 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center"> 
            <img src={sportwagen} alt="lambo" className="h-40 object-cover w-64" />
          </div>
          <div className="p-10">
            <h3 className="text-xl font-semibold mb-2">SPORTWAGEN</h3>
            <p className='p-2'>ab 399 € / Tag</p>
            <Link to="/pay?car=sportwagen">
              <button className="bg-black text-white pt-2 py-2  rounded-md w-full">Mieten</button>
            </Link>
          </div>
        </div>

        {/* SUV Card */}
        <div className="w-80 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center">
            <img src={suv} alt="suv" className="h-40 object-cover w-64" />
          </div>
          <div className="p-10">
            <h3 className="text-xl font-semibold mb-2">SUV</h3>
            <p className='p-2'>ab 249 € / Tag</p>
            <Link to="/pay?car=suv">
              <button className="bg-black text-white px-4 py-2 rounded-md w-full">Mieten</button>
            </Link>
          </div>
        </div>

        {/* Kleinwagen Card */}
        <div className="w-80 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center">
            <img src={kleinwagen} alt="kleinwagen" className="h-40 object-cover w-64" />
          </div>
          <div className="p-10">
            <h3 className="text-xl font-semibold mb-2">KLEINWAGEN</h3>
            <p className='p-2'>ab 99 € / Tag</p>
            <Link to="/pay?car=kleinwagen">
              <button className="bg-black text-white px-4 py-2 rounded-md w-full">Mieten</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
