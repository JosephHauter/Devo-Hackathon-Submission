fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((us) => {
  const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
  const states = ChartGeo.topojson.feature(us, us.objects.states).features;

  const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
    type: 'choropleth',
    data: {
      labels: states.map((d) => d.properties.name),
      datasets: [{
        label: 'States',
        outline: nation,
        data: states.map((d) => ({feature: d, value: Math.random() * 10})),
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        xy: {
          projection: 'albersUsa'
        },
        color: {
          quantize: 5,
          legend: {
            position: 'bottom-right',
            align: 'bottom'
          },
        }
      },
    }
  });
});
console.log("hello");
