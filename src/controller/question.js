const Questions = require('../models/questions')
const { nanoid } = require('nanoid')

const saveQuestion = async (req, res) => {
	const { question } = req.body

	if (!question) return res.sendStatus(204)

	try {
		const id = nanoid(20)
		const userId = req.userId
		await Questions.create({
			id: id,
			id_user: userId,
			question: question,
		})
		res.status(201).json({
			id_question: id,
			message: 'Question created successfully',
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Terjadi kesalahan pada server',
		})
	}
}
const deleteQuestion = async () => {}
const getAllQuestions = async () => {}
const getQuestion = async (req, res) => {
	const id = req.params.id
}

module.exports = {
	saveQuestion,
}
