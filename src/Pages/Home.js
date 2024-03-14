import React from 'react'
import Navbar from '../Components/Navbar'
//import ToggleDarkMode from '../Components/toogleDarkMode'
import Content from '../Components/Content'

function Home() {
  return (<>
      <Navbar />
      <div className='text-center'><h1 className="text-4xl p-10 font-bold ">RIAN CARS</h1><p className='text-1xl'>Miete alle Art von Autos innerhalb Deutschland.</p></div>
      <Content />
      
  </>
    
  )
}

export default Home