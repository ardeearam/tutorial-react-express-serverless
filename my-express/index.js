const serverless = require('serverless-http');
const express = require('express');
var cors = require('cors');
const app = express();
const axios = require('axios'); 

app.use(cors({
  origin: '*'
}));

app.get('/', async function (req, res) {
  /*
  const fortunes = [
    'Lead by example, not by words alone.',
    "Pay attention to your family. Don't take them for granted.",
    'Just have fun.',
    'Love is right around the corner.',
    'Tomorrow is another day.'
    
  ];
  */
    //res.send('Baka');
    const { data }  = await axios.get('http://yerkee.com/api/fortune');
    const { fortune } = data;
    res.send(fortune);
})

module.exports.handler = serverless(app);