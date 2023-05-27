const express = require('express')
const router = express.Router()

const QuestionController = require('../controller/question.js')
// const AnswerController = require('../controller/answer.js')

router.post('/question', QuestionController.saveQuestion)
// router.post('/answer', AnswerController.answer)


module.exports = router