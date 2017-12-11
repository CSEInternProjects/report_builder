function DisplayThirdChart(){


var ThirdChartData={};
var type1;
var status;
  for (i = 0; i < obj.length; i++) {
     type1=obj[i].Assignee;
   status=obj[i].Status;
    if(type1=="Kony Product Support"||type1=="Kony BDE Product Support")
    {
      if(ThirdChartData[status]==undefined){
          ThirdChartData[status]=[1,0];
        }
      else {
        ThirdChartData[status][0]++;
      }
    }
    else if(type1=="Kony L3 Product Support")
    {
      if(ThirdChartData[status]==undefined)
        {
            ThirdChartData[status]=[0,1];
        }
      else {
      ThirdChartData[status][1]++;
    }
    }
  }

  //type1
  var m=Object.keys(ThirdChartData);

  var data = {
    labels:["Product support","Product defect"],
    datasets: []
  };

  var flage=false;

colorFormation(m);

  for(var l=0;l<m.length;l++)
  {
    if(ThirdChartData[m[l]].length!==0)
    {
      flage=true;
    }
    data.datasets.push(dataset_json(m[l],ThirdChartData[m[l]],color1[l]));
  }

   drawstackedbarchart('bar','volume_vs_status_vs_type1', data, options_json('Ticket Volume vs staus vs type1'),flage,false);


}
