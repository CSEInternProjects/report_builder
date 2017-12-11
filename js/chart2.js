function DisplaySecondChart() {
  var mncount = 0;
  var mnjson = {};
  var severityjson = {};

  var d, mn, sev;
  for (i = 0; i < obj.length; i++) {
    d = (new Date(obj[i].Created_at)).getMonth();

    mn = month_names[d] + " " + (new Date(obj[i].Created_at)).getFullYear();
    sev = obj[i].Severity_;
    if (mnjson[mn] == undefined) {
      mnjson[mn] = mncount++;
    }
    if (severityjson[sev] == undefined) {
      severityjson[sev] = [];
      severityjson[sev][mnjson[mn]] = 1;
    } else {
      if (isNaN(severityjson[sev][mnjson[mn]])) {
        severityjson[sev][mnjson[mn]] = 1;
      } else {
        severityjson[sev][mnjson[mn]]++;
      }

    }
  }


  var k = Object.keys(severityjson);


  for (var i = 0; i < k.length; i++) {
    for (var j = 0; j < severityjson[k[i]].length; j++) {
      if (isNaN(severityjson[k[i]][j])) {
        severityjson[k[i]][j] = 0;
      }
    }
  }

  var data = {
    labels: Object.keys(mnjson),
    datasets: []
  };

  colorFormation(k);
  for (var l = 0; l < k.length; l++) {
    data.datasets.push(dataset_json(k[l], severityjson[k[l]], color1[l]));

  }

  var flage = true;
  if (Object.keys(mnjson).length == 0) {
    flage = false;
  }
  drawstackedbarchart('bar', 'volume_vs_sev_vs_mon', data, options_json('Ticket Volume vs Severity vs month'), flage, false);
}
