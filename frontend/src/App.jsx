import React, { useState, useEffect } from 'react';
import { isDragActive, motion } from 'framer-motion';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Header/Nav';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/Common/CustomCursor';
/*import HomePage from './pages/home/HomePage';*/

const App = () => {
  const [IsDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    const body = document.body;
    localStorage.setItem('theme', IsDarkMode ? 'dark' : 'light');

    if (IsDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }

  }, [IsDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!IsDarkMode);
  };

  // Add keyboard shortcut: Ctrl + T
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === 't') {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [IsDarkMode]);

  // Pre-fetch critical images for optimization
  useEffect(() => {
    const imagesToPrefetch = [
      '/images/me.png',
      '/images/ghost_hand.png',
      '/images/soniqueLogo.png',
      '/images/battery-guardian.png',
      '/images/kineticLogo.png'
    ];
    imagesToPrefetch.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className={IsDarkMode ? 'dark-mode' : 'light-mode'}>
      <CustomCursor />
      {/* Background Blobs for Liquid Effect */}
      <div className="bg-blobs">
        <div className="blob" style={{ top: '-10%', left: '-10%', background: 'var(--burnt-dark-blue2)' }}></div>
        <div className="blob" style={{ top: '60%', right: '-10%', background: 'var(--highlight-dark)', animationDelay: '-5s' }}></div>
        <div className="blob" style={{ bottom: '-10%', left: '20%', background: 'var(--burnt-dark-blue1)', animationDelay: '-10s' }}></div>
      </div>

      <Router>
        <Nav toggleTheme={toggleTheme} IsDarkMode={IsDarkMode} />
        <AppRouter />
        {/*<HomePage />*/}
        <Footer />
      </Router>
    </div>
  );
};

export default App;