// Destructured Category model from models/index.js
const { Category } = require('../models');

// Array of objects to create Category instances
const categoryData = [
	{
		category_name: 'Shirts',
	},
	{
		category_name: 'Shorts',
	},
	{
		category_name: 'Music',
	},
	{
		category_name: 'Hats',
	},
	{
		category_name: 'Shoes',
	},
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;