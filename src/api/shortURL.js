const urls = require("../model/model")
const shortid = require('shortid')
const validUrl = require('valid-url')
const log = require('../log/log')

async function urlShortner(req, res) {

    if (!req.body.longurl) {
        log.info("URL is not found")
        return res.status(404).json({ message: 'URL is not found' })
    }
    let urlobj = {}
    urlobj.longurl = req.body.longurl
    let url = await urls.findOne(urlobj, { _id: 0, __v: 0, ids: 0 })

    if (url) {
        log.info("URL already exist in database")
        log.info(url)
        return res.status(200).json({ message: `Shortened URL: ${url.shorturl}` })
    }

    if (!validUrl.isUri(req.body.longurl)) {
        log.info('Invalid URL')
        return res.status(400).json({ message: 'URL is Invalid' })
    }

    const baseurl = "localhost:5000/"
    const urlCode = shortid.generate()
    const shorturl = baseurl + urlCode

    obj = {}

    obj.createdAt = new Date()
    obj.longurl = req.body.longurl
    obj.shorturl = shorturl
    obj.ids = urlCode



    urls.create(obj)
        .then(doc => {
            log.info(doc)
            return res.status(201).json({ message: `Shortened URL: ${shorturl}` })
        })
        .catch(err => {
            log.info(err)
            return res.status(500).json({ message: 'Internal Server Error' })
        })



    //return res.redirect("https://www.google.com")
}

module.exports = urlShortner