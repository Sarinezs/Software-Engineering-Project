const express = require('express')
const router = express.Router()

const {register, login, Checkuser, update} = require('../Controllers/auth')




// http://localhost:5000/api/register
router.post('/register', register)

router.post('/login', login)

router.get('/Checkuser', Checkuser)

router.put('/user_update', update)

module.exports = router