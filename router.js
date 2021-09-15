const express = require('express');
const endpoint1 = require('./controllers/endpoint1');
const endpoint2 = require('./controllers/endpoint2');
const endpoint3 = require('./controllers/endpoint3');
const router = express.Router();


router.get('/endpoint1', endpoint1);
router.get('/endpoint2', endpoint2);
router.get('/endpoint3', endpoint3);


module.exports= router


