// controllers/catController.js
const Cat = require('../models/Cat');

exports.createCat = async (req, res) => {
  try {
    const cat = await Cat.create(req.body);
    res.status(201).json(cat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCats = async (req, res) => {
  try {
    const cats = await Cat.findAll();
    res.status(200).json(cats);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCat = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id);
    if (cat) {
      await cat.update(req.body);
      res.status(200).json(cat);
    } else {
      res.status(404).json({ error: 'Cat not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCat = async (req, res) => {
  try {
    const cat = await Cat.findByPk(req.params.id);
    if (cat) {
      await cat.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Cat not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
