const express = require('express');
const cors = require('cors');
const dotenvJSON = require('dotenv-json');

const env = process.env.NODE_ENV || 'dev';
dotenvJSON({ path: `./config.${env}.json` });


const app = express();
const router = require('./router.js')

app.use('/', router);

app.get('*', (req, res) => {
    res.status(404).json({
        message: "bad Request"
    });
});

app.listen(3000, ()=>{
    console.log("listening at port 3000");
})








