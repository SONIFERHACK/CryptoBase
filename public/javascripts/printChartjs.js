
function printChart(series, refreshInterval) {

  seriesTime = series.map((elem) => {
    let ts = new Date(elem[0]);
    return ts.toLocaleString()
  })

  let y1 = series.map((elem) => {
    return elem[1]; //1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
  })

  var ctx = document.getElementById('myChart').getContext('2d');
  var chartjs = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    animating: true,
    
    // The data for our dataset
    data: {
      labels: seriesTime,
      datasets: [{
        label: "Opening Price",
        fill: false,
        pointRadius: 0,
        lineTension: 0,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: y1,
      }]
    },

    // Configuration options go here
    options: {}
  });

  return chartjs

}



function newSeries() {
  return axios.get('/seriesQuery')
    .then((newSeries) => {

      return new Promise((res, rej) => {
        res(newSeries);
      })
    })
    .catch((err) => { return err })
}


function updateChart(chart, newSeries) {
  let newSeriesTime = newSeries.data.map((elem) => {
    let ts = new Date(elem[0]);
    return ts.toLocaleString()
  })

  let newY1 = newSeries.data.map((elem) => {
    return elem[1]; //1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
  })

  // chart.data.datasets.data = newY1;
  // chart.data.labels = newSeriesTime;

  chart.config.data.datasets[0].data = newY1;
  chart.config.data.labels = newSeriesTime;

  chart.update()
}


// window.onload = function () {

//   chartOne = printChart(series);
  
//   setTimeout(function(){
//   newSeries()
//   .then((newSeries)=>{
//     updateChart(chartOne, newSeries);
//   })
//   },2000)
  
//   printCanvasjs(series)
  
//     document.querySelector('#chartjsUpdate').onclick = click;
    
//     function click() {
  
//       console.log('entra');
  
//       let timeUnitCjs = document.querySelector('#timeUnitCjs').value;
//       let marketCjs = document.querySelector('#marketCjs').value;
//       let exchangeNameCjs = document.querySelector('#exchangeNameCjs').value;
//       let sinceDateCjs = document.querySelector('#sinceDateCjs').value;
  
//       axios.post('/seriesQuery', { timeUnitCjs, marketCjs, exchangeNameCjs, sinceDateCjs })
//         .then((newSeries) => {
//           console.log(newSeries);
//           updateChart(chartOne, newSeries);
//         })
//     }
  
//   }




  // let refreshIntID = setInterval(function () {

  //   axios.get('/seriesQuery')
  //     .then((newSeries) => {

  //       console.log(newSeries);

  //       let newSeriesTime = newSeries.data.map((elem) => {
  //         let ts = new Date(elem[0]);
  //         return ts.toLocaleString()
  //       })

  //       let newY1 = newSeries.data.map((elem) => {
  //         return elem[1]; //1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
  //       })

  //       chart.data.labels = newSeriesTime;
  //       chart.data.datasets.data = newY1;

  //       chart.update();

  //     })
  //     .catch((err) => {
  //       return err
  //     })

  // }, 30000);

  // setTimeout(function () {
  //   clearInterval(refreshIntID)
  // }, 60000);

// axios.post('...', {kauehlfda})

// printChart(series);

