// colors= ['rgba(255, 99, 132, 0.8)',
//                 'rgba(54, 162, 235, 0.8)',
//                 'rgba(255, 206, 86, 0.8)',
//                 'rgba(75, 192, 192, 0.8)',
//                 'rgba(153, 102, 255, 0.8)',
//                 'rgba(255, 159, 64, 0.8)',
//                 'rgba(255,255,0 ,0.8)',
//                 'rgba(51,105,30 ,0.8)',
//                 'rgba(33,150,243 ,0.8)',
//                 'rgba(216,27,96 ,0.8)',
//                 'rgba(213,0,249 ,0.8)',
//                 'rgba(38,50,56 ,0.8)',
//                 'rgba(198,255,0 ,0.8)',
//                 'rgba(0,150,136 ,0.8)'];
//     borderColors=['rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(255,255,0 ,1)',
//                 'rgba(51,105,30 ,1)',
//                 'rgba(33,150,243 ,1)',
//                 'rgba(216,27,96 ,1)',
//                 'rgba(213,0,249 ,1)',
//                 'rgba(38,50,56 ,1)',
//                 'rgba(198,255,0 ,1)',
//                 'rgba(0,150,136 ,1)']
//


function linechart() {
    //document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_naa" width="" height=""></canvas>';
    var chart_raw_data = returnDataForChart(2);

    var data = {
        labels: chart_raw_data[0],
        datasets: []
    }

    data.datasets.push(dataset_json(selected_y, chart_raw_data[1], colors[5]));

    drawchart('line', 'custom_charter_naa', data, options_json(x_selected + "  vs  " + selected_y), true, false);

}




function barchart() {

    //document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_naa" width="" height=""></canvas>';
    var chart_raw_data = returnDataForChart(2);

    var data = {
        labels: chart_raw_data[0],
        datasets: []
    }

    data.datasets.push(dataset_json(selected_y, chart_raw_data[1], colors[6]));

    drawchart('bar', 'custom_charter_naa', data, options_json(x_selected + "  vs  " + selected_y), true, false);



}



function piechart() {
    //  document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_naa" width="" height=""></canvas>';
    var chart_raw_data = returnDataForChart(2);

    var options = {
        title: {
            display: true,
            text: x_selected + "  vs  " + selected_y
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


    // var data={
    //    labels:chart_raw_data[0],
    //    datasets: []
    //  }

    //   data.datasets.push(dataset_json(selected_y,chart_raw_data[1],colors[Math.floor(Math.random() * 15)]));

    var c = [];
    colorFormation(chart_raw_data[0]);
    for (i = 0; i <= chart_raw_data[0].length - 1; i++) {
        c.push(color1[i]);
    }


    var datapie = {

        labels: chart_raw_data[0],


         datasets: [{        
            data: chart_raw_data[1],
            label: chart_raw_data[0],
            backgroundColor: c,
            hoverBackgroundColor: c,
            hoverBorderWidth: 2,
            hoverBorderColor: borderColors[7],
            borderColor: c

                
        }]


    };






    drawchart('doughnut', 'custom_charter_naa', datapie, options, true, false);
}

function stackedbarchart() {
    //document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_naa" width="" height=""></canvas>';
    var chart_raw_data = returnDataForChart(3);
    var data = {
        labels: chart_raw_data[1],
        datasets: []
    }

    colorFormation(chart_raw_data[0]);
    for (var z = 0; z < chart_raw_data[2].length; z++) {
        data.datasets.push(dataset_json(chart_raw_data[0][z], chart_raw_data[2][z], color1[z]));
    }

    drawchart('bar', 'custom_charter_naa', data, options_json(x_selected + "  and   " + z_selected + "  vs  " + selected_y), true, false);


}

function groupedbarchart() {
    //document.getElementById('custom_charter_naa').innerHTML='<canvas id="custom_charter_naa" width="" height=""></canvas>';
    var chart_raw_data = returnDataForChart(3);
    var data = {
        labels: chart_raw_data[1],
        datasets: []
    }

    colorFormation(chart_raw_data[0]);
    for (var z = 0; z < chart_raw_data[2].length; z++) {
        data.datasets.push(dataset_json(chart_raw_data[0][z], chart_raw_data[2][z], color1[z]));
    }
    var options = {
        title: {
            display: true,
            text: x_selected + "  and   " + z_selected + "  vs  " + selected_y
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
                grouped: true,
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
    drawchart('bar', 'custom_charter_naa', data, options, true, false);
}


function dataset_json(lbl, d, color) {
    console.log(color)
    var indexOfcolor = colors.indexOf(color)
    var a = {
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
