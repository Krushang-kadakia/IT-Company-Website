const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

const upload = require('../config/upload');

// Services
router.get('/services', apiController.getServices);
router.post('/services', upload.single('image'), apiController.createService);
router.put('/services/:id', upload.single('image'), apiController.updateService);
router.delete('/services/:id', apiController.deleteService);

// Products
router.get('/products', apiController.getProducts);
router.post('/products', upload.single('image'), apiController.createProduct);
router.put('/products/:id', upload.single('image'), apiController.updateProduct);
router.delete('/products/:id', apiController.deleteProduct);

module.exports = router;
