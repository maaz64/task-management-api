const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password){
    return res.status(400).json({message:"All fields are required"})
  }
  try {
    const alreadyRegisteredUser = await db.User.findOne({ where: { username } });
    if(alreadyRegisteredUser){
      return res.status(409).json({message:"user already registered!!!"})
    }
    
    const user = await db.User.create({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password){
    return res.status(400).json({message:"All fields are required",})
  }
  try {
    const user = await db.User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials'});
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({message: "Logged in successfully", data:{username:user.username, token}});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
