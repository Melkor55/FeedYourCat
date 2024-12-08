// models/Food.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredients: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  specialDiet: {
    type: DataTypes.STRING,
    allowNull: true
  },
  catAge: {
    type: DataTypes.ENUM,
    values: ['kitten', 'adult', 'senior'],
    allowNull: false
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  foodType: {
    type: DataTypes.ENUM,
    values: ['dry', 'wet', 'liquid', 'rewards', 'supplements'],
    allowNull: false
  },
  packageType: {
    type: DataTypes.ENUM,
    values: ['bag', 'pouch', 'can', 'cup', 'pillow bag', 'box', 'tube', 'stick packs'],
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Food;
