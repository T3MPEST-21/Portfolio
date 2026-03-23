import { PERSONAL_INFO } from '../../constants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const getNickname = (name) => {
    return name.split(' ')[0].toUpperCase();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">{PERSONAL_INFO.name}</div>
          <div className="footer-description">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name.split(' ')[1]} {PERSONAL_INFO.name.split(' ')[2]}. All rights reserved.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub className="footer-social-icon" />
            </a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin className="footer-social-icon" />
            </a>
            <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">
              <FaTwitter className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Made with <span style={{color: '#e25555', fontSize: '1.2em'}}>♥</span> by {PERSONAL_INFO.nickname}
      </div>
    </footer>
  );
};

export default Footer;
