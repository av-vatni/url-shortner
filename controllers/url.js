const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewShortUrl(req, res) {
    // Get the body data
    const body = req.body;

    // Check if the url is given or not
    if (!body.url) return res.status(400).json({ error: 'URL is required' });

    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    })

    return res.json({ id: shortId });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    
    return res.json({
        totalClicks: result.visitHistory.length, analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
}