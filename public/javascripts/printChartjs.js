function printChart(series, refreshInterval) {

  seriesTime = series.map((elem) => {
    let ts = new Date(elem[0]);
    return ts.toLocaleString()
  })

  let y1 = series.map((elem) => {
    return elem[1]; //1 - Open, 2 - High, 3 - Low, 4 - Close, 5 - Volume
  })

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    animating: true,

    // The data for our dataset
    data: {
      labels: seriesTime,
      datasets: [{
        label: "My First dataset",
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

  return chart

}



function newSeries() {
  return axios.get('/seriesQuery')
    .then((newSeries) => {
      
      return new Promise((res,rej)=>{
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

  chart.data.labels = newSeriesTime;
  chart.config.data.labels = newSeriesTime;
  chart.data.datasets.data = newY1;
  chart.config.data.datasets[0].data = newY1;
  
  chart.update()
}


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



// printChart(series);

