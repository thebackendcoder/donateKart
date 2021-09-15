
const getData = require('../services/axios')

async function thirdQuestion(req, res) {
    const url = process.env.externalUrl
    try {
        const resp = await getData();
        const filterResp = resp.data.filter((val) => {
            let d = new Date();
            let dateTime = d.getTime();
            let lastDate = Date.parse(val.endDate);
            if (lastDate < dateTime || val.procuredAmount > val.totalAmount) {
                return val;
            }
        })
        res.status(200).json({
            filterResp
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            message: "there was an error fetching the data"
        })
    }

}


module.exports = thirdQuestion;