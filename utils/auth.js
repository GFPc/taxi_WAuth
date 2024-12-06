require('dotenv').config();

function verifyKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    console.log("RECEIVED API KEY: " + apiKey);
    console.log("BASE64 DECODED API KEY: " + Buffer.from(apiKey, 'base64').toString('ascii'));
    const validApiKey = process.env.API_KEY;

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(401).send('Unauthorized! Invalid API Key!');
    }

    next();
}

module.exports = verifyKey;