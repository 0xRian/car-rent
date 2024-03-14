import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Payment from '../Pages/Payment'

const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/pay" element={<Payment />}/>
      </Routes>
      </BrowserRouter>
    )
}

export default Router;