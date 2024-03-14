import React from "react";
import sportwagen from '../img/lambo.png';
import tiguan from '../img/tiguan.png';
import kleinwagen from '../img/kleinwagen.png';
import Menu from '../Components/Menu'
import Navbar from '../Components/Navbar'

export default function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const car = queryParameters.get("car");

  const carImages = {
    sportwagen: sportwagen,
    suv: tiguan,
    kleinwagen: kleinwagen
  };

  const Prices = {
    sportwagen: 399,
    suv: 249,
    kleinwagen: 99
  };
 

  if (car == kleinwagen && carImages[car]) {
    
  }

  return (
    <div><Navbar/>
      <div className="text-center">
        <h2 className="font-bold text-3xl p-10">Wählen Sie Ihren Traumwagen aus!</h2>
        <p className="text-1">Von Sport bis hin zu SUV und Kleinwägen</p>
      </div>
      <Menu />
      {car !== null && carImages[car] && <img src={carImages[car]} alt="foto" className="w-[50%]" />}
    </div>
  );
}
