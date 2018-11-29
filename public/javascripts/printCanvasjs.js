window.onload = function () {

  var dataPoints = [];

  dataPoints = series.map((elem) => {
    let ts = new Date(elem[0]);

    //0 - timestamp, 1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
    return { x: ts, y: [elem[1], elem[2], elem[3], elem[4]] };
  });

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title: {
      text: "BTC/USDT on Bitfinex"
    },
    axisX: {
      valueFormatString: "DD HH:mm"
    },
    axisY: {
      includeZero: false,
      prefix: "$",
      title: "Price (in USD)"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toogleDataSeries
    },
    data: [{
      type: "candlestick",
      showInLegend: true,
      name: "BTC",
      yValueFormatString: "$###0.00",
      xValueFormatString: "MM DD HH:mm",
      dataPoints: dataPoints
    },
    ]
  });

  chart.render();

  let refreshIntID = setInterval(function () {
  console.log('entra tb');
  axios.get('/seriesQuery')
    .then((newSeries) => {

      newDataPoints = newSeries.map((elem) => {
        let ts = new Date(elem[0]);

        //0 - timestamp, 1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
        return { x: ts, y: [elem[1], elem[2], elem[3], elem[4]] };
      });

      chart.data.datapoints = newDataPoints;
      chart.render();
    })
    .catch((err) => {
      return err
    })

}, 30000);

setTimeout(function () {
  clearInterval(refreshIntID)
}, 60000);

  function toogleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

}