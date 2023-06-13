const express = require('express')
const router = express.Router()

const QuestionController = require('../controller/question.js')

router.post('/question', QuestionController.saveQuestion)
router.get('/answer/:id', QuestionController.getAnswer)

module.exports = router
