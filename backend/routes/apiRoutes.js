const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/services', apiController.getServices);
router.get('/products', apiController.getProducts);

module.exports = router;
