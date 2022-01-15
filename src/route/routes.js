const express = require("express")

const router = express.Router()

const shortURL = require("../api/shortURL")
//const getURL = require("../api/getURL")

//router.get('/:code', getURL)
router.post('/shorturl/', shortURL)


//router.get('/urlshortner/:urls', urlShortner)

module.exports = router