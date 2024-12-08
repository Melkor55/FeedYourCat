// index.js
const express = require('express');
const sequelize = require('./config/database');
const catRoutes = require('./routes/catRoutes');
const foodRoutes = require('./routes/foodRoutes');
const feedingScheduleRoutes = require('./routes/feedingScheduleRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', catRoutes);
app.use('/api', foodRoutes);
app.use('/api', feedingScheduleRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
