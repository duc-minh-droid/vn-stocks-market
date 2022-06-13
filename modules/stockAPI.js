const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "sandbox_caj111qad3i94jmmsob0" // Replace this
const finnhubClient = new finnhub.DefaultApi()


const dataAPI = finnhubClient.stockSymbols("VN", (error, data, response) => {
    return data
});

const executiveAPI = finnhubClient.companyExecutive('AAPL', (error, data, response) => {
    return data
});

const newsAPI = finnhubClient.marketNews("general", {}, (error, data, response) => {
    return data
})

const transAPI = finnhubClient.insiderTransactions('AAPL', (error, data, response) => {
    console.log(data);
  });
// module.exports = companyAPI
