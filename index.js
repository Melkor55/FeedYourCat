// index.js
const express = require('express');
const sequelize = require('./config/database');
const Cat = require('./models/Cat');
const Food = require('./models/Food');
const FeedingSchedule = require('./models/FeedingSchedule');

const app = express();
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
