var chart1, chart2, chart3, chart4,chart5;

var check;



function hideUnusedCharts(getChartName) {
//alert('you have clicked on '+getChartName);
  if (getChartName == "barchart") {
    document.getElementById('test1').innerHTML = chart1;
    document.getElementById('test1').style.display='block';
    document.getElementById('test2').innerHTML = '';
    document.getElementById('test4').innerHTML = '';
    document.getElementById('test5').innerHTML = '';
    document.getElementById('test5').style.display='none';
    document.getElementById('test3').innerHTML = '';
    document.getElementById('test2').style.display='none';  document.getElementById('test3').style.display='none';
    document.getElementById('test4').style.display='none';
    charttypeselected='bar';

    showClassifiers('status');
    document.getElementById('classifiers_column').getElementsByTagName('input')[0].checked=true;
    selected_y="volume";
    barchart();





  }
  else if (getChartName == "linechart") {
    document.getElementById('test1').innerHTML = '';

    document.getElementById('test2').innerHTML = chart2;
    document.getElementById('test2').style.display='block';
    document.getElementById('test3').innerHTML = '';
    document.getElementById('test4').innerHTML = '';
    document.getElementById('test5').innerHTML = '';
    document.getElementById('test5').style.display='none';
    document.getElementById('test3').style.display='none';  document.getElementById('test1').style.display='none';
    document.getElementById('test4').style.display='none';
    charttypeselected='line';

    showClassifiers('status');

      //  document.getElementById('classifiers_column').getElementsByTagName('input')[1].checked=true;

    document.getElementById('classifiers_column').getElementsByTagName('input')[0].checked=true;
    selected_y="volume";
    linechart();
  }
  else if (getChartName == "stackedchart") {
    document.getElementById('test1').innerHTML = '';
    document.getElementById('test2').innerHTML = '';
    document.getElementById('test3').innerHTML = chart3;
    document.getElementById('test4').innerHTML = '';
    document.getElementById('test5').innerHTML = '';
    document.getElementById('test5').style.display='none';
    document.getElementById('test3').style.display='block';
    document.getElementById('test2').style.display='none';  document.getElementById('test1').style.display='none';
    document.getElementById('test4').style.display='none';
    charttypeselected='bar';

    showClassifiers('status');
    showClassifiersForZ_axis('severity');
    document.getElementById('classifiers_column').getElementsByTagName('input')[0].checked=true;
    document.getElementById('classifiers_column_z').getElementsByTagName('input')[0].checked=true;
    document.getElementById('classifiers_column_z').getElementsByTagName('input')[1].checked=true;
    selected_y="volume";
    stackedbarchart();
  }
  else if (getChartName == "piechart") {
    document.getElementById('test1').innerHTML = '';
    document.getElementById('test2').innerHTML = '';
    document.getElementById('test3').innerHTML = '';
    document.getElementById('test5').innerHTML = '';
    document.getElementById('test4').innerHTML = chart4;
    document.getElementById('test5').style.display='none';
    document.getElementById('test4').style.display = 'block';
    document.getElementById('test2').style.display='none';
     document.getElementById('test3').style.display='none';
    document.getElementById('test1').style.display='none';
    charttypeselected='doughnut';

    showClassifiers('status');

        //document.getElementById('classifiers_column').getElementsByTagName('input')[1].checked=true;

    document.getElementById('classifiers_column').getElementsByTagName('input')[0].checked=true;
    selected_y="volume";
    piechart();
  }

  else if (getChartName == "groupedbarchart") {
    document.getElementById('test1').innerHTML = '';
    document.getElementById('test2').innerHTML = '';
    document.getElementById('test3').innerHTML = '';
    document.getElementById('test4').innerHTML = '';
    document.getElementById('test5').innerHTML = chart5;
    document.getElementById('test4').style.display = 'none';
    document.getElementById('test2').style.display='none';
    document.getElementById('test3').style.display='none';
    document.getElementById('test1').style.display='none';
    document.getElementById('test5').style.display='block';
    charttypeselected='bar';

    showClassifiers('status');
    showClassifiersForZ_axis('severity');
    document.getElementById('classifiers_column').getElementsByTagName('input')[0].checked=true;
    document.getElementById('classifiers_column_z').getElementsByTagName('input')[0].checked=true;
    document.getElementById('classifiers_column_z').getElementsByTagName('input')[1].checked=true;
    selected_y="volume";
    groupedbarchart();
  }
}


function setChart()
{


}
