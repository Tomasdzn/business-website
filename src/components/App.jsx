import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Body from './Body/Body';
import About from './About/About';
import PreFooter from './PreFooter/PreFooter';
import Footer from './Footer/Footer';

import './App.css';

const App = () => {

  return (
    <div className="main-container">
      <Navbar />
      <div className='intro-header-container'>
        <Banner />
        <Body />
        <About />
        <PreFooter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
