import React from 'react';
// import './App.css';
import Header from '../Header';
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../Home';
import Box from './Box';



const Pages = () => {

  return (

    <>
      <Router >
      <Header />
      <Box/>
      <Home/>
    </Router>
    </>
  );
}

export default Pages;