const express = require('express')
const router = express.Router()
const { cart_list, cart_create } = require('../Controllers/Cart')

const { auth } = require('../Middleware/auth')
const { upload } = require('../Middleware/upload')

router.get('/Cart', cart_list)
router.post('.Cart', upload, cart_create)

module.exports = router