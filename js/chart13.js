function DisplayThirteenthChart() {
var product_issue = 0;
var non_product_issue = 0;
var other = 0;

var rca;
for(i = 0; i<obj.length ; i++)
{
  tags=obj[i].Tags;

if(tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_!=="yes")
{

rca=obj[i]["CSE_-_Root_Cause_Category_"];
    if (rca=="Product Defect"||rca=="Documentation Defect"||rca=="Kony Infrastructure"||rca=="Regression"){
      product_issue++;
    }
    else if (rca=="Consultative"||rca=="Native Issue / Limitation"||rca=="Application Code Issue"||rca=="Application Design Issue"||rca=="Configuration"||rca=="Customer Infra Issue"||rca=="Documentation Not Referred"||rca=="Knowledge Gap") {
      non_product_issue++;
    }
    else if (rca=="I AM NOT SMART"||rca=="-"||rca=="Yet to be Identified"||rca=="Third-party Issue"||rca=="Invalid Issue"||rca=="Feature Request"){
      other++;
    }
}
}

var colorCodes = ["Product Issue", "Non Product Issue", "Other"];
colorFormation(colorCodes);

var c = [];
for(i=0;i<=2;i++)
{
  c.push(color1[i]);
}


var datapie = {

  labels: [
            "product issue",
            "non product issue",
            "other"
          ],


 datasets: [{
        data: [product_issue, non_product_issue, other],
     label:["product issue", "non product issue", "other"],
     backgroundColor: c,
     hoverBackgroundColor: c,
     hoverBorderWidth: 2,
     hoverBorderColor: c,
     borderColor:c

    }]


};
console.log(datapie);
var options = {
title: {
display: true,
text: 'Categorized RCA'
},
animation: {
duration: 10,
},
tooltips: {
mode: 'label',
callbacks: {
  label: function(tooltipItem, data) {
    return data.datasets[0].label[tooltipItem.index] + ": " + numberWithCommas(data.datasets[0].data[tooltipItem.index]);
  }
}
},

legend: {
display: true
}
};
var flage=true;

if(product_issue==0&&non_product_issue==0&&other==0)
{
  flage=false;
}



drawstackedbarchart('doughnut','categorized_RCA', datapie, options,flage,true);
}
