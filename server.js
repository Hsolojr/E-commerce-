// Main entry point for the server
const express = require('express');
const routes = require('./routes');
const Sequelize = require('./config/connection');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Sync Sequelize models to the database, then turn on the server
Sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});