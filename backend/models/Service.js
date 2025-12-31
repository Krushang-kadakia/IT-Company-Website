const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING, // Store icon name or path
        allowNull: true
    },
    image: {
        type: DataTypes.STRING, // Store image path or URL
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = Service;
