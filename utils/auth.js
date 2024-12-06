require('dotenv').config();
function hex(arrayBuffer)
{
    return Array.prototype.map.call(
        new Uint8Array(arrayBuffer),
        n => byteToHex[n]
    ).join("");
}
function verifyKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    console.log("RECEIVED API KEY: " + apiKey);
    console.log("BASE64 DECODED API KEY: " + hex(Buffer.from(apiKey, 'base64')));
    const validApiKey = process.env.API_KEY;

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(401).send('Unauthorized! Invalid API Key!');
    }

    next();
}

module.exports = verifyKey;