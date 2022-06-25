import React from 'react';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../Home';
import House from './House'



const Pages = () => {

  return (
    
    <Routes>
      <Route exact path="*" element={<Home />} />
      <Route exact path="/house/:id" element={<House />} />
    </Routes>
  );
}

export default Pages;