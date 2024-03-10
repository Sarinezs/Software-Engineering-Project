const express = require('express')
const router = express.Router()
const { getimage } = require('../Controllers/getimage')

router.get('/getImage', getimage)




module.exports = router