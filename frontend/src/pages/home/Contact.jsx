import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
// QRCode import removed; using external QR code image instead

const SUPPORT_EMAIL = 'mailto:your@email.com'; // Replace with your email

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [mode, setMode] = useState('contact'); // 'contact' or 'support'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }
    setSuccess('Message sent! Thank you.');
    setError('');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section" id='contact'>
      <motion.section style={{textAlign: 'center', marginBottom: '1em'}}>
        <motion.h1>Contact Me</motion.h1>
        <motion.h3>Reach out via Form, social media, or support my platform</motion.h3>
      </motion.section>
      <div className="contact-buttons">
        <button
          className={`contact-btn${mode === 'contact' ? ' active' : ''}`}
          onClick={() => setMode('contact')}
        >
          Contact Me
        </button>
        <button
          className={`support-btn${mode === 'support' ? ' active' : ''}`}
          onClick={() => setMode('support')}
        >
          Support Me
        </button>
      </div>
      <div className="contact-main">
        {mode === 'contact' ? (
          <>
            <motion.section className="contact-socials" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3>Connect with me</h3>
              <div className="social-links">
                <a href="https://github.com/T3MPEST-21" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="Visit my GitHub profile">
                  <FaGithub className="social-icon" />
                  <span className="social-text">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/chidiebere-ozuu-927644341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="Visit my LinkedIn profile">
                  <FaLinkedin className="social-icon" />
                  <span className="social-text">LinkedIn</span>
                </a>
                <a href="https://twitter.com/messages/compose?recipient_id=1712396737901879378" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Visit my Twitter profile">
                  <FaTwitter className="social-icon" />
                  <span className="social-text">Twitter</span>
                </a>
                <a href="https://wa.me/2347072070736?text=Hello%20Chidiebere%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="Visit my WhatsApp">
                  <FaWhatsapp className="social-icon" />
                  <span className="social-text">WhatsApp</span>
                </a>
              </div>
            </motion.section>
            <motion.section className="contact-form-section" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3>Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact-input"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="contact-textarea"
                />
                {error && <div className="contact-error">{error}</div>}
                {success && <div className="contact-success">{success}</div>}
                <button type="submit" className="contact-send-btn">Send</button>
              </form>
            </motion.section>
          </>
        ) : (
          <motion.section className="support-qr-section" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3>Support Me</h3>
            <p>Scan the QR code to send me an email!</p>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(SUPPORT_EMAIL)}&size=200x200`} 
              alt="QR code to email"
              width={200}
              height={200}
              style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            />
            <p style={{ marginTop: '1em', fontSize: '1.1em' }}>chidiebereozuu@gmail.com</p>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Contact;
