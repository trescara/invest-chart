window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light1",
    title: {
      text: "Galvanize Student Graduates by Year"
    },
    axisY: {
      gridThickness: 0,
      title: "Number of Graduates",
      titleFontColor: "black",
      labelFontColor: "black"
    },
    axisX: {
      gridThickness: 0,
      title: "Year",
      titleFontColor: "black",
      labelFontColor: "black"
    },
    data: [{
      type: "line",
      dataPoints: [
        { x: new Date(2014, 00, 0), y: 73},
        { x: new Date(2015, 00, 0), y: 199 },
        { x: new Date(2016, 00, 0), y: 395 }
      ]
    }]
  });
  chart.render();

}