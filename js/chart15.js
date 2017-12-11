function DisplayFifteenthChart() {
var offered =[];
var good =[];
var bad =[];
var notOffered =[];
for(i = 0; i<3; i ++)
{
offered[i] = 0;
good[i] = 0;
bad[i] = 0;
notOffered[i]= 0;

}
var xnames=["Responded","Good","Bad"];

for(i = 0; i<obj.length; i++)
{
  tags=obj[i].Tags;

if(tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_!=="yes")
{
if(obj[i].Tags.indexOf("kony_internal") !== -1)
{
  if(obj[i].Satisfaction_Score == "Not Offered")
  {
    notOffered[0]++;
  }
  else if (obj[i].Satisfaction_Score == "Offered") {
    offered[0]++;
  }
  else if (obj[i].Satisfaction_Score == "Good") {
    good[0]++;
  }
  else if (obj[i].Satisfaction_Score == "Bad") {
    bad[0]++;
  }
}

else if(obj[i].Tags.indexOf("product") !== -1)
{
  if(obj[i].Satisfaction_Score == "Not Offered")
  {
    notOffered[1]++;
  }
  else if (obj[i].Satisfaction_Score == "Offered") {
    offered[1]++;
  }
  else if (obj[i].Satisfaction_Score == "Good") {
    good[1]++;
  }
  else if (obj[i].Satisfaction_Score == "Bad") {
    bad[1]++;
  }
}

else if(obj[i].Tags.indexOf("channelpartner") !== -1)
{
  if(obj[i].Satisfaction_Score == "Not Offered" || obj[i].Satisfaction_Score == "-" )
  {
    notOffered[2]++;
  }
  else if (obj[i].Satisfaction_Score == "Offered") {
    offered[2]++;
  }
  else if (obj[i].Satisfaction_Score == "Good") {
    good[2]++;
  }
  else if (obj[i].Satisfaction_Score == "Bad") {
    bad[2]++;
  }
}
}}
var totaldata = [];
for(i = 0; i<3; i++)
{
totaldata[i]=[];

}
console.log(good);
console.log(bad);
console.log(offered);

var flage=false;

for(i = 0; i<3; i++)
{
totaldata[0][i] = (((good[i]+bad[i])/(good[i]+bad[i]+offered[i]))*100).toFixed(2);
totaldata[1][i] = ((good[i]/(good[i]+bad[i]))*100).toFixed(2);
totaldata[2][i] = ((bad[i]/(good[i]+bad[i]))*100).toFixed(2);

  if(totaldata[1][i]!==0||totaldata[2][i]!==0)
  {
  flage=true;
  }

}

var data = {
labels:["kony_internal","product","channelpartner"],
datasets: []
};
colorFormation(xnames);
for(var l=0;l<3;l++)
{
data.datasets.push(dataset_json(xnames[l],totaldata[l],color1[l]));
}


var options = {
title: {
  display: true,
  text: "C-Sat vs Source"
},
animation: {
  duration: 10,
},
tooltips: {
  mode: 'label',
  callbacks: {
    label: function(tooltipItem, data) {
      return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
    }
  }
},
scales: {
  xAxes: [{
    grouped:true,
    gridLines: {
      display: false
    },
  }],
  yAxes: [{

    ticks: {
      callback: function(value) {
        return numberWithCommas(value);
      },
    },
  }],
}, // scales
legend: {
  display: true
}
};
drawstackedbarchart('bar','csatVsSource', data, options,flage,true);





}
