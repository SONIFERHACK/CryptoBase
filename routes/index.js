const express = require('express');
const router = express.Router();

const ccxt = require('ccxt');


/* GET home page */
router.get('/', (req, res, next) => {


  (async () => {
    let bitfinex = new ccxt.bitfinex()
    let tickers = [];
    let markets = await bitfinex.load_markets()

    // console.log (bitfinex.id, markets)

    if (bitfinex.has['fetchTickers']) {
      // console.log(await (bitfinex.fetchTickers())) // all tickers indexed by their symbols
      tickers = await (bitfinex.fetchTickers());
    }

    await res.render('index', {tickers});
  })()

  
});

module.exports = router;