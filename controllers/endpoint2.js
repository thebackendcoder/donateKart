const getData = require('../services/axios')

async function secondQuestion(req, res) {
    try {
        const resp = await getData();
        const filterResp = resp.data.filter((val) => {
            let d = new Date();
            let dateTime = d.getTime();
            let prevThirty = d.setDate(d.getDate() - 30);
            let lastDate = Date.parse(val.endDate);
            let createdDate = Date.parse(val.created);
            if (lastDate > dateTime && createdDate >= prevThirty) {
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

module.exports = secondQuestion;