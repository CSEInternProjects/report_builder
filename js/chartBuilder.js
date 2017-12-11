var obj;

var numberWithCommas = function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};



function drawCharts()
{
  data=globaldt
  document.getElementById('charter').style.display='block';
  document.getElementById('tabler').style.display='none'
obj =data;
DisplayAllCharts();

}



function DisplayAllCharts(){
  var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);
      console.log($pageloader);

       $pageloader[0].classList.toggle('is-active');
       var pageloaderTimeout = setTimeout( function() {
                $pageloader[0].classList.toggle('is-active');
                  //window.location.href="display.html";
                //  cleaningDataToFitInTableByaddingHTML(data);
                clearTimeout( pageloaderTimeout );

              }, 1000 );
DisplayFirstChart();
DisplaySecondChart();
DisplayThirdChart();
DisplayForthChart();
DisplayFifthChart();
DisplaySixthChart();
Display_Seventh_Chart();
DisplayEighthChart();

DisplayTenthChart();
DisplayEleventhChart();
DisplayTwelfthChart();
DisplayThirteenthChart();
Display_Fourteenth_Chart();
DisplayFifteenthChart();
DisplaySixteenthChart();
DisplaySeventeenthChart();
DisplayNinthChart();



}





function dataset_json(lbl,d,color) {
  console.log(color)
  var indexOfcolor=colors.indexOf(color)
var a={
label: lbl,
data: d,
backgroundColor: color,
hoverBackgroundColor: borderColors[indexOfcolor],
hoverBorderWidth: 2,
hoverBorderColor: color

}
return a;
}





function options_json(chartname) {
var options = {
title: {
  display: true,
  text: chartname
},
animation: {


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
    stacked: true,
    gridLines: {
      display: false
    },
  }],
  yAxes: [{
    stacked: true,
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

return options;

}




function canvasToImage() {
var can = document.getElementById('body');
console.log(can);
var img = new Image();
img.src = can.toDataURL("image/jpeg");
document.body.appendChild(src);

}
