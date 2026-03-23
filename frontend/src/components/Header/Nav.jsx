import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Nav.css';
import { FiMessageSquare, FiMail, FiHome, FiAward, FiLayers, FiUser } from 'react-icons/fi';
import { HiHomeModern } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const sectionIds = [
  { id: 'home', label: 'Home', icon: <FiHome className='nav-icons' /> },
  { id: 'about', label: 'About', icon: <FiUser className='nav-icons' /> },
  { id: 'skills', label: 'Skills', icon: <FiLayers className='nav-icons' /> },
  { id: 'projects', label: 'Projects', icon: <FiAward className='nav-icons' /> },
  { id: 'testimonials', label: 'Testimonials', icon: <FiMessageSquare className='nav-icons' /> },
  { id: 'contact', label: 'Contact', icon: <FiMail className='nav-icons' /> },
];



import { PERSONAL_INFO } from '../../constants';

const Nav = ({ toggleTheme, IsDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const getNickname = (name) => {
    return name.split(' ')[0].toUpperCase();
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const section of sectionIds) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on nav link click (mobile)
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  // Close menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div 
        className={`nav-overlay${menuOpen ? ' visible' : ''}`} 
        onClick={() => setMenuOpen(false)}
      ></div>
      <motion.nav className="nav">
        <motion.div className='logo'>
          <a href="/"> &lt;/&gt; {PERSONAL_INFO.nickname}</a>
        </motion.div>
        <div className="nav-actions">
          <button
            title='Toggle Theme, alt+t'
            onClick={toggleTheme}
            className='theme-toggle-nav'
            aria-label="Toggle theme"
          >
            {IsDarkMode ? '☀️' : '🌙'}
          </button>
          <div
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle navigation menu"
            tabIndex={0}
            role="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <motion.section className={`nav-links${menuOpen ? ' open' : ''}`}>
          {sectionIds.map((section, idx) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link${activeSection === section.id ? ' active' : ''}`}
              onClick={e => handleClick(e, section.id)}
              style={{ '--idx': idx }} // For potential framer-motion stagger or CSS delays
            >
              {section.icon} {section.label}
            </a>
          ))}
        </motion.section>
      </motion.nav>
    </>
  );
};

export default Nav;
