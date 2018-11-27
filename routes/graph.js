const express = require('express');
const router = express.Router();

const ccxt = require('ccxt');


/* GET home page */
router.get('/graph', (req, res, next) => {


  (async () => {
    let bitfinex = new ccxt.bitfinex()
    let series = [];
    let markets = await bitfinex.load_markets()

    let inputSymbol = 'BTC/USDT', timeUnit = '5m', sinceTs = 1543017600000;

    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    if (bitfinex.has.fetchOHLCV) {
      await sleep(bitfinex.rateLimit) // milliseconds
      series = await bitfinex.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
    }

    await res.render('graph', { series });
  })()


});


router.get('/seriesQuery', (req,res) => {

  (async () => {
    let bitfinex = new ccxt.bitfinex()
    let series = [];
    let markets = await bitfinex.load_markets()

    let inputSymbol = 'BTC/USDT', timeUnit = '1m', sinceTs = 1543333818000;

    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    if (bitfinex.has.fetchOHLCV) {
      await sleep(bitfinex.rateLimit) // milliseconds
      series = await bitfinex.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
    }
    // console.log('sending json of: ' + series)
    await res.json( series );
  })()

})




module.exports = router;