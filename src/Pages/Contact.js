import React from 'react'
import Navbar from '../Components/Navbar'
import ToggleDarkMode from '../Components/toogleDarkMode'

function Contact() {
  return (
    <>
    <Navbar />
    <div className='text-center mx-auto min-h-screen'><h1 className="text-4xl p-10 font-bold ">KONTAKT</h1><p className='text-1xl'>Schreiben Sie uns unter <span className='underline text-blue-900'>info@ri-cars.de</span><br></br>Oder rufen Sie an unter 0800 53830 34348</p></div>
    <ToggleDarkMode />
    </>
    
  )
}

export default Contact