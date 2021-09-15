
const axios = require('axios');
const https = require('https');


async function getData() {
    const url = process.env.externalUrl
    try {
        const resp = await axios.get(url, {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });
        return resp
    }
    catch (err) {
        console.log("err")
    }
}

module.exports= getData
