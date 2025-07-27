import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../assets/styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ loginId: '', password: '' });
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

    const { loginId, password } = form;

    // Basic validation
    if (!loginId.trim() || !password.trim()) {
      setError('Please enter both username (or email)and password.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          loginId,
          password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Invalid username or password.');
        setLoading(false);
        return;
      }

      // Save token locally
      localStorage.setItem('token', data.token);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
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
        <h2 className="login-title">Sign In</h2>
        <label htmlFor="login-id">Username or Email</label>
        <input
          type="text"
          id="login-id"
          name="loginId"
          value={form.loginId}
          onChange={handleChange}
          autoComplete="username"
          placeholder="Enter your username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          placeholder="Enter your password"
        />
        {error && <div className="login-error">{error}</div>}
        <motion.button
          type="submit"
          className="login-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Login'}
        </motion.button>
        <div className="login-links">
          <a href="/forgot-password">Forgot password?</a>
          <span> | </span>
          <a href="/signup">Create account</a>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Login;