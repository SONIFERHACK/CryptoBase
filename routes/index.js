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
      // tickers = await (bitfinex.fetchTickers());
      bitfinex.fetchTickers().then((tickers) => {
        // let roundedTickers = tickers.map((ticker) => {
        //   return {...ticker, baseVolume: Math.round(ticker.baseVolume)}
        // })

        for (ticker in tickers) {
          tickers[ticker].baseVolume = Math.round(tickers[ticker].baseVolume)
          tickers[ticker].last = parseFloat(tickers[ticker].last).toFixed(2);
          // tickers[ticker].change = (((tickers[ticker].average - tickers[ticker].last) / tickers[ticker].last) *100).toFixed(2)

          
        }
        res.render('index', {
          tickers
        });
      })
    }
    //TODO: consider adding an else
  })()


});

module.exports = router;