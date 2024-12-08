// models/Cat.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cat = sequelize.define('Cat', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.ENUM,
    values: ['kitten', 'adult', 'senior'],
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Cat;
