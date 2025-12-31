const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

const upload = require('../config/upload');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Auth
router.post('/auth/login', authController.login);

// Services
router.get('/services', apiController.getServices);
router.post('/services', authMiddleware, upload.single('image'), apiController.createService);
router.put('/services/:id', authMiddleware, upload.single('image'), apiController.updateService);
router.delete('/services/:id', authMiddleware, apiController.deleteService);

// Products
router.get('/products', apiController.getProducts);
router.post('/products', authMiddleware, upload.single('image'), apiController.createProduct);
router.put('/products/:id', authMiddleware, upload.single('image'), apiController.updateProduct);
router.delete('/products/:id', authMiddleware, apiController.deleteProduct);

// Contact
const contactController = require('../controllers/contactController');
router.post('/contact', contactController.submitContact);
router.get('/contact', authMiddleware, contactController.getContacts);
router.delete('/contact/:id', authMiddleware, contactController.deleteContact);

module.exports = router;
