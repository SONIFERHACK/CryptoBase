
function printCanvasjs(series, body) {

  console.log(body);
  console.log(series);
  var dataPoints = [];

  dataPoints = series.map((elem) => {
    let ts = new Date(elem[0]);

    //0 - timestamp, 1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
    return { x: ts, y: [elem[1], elem[2], elem[3], elem[4]] };
  });

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title: {
      text: `${body.marketCnvjs} on ${body.exchangeNameCnvjs}`
    },
    axisX: {
      valueFormatString: "DD HH:mm"
    },
    axisY: {
      includeZero: false,
      prefix: "$",
      title: "Value (in USD)"
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
      name: `${body.marketCnvjs}`,
      yValueFormatString: "$###0.00",
      xValueFormatString: "MMM DD HH:mm",
      dataPoints: dataPoints
    },
    ]
  });

  chart.render();


  function toogleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

  return chart

}


// function updateCanvasjs(chart, newSeries) {

//   let dps = [];

//   dps = series.map((elem) => {
//     let ts = new Date(elem[0]);

//     //0 - timestamp, 1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
//     return { x: ts, y: [elem[1], elem[2], elem[3], elem[4]] };
//   });

//   chart.data[0].dataPoints = dps;

//   chart.render()
// }


function newSeriesCanvasjs() {
  return axios.get('/seriesQuery')
    .then((newSeries) => {

      return new Promise((res, rej) => {
        res(newSeries);
      })
    })
    .catch((err) => { return err })
}




//   let refreshIntID = setInterval(function () {
//   console.log('entra tb');
//   axios.get('/seriesQuery')
//     .then((newSeries) => {

//       newDataPoints = newSeries.map((elem) => {
//         let ts = new Date(elem[0]);

//         //0 - timestamp, 1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
//         return { x: ts, y: [elem[1], elem[2], elem[3], elem[4]] };
//       });

//       chart.data.datapoints = newDataPoints;
//       chart.render();
//     })
//     .catch((err) => {
//       return err
//     })

// }, 30000);

// setTimeout(function () {
//   clearInterval(refreshIntID)
// }, 60000);

