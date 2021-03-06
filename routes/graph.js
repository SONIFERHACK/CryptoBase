const express = require('express');
const router = express.Router();
const { ensureLoggedIn } = require("connect-ensure-login");

const ccxt = require('ccxt');



router.get('/graph', ensureLoggedIn({redirectTo:'/auth/login'}),(req, res, next) => {


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

router.get('/graph2', ensureLoggedIn({redirectTo:'/auth/login'}),(req, res, next) => {


  (async () => {
    let bitfinex = new ccxt.bitfinex()
    let series = [];
    let markets = await bitfinex.load_markets()

    let inputSymbol = 'BTC/USDT', timeUnit = '5m', sinceTs = 1543017600000;

    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    if (bitfinex.has.fetchOHLCV) {
      let timeUnitCnvjs = timeUnit, marketCnvjs=inputSymbol, exchangeNameCnvjs='bitfinex';
      await sleep(bitfinex.rateLimit) // milliseconds
      series = await bitfinex.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
      series = [series, {timeUnitCnvjs, marketCnvjs, exchangeNameCnvjs }]; //here I sent the default body parameters for time unit market and exchange
    }

    await res.render('graph2', { series });
  })()


});


router.get('/seriesQuery',ensureLoggedIn({redirectTo:'/auth/login'}), (req,res) => {

  (async () => {
    let bitfinex = new ccxt.bitfinex()
    let series = [];
    let markets = await bitfinex.load_markets()

    let inputSymbol = 'EOS/USDT', timeUnit = '30m', sinceTs = 1543017600000;

    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    if (bitfinex.has.fetchOHLCV) {
      await sleep(bitfinex.rateLimit) // milliseconds
      series = await bitfinex.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
    }
    
    await res.json( series );
  })()

})


router.post('/seriesQuery', (req,res) => {

  console.log(req.body);
  let exchangeName = req.body.exchangeNameCjs;
  console.log(req.body.sinceDateCjs);
  let date = new Date(req.body.sinceDateCjs)
  console.log(date);
  let sinceToUse = date.getTime()
  console.log(sinceToUse);

  (async () => {
    let exchange = new ccxt[exchangeName]()
    let series = [];
    let markets = await exchange.load_markets()

    let inputSymbol = req.body.marketCjs, timeUnit = req.body.timeUnitCjs, sinceTs = sinceToUse;

    console.log("exchangeName: " + exchangeName + "\n date:" + date + "\n sinceToUse:" + sinceToUse + "\n inputSymbol:" + inputSymbol + "\n timeUnit: " + timeUnit);

    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    if (exchange.has.fetchOHLCV) {
      await sleep(exchange.rateLimit) // milliseconds
      series = await exchange.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
      console.log(await series);
    }
    
    
    await res.json( series );
  })()

})



router.post('/seriesQuery2', (req,res) => {

  console.log(req.body);
  let exchangeName = req.body.exchangeNameCnvjs;
  console.log(req.body.sinceDateCnvjs);
  let date = new Date(req.body.sinceDateCnvjs)
  console.log(date);
  let sinceToUse = date.getTime()
  console.log(sinceToUse);

  (async () => {
    let exchange = new ccxt[exchangeName]()
    let series = [];
    let markets = await exchange.load_markets()

    let inputSymbol = req.body.marketCnvjs, timeUnit = req.body.timeUnitCnvjs, sinceTs = sinceToUse;

    console.log("exchangeName: " + exchangeName + "\n date:" + date + "\n sinceToUse:" + sinceToUse + "\n inputSymbol:" + inputSymbol + "\n timeUnit: " + timeUnit);

    let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    if (exchange.has.fetchOHLCV) {
      await sleep(exchange.rateLimit) // milliseconds
      series = await exchange.fetchOHLCV(inputSymbol, timeUnit, sinceTs);
      series = [series, req.body]
      console.log(await series);
    }
    
    
    await res.json( series );
  })()

})

router.get('/d3',(req,res)=>{
  res.render('zoomableCP');
})


module.exports = router;