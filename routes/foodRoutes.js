// routes/foodRoutes.js
const express = require('express');
const foodController = require('../controllers/foodController');
const router = express.Router();

router.post('/foods', foodController.createFood);
router.get('/foods', foodController.getFoods);
router.get('/foods/:id', foodController.getFoodById);
router.put('/foods/:id', foodController.updateFood);
router.delete('/foods/:id', foodController.deleteFood);
router.get('/food-ranges', foodController.getFoodRanges);

module.exports = router;
