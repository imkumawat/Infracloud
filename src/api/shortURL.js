
function urlShortner(req, res) {


    if (!req.body.url) {
        console.log("URL is not found")
        return res.status(404).json({ message: 'URL is not found' })
    }

    else {
        console.log("URL found")
        return res.status(200).json({ message: 'URL is found' })
    }



    //return res.redirect("https://www.google.com")
}

module.exports = urlShortner