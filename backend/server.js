const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
const path = require('path');

app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const apiRoutes = require('./routes/apiRoutes');

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('IT Company Backend is running');
});

// Database Connection and Server Start
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');

        // Sync models (alter: true to update schema without dropping tables)
        await sequelize.sync({ alter: true });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('Server initialized.');
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

startServer();
