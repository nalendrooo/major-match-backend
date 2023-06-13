const Questions = require('../models/questions')
const { nanoid } = require('nanoid')
const Answer = require('../models/answer')
const axios = require('axios')
const { SEARCHProdi } = require('../service/apiPddkti')

const saveQuestion = async (req, res) => {
	const { question } = req.body

	if (!question) {
		return res.status(400).json({ message: 'Question undefined' })
	}

	try {
		const id = nanoid(20)
		const userId = req.userId
		await Questions.create({
			id: id,
			id_user: userId,
			question: question,
		})

		//TODO: perlu dikerjakan
		const getAnswer = await axios.post('http://localhost:8080/predict', {
			text: 'question',
		})

		await Answer.create({
			id_question: id,
			answer: getAnswer.data,
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
// const deleteQuestion = async () => {}
// const getAllQuestions = async () => {}
const getAnswer = async (req, res) => {
	const id = req.params.id

	if (!id) {
		res.status(400).json({ message: 'Id Undefined' })
	}

	try {
		const allAnswer = await Answer.findAll({
			attributes: ['answer'],
			where: {
				id_question: id,
			},
		})

		const result = allAnswer.map(async (index) => {
			const response = await SEARCHProdi(index.answer)
			return response.prodi.length
		})

		const university = await Promise.all(result)

		const data = allAnswer.map((answer, index) => {
			return {
				prodi: answer.answer,
				university: university[index],
			}
		})

		res.json({
			id_question: id,
			data: data,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Terjadi kesalahan pada server',
		})
	}
}

module.exports = {
	saveQuestion,
	getAnswer,
}
