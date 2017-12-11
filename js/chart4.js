function DisplayForthChart() {

  var status, tags;
  var FourthChartData = {};

  for (i = 0; i < obj.length; i++) {
    status = obj[i].Status;
    tags = obj[i].Tags;
    if (tags.indexOf("platform__feature_request") !== -1 || obj[i].Change_Request_ == "yes") {
      if (FourthChartData[status] == undefined) {
        FourthChartData[status] = [1, 0];
      } else {
        FourthChartData[status][0]++;
      }

    } else {
      if (FourthChartData[status] == undefined) {
        FourthChartData[status] = [0, 1];
      } else {
        FourthChartData[status][1]++;
      }
    }
  }

  //type2
  var n = Object.keys(FourthChartData);

  var data = {
    labels: ["FTR Ticket", "Regular Ticket"],
    datasets: []
  };

  var flage = false;
  colorFormation(n);
  for (var l = 0; l < n.length; l++) {
    if (FourthChartData[n[l]].length !== 0) {
      flage = true;
    }
    data.datasets.push(dataset_json(n[l], FourthChartData[n[l]], color1[l]));

  }

  drawstackedbarchart('bar', 'volume_vs_status_vs_type2', data, options_json('Ticket Volume vs staus vs type2'), flage, false);

}
