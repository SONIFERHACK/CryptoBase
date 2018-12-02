
window.onload = function () {

  function reassignButtons() {
    document.querySelector('#tabVol24h').onclick = volSort;
    document.querySelector('#tabMarketCap').onclick = mCapSort;
    document.querySelector('#tabPrc1h').onclick = Prc1hSort;
    document.querySelector('#tabPrc24h').onclick = Prc24hSort;
    document.querySelector('#tabPrc7d').onclick = Prc7dSort;
    document.querySelector('#tabPrice').onclick = priceSort;
  }

  // Ordering by 24 hour Volume
  function volSort() {

    if (document.querySelector('#tabVol24h').getAttribute('class') !== 'reverse-order') {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
    <th id="tabSymbol">SYMBOL</th>
    <th id="tabName">NAME</th>
    <th id="tabPrice">PRICE</th>
    <th id="tabVol24h" class="reverse-order">VOLUME 24H</th>
    <th id="tabPrc1h">PERCENT 1H</th>
    <th id="tabPrc24h">PERCENT 24H</th>
    <th id="tabPrc7d">PERCENT 7D</th>
    <th id="tabMarketCap">MARKET CAP</th>
  </tr>`

      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.volume_24h > b.quotes.USD.volume_24h) { return 1 };
        if (a.quotes.USD.volume_24h < b.quotes.USD.volume_24h) { return -1 };
        if (a.quotes.USD.volume_24h = b.quotes.USD.volume_24h) { return 0 };
      })
    } else {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
    <th id="tabSymbol">SYMBOL</th>
    <th id="tabName">NAME</th>
    <th id="tabPrice">PRICE</th>
    <th id="tabVol24h">VOLUME 24H</th>
    <th id="tabPrc1h">PERCENT 1H</th>
    <th id="tabPrc24h">PERCENT 24H</th>
    <th id="tabPrc7d">PERCENT 7D</th>
    <th id="tabMarketCap">MARKET CAP</th>
  </tr>`
      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.volume_24h > b.quotes.USD.volume_24h) { return -1 };
        if (a.quotes.USD.volume_24h < b.quotes.USD.volume_24h) { return 1 };
        if (a.quotes.USD.volume_24h = b.quotes.USD.volume_24h) { return 0 };
      })
    }


    tickers2.forEach((currency) => {

      function color(num) {
        return num < 0 ? 'red icon-arrow-red' : 'green icon-arrow-green';
      }

      document.querySelector('#tickersTable').innerHTML +=
        `<tr class="trTD">
    <td> ${currency.symbol}</td>
    <td> ${currency.name}</td>
    <td> ${currency.quotes.USD.price.toFixed(2)}</td>
    <td> ${Math.floor(currency.quotes.USD.volume_24h)}</td>
    <td class="${color(currency.quotes.USD.percent_change_1h)}"> ${currency.quotes.USD.percent_change_1h}</td>
    <td class="${color(currency.quotes.USD.percent_change_24h)}"> ${currency.quotes.USD.percent_change_24h}</td>
    <td class="${color(currency.quotes.USD.percent_change_7d)}"> ${currency.quotes.USD.percent_change_7d}</td>
    <td> ${currency.quotes.USD.market_cap}</td>
    </tr>`
    })

    reassignButtons();

  };

  document.querySelector('#tabVol24h').onclick = volSort;


  // Ordering by 24 hour Market Cap

  function mCapSort() {

    if (document.querySelector('#tabMarketCap').getAttribute('class') !== 'reverse-order') {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
    <th id="tabSymbol">SYMBOL</th>
    <th id="tabName">NAME</th>
    <th id="tabPrice">PRICE</th>
    <th id="tabVol24h">VOLUME 24H</th>
    <th id="tabPrc1h">PERCENT 1H</th>
    <th id="tabPrc24h">PERCENT 24H</th>
    <th id="tabPrc7d">PERCENT 7D</th>
    <th id="tabMarketCap" class="reverse-order">MARKET CAP</th>
  </tr>`

      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) { return 1 };
        if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) { return -1 };
        if (a.quotes.USD.market_cap = b.quotes.USD.market_cap) { return 0 };
      })
    } else {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
    <th id="tabSymbol">SYMBOL</th>
    <th id="tabName">NAME</th>
    <th id="tabPrice">PRICE</th>
    <th id="tabVol24h">VOLUME 24H</th>
    <th id="tabPrc1h">PERCENT 1H</th>
    <th id="tabPrc24h">PERCENT 24H</th>
    <th id="tabPrc7d">PERCENT 7D</th>
    <th id="tabMarketCap">MARKET CAP</th>
  </tr>`
      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) { return -1 };
        if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) { return 1 };
        if (a.quotes.USD.market_cap = b.quotes.USD.market_cap) { return 0 };
      })
    }


    tickers2.forEach((currency) => {

      function color(num) {
        return num < 0 ? 'red icon-arrow-red' : 'green icon-arrow-green';
      }

      document.querySelector('#tickersTable').innerHTML +=
        `<tr class="trTD">
    <td> ${currency.symbol}</td>
    <td> ${currency.name}</td>
    <td> ${currency.quotes.USD.price.toFixed(2)}</td>
    <td> ${Math.floor(currency.quotes.USD.volume_24h)}</td>
    <td class="${color(currency.quotes.USD.percent_change_1h)}"> ${currency.quotes.USD.percent_change_1h}</td>
    <td class="${color(currency.quotes.USD.percent_change_24h)}"> ${currency.quotes.USD.percent_change_24h}</td>
    <td class="${color(currency.quotes.USD.percent_change_7d)}"> ${currency.quotes.USD.percent_change_7d}</td>
    <td> ${currency.quotes.USD.market_cap}</td>
    </tr>`
    })

    reassignButtons();

  };

  document.querySelector('#tabMarketCap').onclick = mCapSort;



  // Ordering by 1 hour change percentage

  function Prc1hSort() {

    if (document.querySelector('#tabPrc1h').getAttribute('class') !== 'reverse-order') {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
  <th id="tabSymbol">SYMBOL</th>
  <th id="tabName">NAME</th>
  <th id="tabPrice">PRICE</th>
  <th id="tabVol24h">VOLUME 24H</th>
  <th id="tabPrc1h" class="reverse-order">PERCENT 1H</th>
  <th id="tabPrc24h">PERCENT 24H</th>
  <th id="tabPrc7d">PERCENT 7D</th>
  <th id="tabMarketCap">MARKET CAP</th>
</tr>`

      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.percent_change_1h > b.quotes.USD.percent_change_1h) { return 1 };
        if (a.quotes.USD.percent_change_1h < b.quotes.USD.percent_change_1h) { return -1 };
        if (a.quotes.USD.percent_change_1h = b.quotes.USD.percent_change_1h) { return 0 };
      })
    } else {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
  <th id="tabSymbol">SYMBOL</th>
  <th id="tabName">NAME</th>
  <th id="tabPrice">PRICE</th>
  <th id="tabVol24h">VOLUME 24H</th>
  <th id="tabPrc1h">PERCENT 1H</th>
  <th id="tabPrc24h">PERCENT 24H</th>
  <th id="tabPrc7d">PERCENT 7D</th>
  <th id="tabMarketCap">MARKET CAP</th>
</tr>`
      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.percent_change_1h > b.quotes.USD.percent_change_1h) { return -1 };
        if (a.quotes.USD.percent_change_1h < b.quotes.USD.percent_change_1h) { return 1 };
        if (a.quotes.USD.percent_change_1h = b.quotes.USD.percent_change_1h) { return 0 };
      })
    }


    tickers2.forEach((currency) => {

      function color(num) {
        return num < 0 ? 'red icon-arrow-red' : 'green icon-arrow-green';
      }

      document.querySelector('#tickersTable').innerHTML +=
        `<tr class="trTD">
  <td> ${currency.symbol}</td>
  <td> ${currency.name}</td>
  <td> ${currency.quotes.USD.price.toFixed(2)}</td>
  <td> ${Math.floor(currency.quotes.USD.volume_24h)}</td>
  <td class="${color(currency.quotes.USD.percent_change_1h)}"> ${currency.quotes.USD.percent_change_1h}</td>
  <td class="${color(currency.quotes.USD.percent_change_24h)}"> ${currency.quotes.USD.percent_change_24h}</td>
  <td class="${color(currency.quotes.USD.percent_change_7d)}"> ${currency.quotes.USD.percent_change_7d}</td>
  <td> ${currency.quotes.USD.market_cap}</td>
  </tr>`
    })

    reassignButtons();

  };

  document.querySelector('#tabPrc1h').onclick = Prc1hSort;


  // Ordering by 24 hour change percentage

  function Prc24hSort() {

    if (document.querySelector('#tabPrc24h').getAttribute('class') !== 'reverse-order') {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
  <th id="tabSymbol">SYMBOL</th>
  <th id="tabName">NAME</th>
  <th id="tabPrice">PRICE</th>
  <th id="tabVol24h">VOLUME 24H</th>
  <th id="tabPrc1h">PERCENT 1H</th>
  <th id="tabPrc24h" class="reverse-order">PERCENT 24H</th>
  <th id="tabPrc7d">PERCENT 7D</th>
  <th id="tabMarketCap">MARKET CAP</th>
</tr>`

      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.percent_change_24h > b.quotes.USD.percent_change_24h) { return 1 };
        if (a.quotes.USD.percent_change_24h < b.quotes.USD.percent_change_24h) { return -1 };
        if (a.quotes.USD.percent_change_24h = b.quotes.USD.percent_change_24h) { return 0 };
      })
    } else {

      document.querySelector('#tickersTable').innerHTML =
        `<tr>
  <th id="tabSymbol">SYMBOL</th>
  <th id="tabName">NAME</th>
  <th id="tabPrice">PRICE</th>
  <th id="tabVol24h">VOLUME 24H</th>
  <th id="tabPrc1h">PERCENT 1H</th>
  <th id="tabPrc24h">PERCENT 24H</th>
  <th id="tabPrc7d">PERCENT 7D</th>
  <th id="tabMarketCap">MARKET CAP</th>
</tr>`
      var tickers2 = tickers.sort((a, b) => {
        if (a.quotes.USD.percent_change_24h > b.quotes.USD.percent_change_24h) { return -1 };
        if (a.quotes.USD.percent_change_24h < b.quotes.USD.percent_change_24h) { return 1 };
        if (a.quotes.USD.percent_change_24h = b.quotes.USD.percent_change_24h) { return 0 };
      })
    }


    tickers2.forEach((currency) => {

      function color(num) {
        return num < 0 ? 'red icon-arrow-red' : 'green icon-arrow-green';
      }

      document.querySelector('#tickersTable').innerHTML +=
        `<tr class="trTD">
  <td> ${currency.symbol}</td>
  <td> ${currency.name}</td>
  <td> ${currency.quotes.USD.price.toFixed(2)}</td>
  <td> ${Math.floor(currency.quotes.USD.volume_24h)}</td>
  <td class="${color(currency.quotes.USD.percent_change_1h)}"> ${currency.quotes.USD.percent_change_1h}</td>
  <td class="${color(currency.quotes.USD.percent_change_24h)}"> ${currency.quotes.USD.percent_change_24h}</td>
  <td class="${color(currency.quotes.USD.percent_change_7d)}"> ${currency.quotes.USD.percent_change_7d}</td>
  <td> ${currency.quotes.USD.market_cap}</td>
  </tr>`
    })

    reassignButtons();

  };

  document.querySelector('#tabPrc24h').onclick = Prc24hSort;


// Ordering by 24 hour change percentage

function Prc7dSort() {

  if (document.querySelector('#tabPrc7d').getAttribute('class') !== 'reverse-order') {

    document.querySelector('#tickersTable').innerHTML =
      `<tr>
<th id="tabSymbol">SYMBOL</th>
<th id="tabName">NAME</th>
<th id="tabPrice">PRICE</th>
<th id="tabVol24h">VOLUME 24H</th>
<th id="tabPrc1h">PERCENT 1H</th>
<th id="tabPrc24h">PERCENT 24H</th>
<th id="tabPrc7d" class="reverse-order">PERCENT 7D</th>
<th id="tabMarketCap">MARKET CAP</th>
</tr>`

    var tickers2 = tickers.sort((a, b) => {
      if (a.quotes.USD.percent_change_7d > b.quotes.USD.percent_change_7d) { return 1 };
      if (a.quotes.USD.percent_change_7d < b.quotes.USD.percent_change_7d) { return -1 };
      if (a.quotes.USD.percent_change_7d = b.quotes.USD.percent_change_7d) { return 0 };
    })
  } else {

    document.querySelector('#tickersTable').innerHTML =
      `<tr>
<th id="tabSymbol">SYMBOL</th>
<th id="tabName">NAME</th>
<th id="tabPrice">PRICE</th>
<th id="tabVol24h">VOLUME 24H</th>
<th id="tabPrc1h">PERCENT 1H</th>
<th id="tabPrc24h">PERCENT 24H</th>
<th id="tabPrc7d">PERCENT 7D</th>
<th id="tabMarketCap">MARKET CAP</th>
</tr>`
    var tickers2 = tickers.sort((a, b) => {
      if (a.quotes.USD.percent_change_7d > b.quotes.USD.percent_change_7d) { return -1 };
      if (a.quotes.USD.percent_change_7d < b.quotes.USD.percent_change_7d) { return 1 };
      if (a.quotes.USD.percent_change_7d = b.quotes.USD.percent_change_7d) { return 0 };
    })
  }


  tickers2.forEach((currency) => {

    function color(num) {
      return num < 0 ? 'red icon-arrow-red' : 'green icon-arrow-green';
    }

    document.querySelector('#tickersTable').innerHTML +=
      `<tr class="trTD">
<td> ${currency.symbol}</td>
<td> ${currency.name}</td>
<td> ${currency.quotes.USD.price.toFixed(2)}</td>
<td> ${Math.floor(currency.quotes.USD.volume_24h)}</td>
<td class="${color(currency.quotes.USD.percent_change_1h)}"> ${currency.quotes.USD.percent_change_1h}</td>
<td class="${color(currency.quotes.USD.percent_change_24h)}"> ${currency.quotes.USD.percent_change_24h}</td>
<td class="${color(currency.quotes.USD.percent_change_7d)}"> ${currency.quotes.USD.percent_change_7d}</td>
<td> ${currency.quotes.USD.market_cap}</td>
</tr>`
  })

  reassignButtons();

};

document.querySelector('#tabPrc7d').onclick = Prc7dSort;


// Ordering by 24 hour change percentage

function priceSort() {

  if (document.querySelector('#tabPrice').getAttribute('class') !== 'reverse-order') {

    document.querySelector('#tickersTable').innerHTML =
      `<tr>
<th id="tabSymbol">SYMBOL</th>
<th id="tabName">NAME</th>
<th id="tabPrice" class="reverse-order">PRICE</th>
<th id="tabVol24h">VOLUME 24H</th>
<th id="tabPrc1h">PERCENT 1H</th>
<th id="tabPrc24h">PERCENT 24H</th>
<th id="tabPrc7d">PERCENT 7D</th>
<th id="tabMarketCap">MARKET CAP</th>
</tr>`

    var tickers2 = tickers.sort((a, b) => {
      if (a.quotes.USD.price > b.quotes.USD.price) { return 1 };
      if (a.quotes.USD.price < b.quotes.USD.price) { return -1 };
      if (a.quotes.USD.price = b.quotes.USD.price) { return 0 };
    })
  } else {

    document.querySelector('#tickersTable').innerHTML =
      `<tr>
<th id="tabSymbol">SYMBOL</th>
<th id="tabName">NAME</th>
<th id="tabPrice">PRICE</th>
<th id="tabVol24h">VOLUME 24H</th>
<th id="tabPrc1h">PERCENT 1H</th>
<th id="tabPrc24h">PERCENT 24H</th>
<th id="tabPrc7d">PERCENT 7D</th>
<th id="tabMarketCap">MARKET CAP</th>
</tr>`
    var tickers2 = tickers.sort((a, b) => {
      if (a.quotes.USD.price > b.quotes.USD.price) { return -1 };
      if (a.quotes.USD.price < b.quotes.USD.price) { return 1 };
      if (a.quotes.USD.price = b.quotes.USD.price) { return 0 };
    })
  }


  tickers2.forEach((currency) => {

    function color(num) {
      return num < 0 ? 'red icon-arrow-red' : 'green icon-arrow-green';
    }

    document.querySelector('#tickersTable').innerHTML +=
      `<tr class="trTD">
<td> ${currency.symbol}</td>
<td> ${currency.name}</td>
<td> ${currency.quotes.USD.price.toFixed(2)}</td>
<td> ${Math.floor(currency.quotes.USD.volume_24h)}</td>
<td class="${color(currency.quotes.USD.percent_change_1h)}"> ${currency.quotes.USD.percent_change_1h}</td>
<td class="${color(currency.quotes.USD.percent_change_24h)}"> ${currency.quotes.USD.percent_change_24h}</td>
<td class="${color(currency.quotes.USD.percent_change_7d)}"> ${currency.quotes.USD.percent_change_7d}</td>
<td> ${currency.quotes.USD.market_cap}</td>
</tr>`
  })

  reassignButtons();

};

document.querySelector('#tabPrice').onclick = priceSort;

}

