import React, { useState, useEffect } from 'react';
import { isDragActive, motion } from 'framer-motion';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Header/Nav';
import AppRouter from './router/AppRouter';
import Login from './pages/Auth/Login';
import Footer from './components/Footer/Footer';
/*import HomePage from './pages/home/HomePage';*/

const App = () => {
  const [IsDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
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

  return (
    <div className={IsDarkMode ? 'dark-mode' : 'light-mode'}>
      <button
        title='Toggle Theme, alt+t'
        onClick={toggleTheme}
        className='toggle-btn'
        tabIndex={0}
        onKeyDown={e => {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 't') {
            e.preventDefault();
            toggleTheme();
          }
        }}
      >
        {IsDarkMode ? '☀️' : '🌙'}
      </button>
      <Router>
        <Nav />
        <AppRouter />
        {/*<HomePage />*/}
        <Footer />
      </Router>
    </div>
  );
};

export default App;