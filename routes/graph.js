const express = require('express');
const router = express.Router();

const ccxt = require('ccxt');


/* GET home page */
router.get('/graph', (req, res, next) => {


  (async () => {
    let bitfinex = new ccxt.bitfinex()
    let series = [];
    let markets = await bitfinex.load_markets()

    // console.log (bitfinex.id, markets)

    // if (bitfinex.has['fetchTickers']) {
    //   console.log(await (bitfinex.fetchTickers())) // all tickers indexed by their symbols
    // }


    // if (bitfinex.has['fetchTicker']) {
      // console.log (await (bitfinex.fetchTicker ('BTC/USDT'))) // ticker for BTC/USD
      // let symbols = Object.keys (exchange.markets)
      // let random = Math.floor (Math.random () * (symbols.length - 1))
      // console.log (exchange.fetchTicker (symbols[random])) // ticker for a random symbol
  // }
    let inputSymbol = 'BTC/USDT', timeUnit = '1h', sinceTs = 1543017600000;
    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    if (bitfinex.has.fetchOHLCV) {
      // for (symbol in bitfinex.markets) {
        await sleep(bitfinex.rateLimit) // milliseconds
        // console.log(await bitfinex.fetchOHLCV('BTC/USDT', '1h', 1456843334)) // one hour 1456843334000
      series = await bitfinex.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
      // console.log({series})
      // }
    }

    await res.render('graph', {series});
  })()

  
});

module.exports = router;