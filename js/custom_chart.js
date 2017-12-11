var inputtype1="";
var inputtype2="";
var charttype="";

var charttypeselected="";
var selected_y;
var x_selected;
var z_selected;
var selected=[];
var selected_z=[];
var dataSetArray=[];
var backgroundColorsArray=["rgba(55, 160, 225, 0.7)","rgb(0,255,0,0.7)","rgb(255,255,0,0.7)","rgb(128,128,128,0.7)"]


function X_Sub_Axes_Population(){

var options2 = document.getElementById("customcharter");
//obj=globaldt;
console.log(obj);


}
$(document).ready(function() {
  chart1 = document.getElementById('test1').innerHTML;
  chart2 = document.getElementById('test2').innerHTML;
  chart3 = document.getElementById('test3').innerHTML;
  chart4 = document.getElementById('test4').innerHTML;
  chart5 = document.getElementById('test5').innerHTML;
});

function showClassifiers(valueHere){
      //alert('you selected '+this.value);
      x_selected=valueHere;
//      selected = [];
    var classifiers_array=  x_parameter_selected(x_selected);
      var classifier_div=document.getElementById('classifiers_column');
      classifier_div.innerHTML="";
      console.log(classifiers_array);
      classifiers_array_global=classifiers_array;

    for(var k=0;k<classifiers_array.length;k++)
    {
      var labeladd=$('<input class="is-checkbox" id="'+classifiers_array[k]+'" type="checkbox" name="exampleCheckbox" value="'+classifiers_array[k]+'">      <label for="'+classifiers_array[k]+'">'+classifiers_array[k]+'</label>      <br>');
      $(labeladd).appendTo('#classifiers_column');
    }
}

function showClassifiersForZ_axis(valueHere){
      //alert('you selected '+this.value);
      z_selected=valueHere;
//      selected = [];
    var classifiers_array=  x_parameter_selected(z_selected);
      var classifier_div=document.getElementById('classifiers_column_z');
      classifier_div.innerHTML="";
      console.log(classifiers_array);
      classifiers_array_global_z=classifiers_array;

    for(var k=0;k<classifiers_array_global_z.length;k++)
    {
      var labeladd=$('<input class="is-checkbox" id="'+classifiers_array[k]+'_z" type="checkbox" name="exampleCheckbox_z" value="'+classifiers_array[k]+'">      <label for="'+classifiers_array[k]+'_z">'+classifiers_array[k]+'</label>      <br>');
      $(labeladd).appendTo('#classifiers_column_z');
    }
}

function setSelected_Y_Val(valHere)
{
  selected_y=valHere;
}
function checktheclassifiers(valueHere) {
  selected=[];

  selected_z=[];

  dataSetArray=[];

if(valueHere==="test3")
{
  $('#classifiers_column input:checked').each(function() {
      selected.push($(this).attr('value'));
  });
  $('#classifiers_column_z input:checked').each(function() {
      selected_z.push($(this).attr('value'));
  });
  fetch_data_stacked(x_selected,selected,z_selected,selected_z,selected_y);
}
else {
  $('#classifiers_column input:checked').each(function() {
      selected.push($(this).attr('value'));
  });
  console.log(x_selected+" ");
  console.log(selected);
  console.log(selected_y);
  fetch_data(x_selected,selected,selected_y);
}
}



function displayCustomizableCharts()
{
  X_Sub_Axes_Population();
    document.getElementById('customcharter').style.display='block';
}






   function drawStackedChart(chart_id,chart_type,arrayOflabels)
   {
   // var numberWithCommas = function(x) {
   //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   // };



   document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_nee" width="" height=""></canvas>';

   console.log(arrayOflabels);
   var canvas = document.getElementById(chart_id);


   for(var z=0;z<arrayOflabels[2].length;z++)
   {
     temp={};
     temp.label=arrayOflabels[0][z],
     temp.data=arrayOflabels[2][z],
                 temp.backgroundColor=backgroundColorsArray[z],
                 temp.hoverBackgroundColor="rgba(55, 160, 225, 0.7)",
                 temp.hoverBorderWidth=2,
                 temp.hoverBorderColor='lightgrey'

   dataSetArray.push(temp);
   }

   var numberWithCommas = function(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };



   var bar_chart = new Chart(canvas, {
   type: chart_type,
   data: {
       labels: arrayOflabels[1],
       datasets:dataSetArray,
   },
   options: {
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
           stacked: true,
           gridLines: { display: false },
           }],
         yAxes: [{
           stacked: true,

           }],
       }, // scales
       legend: {display: true}
   } // options
   }
   );

   }


   // Return with commas in between
   function drawCustomChart(chart_id,chart_type,arrayOflabels)
  {
  // var numberWithCommas = function(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };



  document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_nee" width="" height=""></canvas>';

  console.log(arrayOflabels);
  var canvas = document.getElementById(chart_id);

  var bar_chart = new Chart(canvas, {
   type: chart_type,
   data: {
       labels: arrayOflabels[0],
       datasets: [
       {
           label: selected_y,
           data: arrayOflabels[1],
                       backgroundColor: "rgba(55, 160, 225, 0.7)",
                       hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                       hoverBorderWidth: 2,
                       hoverBorderColor: 'lightgrey'
       },

       ]
   },
   options: {
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
           stacked: true,
           gridLines: { display: false },
           }],
         yAxes: [{
           stacked: true,

           }],
       }, // scales
       legend: {display: true}
   } // options
  }
  );

  }
