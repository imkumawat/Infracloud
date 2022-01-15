function getURL(req, res) {

    if (!req.body.shorturl) {
        console.log("Short URL is not found")
        return res.status(404).json({ message: 'Short URL is not found' })
    }
}
module.exports = getURL