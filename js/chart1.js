function DisplayFirstChart() {
  var FirstChartData = {};
  var d;
  for (i = 0; i < obj.length; i++) {
    console.log(new Date(obj[i].Created_at).getFullYear());
    d = (new Date(obj[i].Created_at)).getMonth() + " " + (new Date(obj[i].Created_at)).getFullYear();
    if (FirstChartData[d] !== undefined) {
      FirstChartData[d] = FirstChartData[d] + 1;
    } else {
      FirstChartData[d] = 1;
    }
  }

  var mvdata = Object.values(FirstChartData);
  var mvlbl = Object.keys(FirstChartData);
  for (var i = 0; i < mvlbl.length; i++) {
    mvlbl[i] = month_names[parseInt(mvlbl[i].substring(0, 2))] + " " + parseInt(mvlbl[i].substring(2, 7));
  }

  var data = {
    labels: "",
    datasets: []
  };

  data.labels = mvlbl;
  data.datasets.push(dataset_json('Ticket Volume', mvdata, colors[6]));
  var flage = true;
  if (mvlbl.length == 0) {
    flage = false;
  }

  drawstackedbarchart('line', 'volume_vs_month', data, options_json('Ticket Volume vs Month'), flage, false);
}
