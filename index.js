require('dotenv').config();
const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const Port = process.env.Port || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api', authRoutes);
app.use('/api', taskRoutes);

db.sequelize.sync().then(() => {
  app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
  });
});