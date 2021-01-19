const serverless = require('serverless-http');
const express = require('express');
var cors = require('cors');
const app = express();
const axios = require('axios'); 

app.use(cors({
  origin: 'https://djnhavesfyhcf.cloudfront.net'
}));

app.get('/', async function (req, res) {
    const { data }  = await axios.get('http://yerkee.com/api/fortune');
    const { fortune } = data;
    res.send(fortune);
})

module.exports.handler = serverless(app);