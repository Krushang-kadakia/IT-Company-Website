const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true // e.g., 'Live', 'Beta', 'Coming Soon'
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    features: {
        type: DataTypes.JSON, // Store list of features as JSON array
        allowNull: true,
        defaultValue: []
    },
    useCases: {
        type: DataTypes.JSON, // Store list of use cases as JSON array
        allowNull: true,
        defaultValue: []
    }
}, {
    timestamps: true
});

module.exports = Product;
