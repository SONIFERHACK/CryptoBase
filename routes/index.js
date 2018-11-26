const express = require('express');
const router = express.Router();

const ccxt = require('ccxt');
let bitfinex = new ccxt.bitfinex();


/* GET home page */
router.get('/', (req, res, next) => {
  console.log(ccxt.exchanges);
  console.log(bitfinex);
  res.render('index');
});

module.exports = router;
