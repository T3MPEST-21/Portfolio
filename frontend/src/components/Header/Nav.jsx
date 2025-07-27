import React, { useState, useEffect } from 'react';
import '../../global.css';
import { FiMessageSquare, FiMail, FiHome, FiAward, FiLayers, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from '../../../public/images/logo.png';

const sectionIds = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser style={{ marginRight: '5px' }} /> },
  { id: 'projects', label: 'Projects', icon: <span>&lt;/&gt;</span> },
  { id: 'exprerience', label: 'Experience', icon: <FiAward style={{ marginRight: '5px' }} /> },
  { id: 'skills', label: 'Skills', icon: <FiLayers style={{ marginRight: '5px' }} /> },
  { id: 'testimonials', label: 'Testimonials', icon: <FiMessageSquare style={{ marginRight: '5px', marginBottom: '-2px' }} /> },
  { id: 'contact', label: 'Contact', icon: <FiMail style={{ marginRight: '5px', marginBottom: '-2px' }} /> },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

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

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav className="nav">
      <motion.div className='logo'>
        <a href="/"> &lt;/&gt; T3MPEST</a>
      </motion.div>
      <motion.section className='nav-links'>
        {sectionIds.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-link${activeSection === section.id ? ' active' : ''}`}
            onClick={e => handleClick(e, section.id)}
          >
            {section.icon} {section.label}
          </a>
        ))}
      </motion.section>
    </motion.nav>
  );
};

export default Nav;
