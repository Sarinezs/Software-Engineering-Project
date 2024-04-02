const express = require('express')
const router = express.Router()
const { order_list, order_create } = require('../Controllers/Order')

router.get('/Order', order_list)
router.post('/Order', order_create)

module.exports = router