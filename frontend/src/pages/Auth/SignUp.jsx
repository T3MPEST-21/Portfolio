import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import '../../assets/styles/Login.css';

const SignUp = () => {
  const navigate = useNavigate();

  // State for form data and error handling
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    const { username, email, password, confirmPassword } = form;
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    // handling signup
    try {
      console.log("Sending signup payload:", { username, email, password });

      const trimmedForm = {
        username: username.trim(),
        email: email.trim(),
        password: password.trim()
      }
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedForm),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Account created successfully!');
      } else {
        setError(data.error || 'Signup failed.');
        return;
      }

      // saving token locally
      localStorage.setItem('token', data.token);

      // redirecting to login or dashboard
      navigate('/login');

    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className='login-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.form
        className="login"
        onSubmit={handleSubmit}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        autoComplete="off"
      >
        <h2 className="login-title">Create Account</h2>
        <label htmlFor="signup-username">Username</label>
        <input
          type="text"
          id="signup-username"
          name="username"
          value={form.username}
          onChange={handleChange}
          autoComplete="username"
          placeholder="Choose a username"
        />
        <label htmlFor="signup-email">Email</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="Enter your email"
        />
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          name="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          placeholder="Create a password"
        />
        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
          type="password"
          id="signup-confirm-password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          placeholder="Confirm your password"
        />
        {error && <div className="login-error">{error}</div>}
        <motion.button
          type="submit"
          className="login-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Sign Up'}
        </motion.button>
        <div className="login-links">
          <a href="/login">Already have an account? Login</a>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default SignUp;