const express = require("express")

const router = express.Router()

const shortURL = require("../api/shortURL")

router.post('/shorturl/', shortURL)


module.exports = router