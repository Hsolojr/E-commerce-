// Import important Sequelize parts
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection.js');

class Tag extends Model {}

// Define table columns and configuration
Tag.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		tag_name: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'tag',
	}
);

module.exports = Tag;