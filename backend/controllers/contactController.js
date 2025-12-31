const Contact = require('../models/Contact');

// Public: Submit a message
exports.submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContact = await Contact.create({ name, email, message });
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
