const express = require('express')
const router = express.Router()
const { cart_list, cart_create, cart_remove } = require('../Controllers/Cart')

const { auth } = require('../Middleware/auth')
const { upload } = require('../Middleware/upload')

router.get('/Cart', cart_list)
router.post('/Cart', cart_create)
router.delete('/Cart/:id', cart_remove)

module.exports = router