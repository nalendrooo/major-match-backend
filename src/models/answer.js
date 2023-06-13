const { Sequelize } = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const Answer = db.define(
	'answer',
	{
		id_question: {
			type: DataTypes.STRING,
		},
		answer: {
			type: DataTypes.TEXT,
		},
	},
	{
		freezeTableName: true,
	}
)

module.exports = Answer
