// controllers/foodController.js
const { Op } = require('sequelize');
const Food = require('../models/Food');

exports.createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFoods = async (req, res) => {
  try {
    const filters = {};
    if (req.query.name) filters.name = { [Op.like]: `%${req.query.name}%` };
    if (req.query.brand) filters.brand = { [Op.like]: `%${req.query.brand}%` };
    if (req.query.catAge) filters.catAge = req.query.catAge;
    if (req.query.foodType) filters.foodType = req.query.foodType;
    if (req.query.packageType) filters.packageType = req.query.packageType;
    if (req.query.specialDiet) filters.specialDiet = { [Op.like]: `%${req.query.specialDiet}%` };
    if (req.query.minQuantity && req.query.maxQuantity) {
      filters.quantity = { [Op.between]: [req.query.minQuantity, req.query.maxQuantity] };
    }
    if (req.query.minPrice && req.query.maxPrice) {
      filters.price = { [Op.between]: [req.query.minPrice, req.query.maxPrice] };
    }

    const foods = await Food.findAll({ where: filters });
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFoodRanges = async (req, res) => {
  try {
    const minQuantity = await Food.min('quantity');
    const maxQuantity = await Food.max('quantity');
    const minPrice = await Food.min('price');
    const maxPrice = await Food.max('price');

    res.status(200).json({ minQuantity, maxQuantity, minPrice, maxPrice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateFood = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (food) {
      await food.update(req.body);
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (food) {
      await food.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
