// models/FeedingSchedule.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cat = require('./Cat');
const Food = require('./Food');

const FeedingSchedule = sequelize.define('FeedingSchedule', {
  time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

Cat.hasMany(FeedingSchedule);
FeedingSchedule.belongsTo(Cat);
Food.hasMany(FeedingSchedule);
FeedingSchedule.belongsTo(Food);

module.exports = FeedingSchedule;
