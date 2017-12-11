function DisplaySixthChart() {
var SixthChartData={};
  var status;
  for (i = 0; i < obj.length; i++) {
  status=obj[i].Status;
    if(obj[i].Tags.indexOf("kony_internal") !== -1)
    {
      if(SixthChartData[status]==undefined){
          SixthChartData[status]=[1,0,0];
        }
      else {
        SixthChartData[status][0]++;
      }
    }
    else if(obj[i].Tags.indexOf("product") !== -1)
    {
      if(SixthChartData[status]==undefined)
        {
            SixthChartData[status]=[0,1,0];
        }
      else {
      SixthChartData[status][1]++;
    }
    }
    else if(obj[i].Tags.indexOf("channelpartner") !== -1)
    {
      if(SixthChartData[status]==undefined)
        {
            SixthChartData[status]=[0,0,1];
        }
      else {
      SixthChartData[status][2]++;
    }
    }

  }

  var m=Object.keys(SixthChartData);

  var data = {
    labels:["kony Internsl","Product","channelpartner"],
    datasets: []
  };

  var flage=false;
colorFormation(m);

  for(var l=0;l<m.length;l++)
  {
    if(SixthChartData[m[l]].length!==0)
    {
      flage=true;
    }
    data.datasets.push(dataset_json(m[l],SixthChartData[m[l]],color1[l]));
  }

   drawstackedbarchart('bar','ticketVolumeVsSource', data, options_json('Ticket Volume vs Status vs Source'),flage,false);

}
