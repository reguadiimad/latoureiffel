// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import '@fontsource/inter'

import BottomPage from './components/BottomPage'
import { useSelector } from 'react-redux'
import './resources/style/home.scss'
import Cycles from './components/Cycles';



function App() {
  const { language } = useSelector((state) => state.presntion); 
  return (
    <div className={`overflow-hidden text-xs md:text-sm lg:text-sm xl:text-lg 3xl:text-2xl ${language==='ar'&&'arabic'}`}>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cycles"} element={<Cycles />} />
        </Routes>
        <Navbar />
        <BottomPage/>
      </Router>
    </div>
  );
}

export default App;
