const Contact = require('../models/Contact');

// Public: Submit a message
exports.submitContact = async (req, res) => {
    try {
        const { name, email, message, product, services } = req.body;

        // Check if product exists and has at least one item (if array) or truthy (if string)
        const hasProduct = Array.isArray(product) ? product.length > 0 : !!product;

        if (!name || !email || !message || !hasProduct) {
            return res.status(400).json({ message: 'All fields (including at least one product) are required' });
        }

        // Ensure services is a string if it comes as an array
        const servicesData = Array.isArray(services) ? JSON.stringify(services) : services;
        // Ensure product is a string if it comes as an array
        const productData = Array.isArray(product) ? JSON.stringify(product) : product;

        const newContact = await Contact.create({ name, email, message, product: productData, services: servicesData });
        res.status(201).json({ message: 'Message sent successfully', contact: newContact });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Admin: Get all messages
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll({ order: [['createdAt', 'DESC']] });
        res.json(contacts);
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Admin: Delete a message
exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.destroy({ where: { id } });
        res.json({ message: 'Message deleted' });
    } catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
