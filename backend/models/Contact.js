const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    product: {
        type: DataTypes.TEXT, // Changed to TEXT to store multiple products as JSON
        allowNull: false
    },
    services: {
        type: DataTypes.TEXT, // Storing as stringified JSON or comma-separated values
        allowNull: true
    }
});

module.exports = Contact;
