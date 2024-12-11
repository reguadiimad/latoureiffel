// src/App.js
import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import '@fontsource/inter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // import individual icons

library.add(faCoffee);

// Lazy load BottomPage
const BottomPage = lazy(() => import('./components/BottomPage'));

function App() {
  const [showBottomPage, setShowBottomPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is near the bottom of the page
      if (
        window.innerHeight + window.scrollY >= 
        document.documentElement.scrollHeight - 100
      ) {
        setShowBottomPage(true); // Trigger the loading
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden text-xs md:text-sm lg:text-sm xl:text-lg 3xl:text-2xl">
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          {showBottomPage && <BottomPage />}
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
