import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">Ozuu Chidiebere Divine</div>
          <div className="footer-description">
            &copy; {new Date().getFullYear()} Chidiebere Divine. All rights reserved.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/T3MPEST-21" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub className="footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/chidiebere-ozuu-927644341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin className="footer-social-icon" />
            </a>
            <a href="https://twitter.com/messages/compose?recipient_id=1712396737901879378" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">
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
