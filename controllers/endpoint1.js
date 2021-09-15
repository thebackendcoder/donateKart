
const getData = require('../services/axios')

async function firstQuestion(req, res) {
    try {
        const resp = await getData();
        const reqResp = resp.data.map((val) => {
            const value = {
                title: val.title,
                totalAmount: val.totalAmount,
                backersCount: val.backersCount,
                endDate: val.endDate
            }
            return value;
        }).sort((a, b) => {
            return b.totalAmount > a.totalAmount ? 1
                : b.totalAmount < a.totalAmount ? -1
                    : 0
        })
        res.status(200).json({
            reqResp
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            message: "error in feting the data"
        })
    }

}

module.exports = firstQuestion;