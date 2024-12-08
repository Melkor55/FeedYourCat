// routes/catRoutes.js
const express = require('express');
const catController = require('../controllers/catController');
const router = express.Router();

router.post('/cats', catController.createCat);
router.get('/cats', catController.getCats);
router.put('/cats/:id', catController.updateCat);
router.delete('/cats/:id', catController.deleteCat);

module.exports = router;
