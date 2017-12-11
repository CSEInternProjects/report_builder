function DisplayFifthChart() {
  var pccount = 0;
  var pcjson = {};
  var FifthChartData = [];
  var pc;
  for (i = 0; i < obj.length; i++) {

    pc = obj[i].Platform_Category_;

    if (pc == "-") {
      pc = "None";
    }


    if (pcjson[pc] == undefined) {
      pcjson[pc] = pccount++;
      FifthChartData[pcjson[pc]] = 1;
    } else {
      FifthChartData[pcjson[pc]]++;
    }
  }


  var data = {
    labels: Object.keys(pcjson),
    datasets: []
  }

  data.datasets.push(dataset_json('count', FifthChartData, colors[5]));
  var flage = false;
  if (FifthChartData.length !== 0) {
    flage = true;
  }
  drawstackedbarchart('bar', 'volume_vs_pc', data, options_json('Ticket Volume vs platform Category'), flage, false);
}
