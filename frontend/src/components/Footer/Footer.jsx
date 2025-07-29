import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">Ozuu chidiebere Divine</div>
          <div className="footer-description">
            &copy; {new Date().getFullYear()} Chidiebere Divine. All rights reserved.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub className="footer-social-icon" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <FaInstagram className="footer-social-icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin className="footer-social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">
              <FaTwitter className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Made with <span style={{color: '#e25555', fontSize: '1.2em'}}>♥</span> by T3MPEST
      </div>
    </footer>
  );
};

export default Footer;
