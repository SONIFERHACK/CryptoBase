const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const { ensureLoggedIn } = require("connect-ensure-login");
const axios = require("axios");


router.get("/market", (req, res, next) => {

  axios.get("https://api.coinmarketcap.com/v2/ticker/?limit=100&structure=array")
  .then((tickers2) => {
    console.log(tickers2);
    let tickers = tickers2.data.data;
    res.render("market", {tickers});
  })
  .catch((err)=>{return err})
});


module.exports = router;