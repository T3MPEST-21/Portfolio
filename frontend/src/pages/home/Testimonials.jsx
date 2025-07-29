import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'
import { FiMessageSquare} from 'react-icons/fi';

const LOCAL_STORAGE_KEY = 'testimonials';

const defaultTestimonials = [
  {
    name: 'Elu Ifeanyi',
    message: 'Working with you was a fantastic experience! Highly recommended.',
    date: '2025-05-01 10:00 AM',
  },
  {
    name: 'Smart Willie',
    message: 'Professional, creative, and always on time. Will hire again!',
    date: '2025-06-02 2:30 PM',
  },
  {
    name: 'Emilia Idoro',
    message: 'Exceeded my expectations in every way. Thank you!',
    date: '2025-06-03 5:45 PM',
  },
];

const Testimonials = () => {
  const [userTestimonials, setUserTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Load testimonials from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setUserTestimonials(parsed);
      }
    }
  }, []);

  // Save testimonials to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userTestimonials));
  }, [userTestimonials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Please enter your name and testimonial.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Testimonial message must be at least 10 characters long.');
      return;
    }
    const newTestimonial = {
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleString(),
    };
    setUserTestimonials([newTestimonial, ...userTestimonials]);
    setName('');
    setMessage('');
    setError('');
    setShowForm(false);
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your testimonial has been added.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="testimonials-section" id='testimonials'>
      <motion.section className='testimonials-intro' 
      initial={{opacity: 0, y: 80}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5 }}
          viewport={{ once: true, amount: 0.5 }}>
        <h1> What people say </h1>
      <p>Kind words from great people — grateful for every collaboration.</p>
      </motion.section>
      <motion.section className='testimonial-top'
      initial={{opacity: 0, x: -80}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}>
        <span><FiMessageSquare />Testimonials</span>
        {!showForm && (
        <button
          className="testimonials-add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Testimonial
        </button>
      )}
      </motion.section>
      {showForm && (
        <form onSubmit={handleSubmit} className="testimonials-form">
          <div className="testimonials-form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="testimonials-input"
            />
          </div>
          <div className="testimonials-form-group">
            <textarea
              placeholder="Your Testimonial"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="testimonials-textarea"
            />
          </div>
          {error && <div className="testimonials-error">{error}</div>}
          <div className="testimonials-form-actions">
            <button type="submit" className="testimonials-button">Add Testimonial</button>
            <button
              type="button"
              className="testimonials-cancel-btn"
              onClick={() => {
                setName('');
                setMessage('');
                setError('');
                setShowForm(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      <motion.div
        className="testimonials-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[...userTestimonials, ...defaultTestimonials].length === 0 && <p>No testimonials yet. Be the first to add one!</p>}
        {[...userTestimonials, ...defaultTestimonials].map((t, idx) => (
          <motion.div
            key={idx}
            className="testimonial-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-message">{t.message}</div>
            <div className="testimonial-date">{t.date}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
