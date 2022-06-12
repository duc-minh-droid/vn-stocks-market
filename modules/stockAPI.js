const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "caitkgaad3i2a9kciing" // Replace this
const finnhubClient = new finnhub.DefaultApi()


module.exports = finnhubClient
