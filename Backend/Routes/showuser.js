const express = require('express')
const router = express.Router()
const {listuser} = require('../Controllers/showuser')

router.get('/getuser', listuser)

module.exports = router