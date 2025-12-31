const Service = require('../models/Service');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// Helper to delete image file
const deleteImage = (imagePath) => {
    if (!imagePath) return;
    const fullPath = path.join(__dirname, '..', 'public', imagePath);
    fs.unlink(fullPath, (err) => {
        if (err && err.code !== 'ENOENT') console.error('Error deleting image:', err);
    });
};

exports.getServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createService = async (req, res) => {
    try {
        const { title, description, icon } = req.body;
        const image = req.file ? `/images/services/${req.file.filename}` : null;

        const newService = await Service.create({ title, description, icon, image });
        res.status(201).json(newService);
    } catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, icon } = req.body;
        const service = await Service.findByPk(id);

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        let image = service.image;
        if (req.file) {
            // Delete old image if exists
            deleteImage(service.image);
            image = `/images/services/${req.file.filename}`;
        }

        await service.update({ title, description, icon, image });
        res.json(service);
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByPk(id);

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        deleteImage(service.image);
        await service.destroy();
        res.json({ message: 'Service deleted' });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, status, description, features, useCases } = req.body;
        const image = req.file ? `/images/products/${req.file.filename}` : null;

        const newProduct = await Product.create({
            name,
            status,
            description,
            image,
            features: JSON.parse(features || '[]'),
            useCases: JSON.parse(useCases || '[]')
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status, description, features, useCases } = req.body;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let image = product.image;
        if (req.file) {
            deleteImage(product.image);
            image = `/images/products/${req.file.filename}`;
        }

        await product.update({
            name,
            status,
            description,
            image,
            features: features ? JSON.parse(features) : product.features,
            useCases: useCases ? JSON.parse(useCases) : product.useCases
        });
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        deleteImage(product.image);
        await product.destroy();
        res.json({ message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
