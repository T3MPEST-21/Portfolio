const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// 🔐 LOGIN
router.post('/login', async (req, res) => {
  const { loginId, password } = req.body;

  // Validation check
  if (!loginId || !password) {
    return res.status(400).send({ error: 'Username and password are required.' });
  }

  try {
    const user = await User.findOne({ 
         // Allow login with either username or email
        $or: [{ username: loginId }, { email: loginId }]
     });

    if (!user) {
      return res.status(400).send({ error: 'Invalid username or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid username or password.' });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.send({
      message: 'Login successful!',
      token,
      user: { username: user.username, email: user.email }
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).send({ error: 'Server error during login.' });
  }
});

// 🔐 SIGNUP
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Validation check
  if (!username || !email || !password) {
    return res.status(400).send({ error: 'Username, email, and password are required.' });
  }

  try {
    // Check for existing username or email
    const duplicate = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (duplicate) {
      return res.status(400).send({ error: 'Username or email already taken.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).send({
      message: 'Signup successful!',
      token,
      user: { username: newUser.username, email: newUser.email }
    });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).send({ error: 'Server error during signup.' });
  }
});

module.exports = router;