const express = require("express")

const router = express.Router()

const urlShortner = require("../api/urlShortner")

router.post('/urlshortner/', urlShortner)

//router.get('/urlshortner/:urls', urlShortner)

module.exports = router