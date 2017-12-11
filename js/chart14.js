function Display_Fourteenth_Chart() {

  var x=x_parameter_selected("status");

  var z=x_parameter_selected("severity");

  var data14=fetch_data_stacked("status",x,"severity",z,"escalated volume");
// var sevcount=0;
// var sevjson={};
//
//
// var statusjson={};
//
// var sev,status,tags;
//
// for(i=0; i<obj.length; i++)
// {
//  sev = obj[i].Severity_;
//  status=obj[i].Status;
//     tags=obj[i].Tags;
//
//
//   if(tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_!=="yes")
//   {
//
// if(tags.indexOf("l2_escalated") !== -1)
//   {
//     if(sevjson[sev]==undefined)
//     {
//       sevjson[sev]=sevcount++;
//     }
//
//     if(statusjson[status]==undefined)
//     {
//       statusjson[status]=[];
//       statusjson[status][sevjson[sev]]=1;
//
//
//     }
//     else {
//       if(isNaN(statusjson[status][sevjson[sev]]))
//       {
//         statusjson[status][sevjson[sev]]=1;
//       }
//       else {
//           statusjson[status][sevjson[sev]]++;
//       }
//
//     }
//
//   }
// }
// }
// var k=Object.keys(statusjson);
//   for(var i=0;i<k.length;i++)
//   {
//     for(var j=0;j<statusjson[k[i]].length;j++)
//     {
//       if(isNaN(statusjson[k[i]][j]))
//       {
//         statusjson[k[i]][j]=0;
//       }
//     }
//   }

  var data = {
    labels:data14[1],
    datasets: []
  };


// var flage=false;
//   colorFormation(k);
//   for(var l=0;l<k.length;l++)
//   {
//     if(statusjson[k[l]].length!==0)
//     {
//       flage=true;
//     }
//     data.datasets.push(dataset_json(k[l],statusjson[k[l]],color1[l]));
//
//   }


  var flage = false;
  colorFormation(data14[0]);

  for (var l = 0; l < data14[2].length; l++) {
      if (data14[2][l].length !== 0) {
          flage = true;
      }
      data.datasets.push(dataset_json(data14[0][l], data14[2][l], color1[l]));

  }
console.log("********************************");
console.log(data);
   drawstackedbarchart('bar','escalated_vs_status_vs_sev', data, options_json('Ticket escalated Volume vs Status vs Severity'),flage,true);


}
