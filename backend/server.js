const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");

dotenv.config();

// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/taskhub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Base route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const distPath = path.resolve(__dirname, "../frontend/dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

/*require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/user');
const verifyToken = require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// 🏠 Base route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the TaskHub API!' });
});

// 🔐 Signup
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ error: 'Username and password are required.' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ error: 'Username already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).send({
      message: 'Signup successful!',
      token,
      user: { username }
    });
  } catch (err) {
    res.status(500).send({ error: 'Server error during signup.' });
  }
});

// 🔑 Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ error: 'Username and password are required.' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ error: 'Invalid username or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid username or password.' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({
      message: 'Login successful!',
      token,
      user: { username }
    });
  } catch (err) {
    res.status(500).send({ error: 'Server error during login.' });
  }
});

// 🛡️ Protected dashboard
app.get('/api/dashboard', verifyToken, (req, res) => {
  res.send({ message: `Welcome to your dashboard, ${req.user.username}!` });
});

// 🚀 Server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
}); */