const express = require('express');
const router = express.Router();

const ccxt = require('ccxt');
// let bitfinex = new ccxt.bitfinex();




/* GET home page */
router.get('/', (req, res, next) => {

  (async () => {
    let bitfinex = new ccxt.bitfinex ()
    let markets = await bitfinex.load_markets ()
    console.log (bitfinex.id, markets)
  }) ()


  // console.log(ccxt.exchanges);
  // console.log(bitfinex.id + " " + bitfinex.name);
  res.render('index');
});

module.exports = router;
