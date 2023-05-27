const express = require('express')
const router = express.Router()

const AuthController = require('../controller/auth.js')

router.get('', AuthController.getAllUser)


module.exports = router