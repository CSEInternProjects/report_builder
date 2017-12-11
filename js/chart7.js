function Display_Seventh_Chart() {

  var x=x_parameter_selected("platform category");

  var z=x_parameter_selected("version");

  var data7=fetch_data_stacked("platform category",x,"version",z,"volume");

  console.log("********************************");
  console.log(data7);
    // var pccount = 0;
    // var pcjson = {};
    // var versionjson = {};
    // var pc, pv;
    // for (i = 0; i < obj.length; i++) {
    //     pc = obj[i].Platform_Category_;
    //     if (pc == "-") {
    //         pc = "None";
    //     }
    //     pv = obj[i].Product_Version_;
    //     if (pcjson[pc] == undefined) {
    //         pcjson[pc] = pccount++;
    //     }
    //
    //     if (versionjson[pv] == undefined) {
    //         versionjson[pv] = [];
    //         versionjson[pv][pcjson[pc]] = 1;
    //     } else {
    //         if (isNaN(versionjson[pv][pcjson[pc]])) {
    //             versionjson[pv][pcjson[pc]] = 1;
    //         } else {
    //             versionjson[pv][pcjson[pc]]++;
    //         }
    //     }
    // }



    // var k = Object.keys(z);
    // for (var i = 0; i < k.length; i++) {
    //     for (var j = 0; j < z[k[i]].length; j++) {
    //         if (isNaN(z[k[i]][j])) {
    //             z[k[i]][j] = 0;
    //         }
    //     }
    // }
    //
    var data = {
        labels:data7[1],
        datasets: []
    };


    var flage = false;
    for (var l = 0; l < data7[2].length; l++) {
        if (data7[2][l].length !== 0) {
            flage = true;
        }
        data.datasets.push(dataset_json(data7[0][l], data7[2][l], colors[l]));

    }
    console.log("********************************");
    console.log(data);
    drawstackedbarchart('bar', 'volume_vs_version_vs_pc', data, options_json('Ticket Volume vs Version vs PC'), flage, false);
}
