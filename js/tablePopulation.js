var keysOfJSON=Object.keys(columnsoFtable);
//keysofJSON=['Id','Created_at','Ticket_type','Satisfaction_Score','Severity_','Status','Updated_at','Product_Support_Assignee_','Subject'];
var table;
var checkedKeys=[];
var dataforColumnAddition;


$("#showModal").click(function() {
  $(".modal").addClass("is-active");
  document.getElementById('checkboxcolumns').innerHTML=''
  var checkboxhead='<div class="column"><div class="field" id="keysforTable">';
  for (var i = 0; i < keysOfJSON.length; i++) {
    if((i+1)%10==0)
    {
      checkboxhead=checkboxhead+'</div></div><div class="column"><div class="field" id="keysforTable">';
    }
    if(columnsoFtable[keysOfJSON[i]]==1)
    {
      checkboxhead=checkboxhead+'<input class="is-checkbox has-background-color is-info" id="'+keysOfJSON[i]+'" type="checkbox" value="'+keysOfJSON[i]+'" checked><label for="'+keysOfJSON[i]+'">'+keysOfJSON[i].split("_").join(" ")+'</label><br>'
    }
    if(columnsoFtable[keysOfJSON[i]]==0) {
      checkboxhead=checkboxhead+'<input class="is-checkbox has-background-color is-info" id="'+keysOfJSON[i]+'" type="checkbox" value="'+keysOfJSON[i]+'"><label for="'+keysOfJSON[i]+'">'+keysOfJSON[i].split("_").join(" ")+'</label><br>'

    }

  }
  checkboxhead=checkboxhead+'</div></div>';
  var checkboxend=$(checkboxhead);
  checkboxend.appendTo('#checkboxcolumns');
});




function makechangesToJson()
{
  checkedKeys=[];
  $('#keysforTable input:checked').each(function() {
      checkedKeys.push($(this).attr('value'));
  });
  for (var i = 0; i < Object.keys(columnsoFtable).length; i++) {
      columnsoFtable[Object.keys(columnsoFtable)[i]]=0;
  }
  for (var i = 0; i < checkedKeys.length; i++) {
    columnsoFtable[checkedKeys[i]]=1;
  }
  settingHeaderOfTable();
  cleaningDataToFitInTableByaddingHTML(globalRawdt)
}
function settingHeaderOfTable()
{

  document.getElementById('tablerContent').innerHTML='<table id="example" class="display table is-fullwidth" cellspacing="0" width="100%">    <tbody class="tbody">    </tbody>  </table>';
  var tableHead='<thead><tr>';
keysofJSON=Object.keys(columnsoFtable);
for(var j=0;j<keysofJSON.length;j++)
{
  var keys=keysofJSON[j].split('_');
  if(columnsoFtable[keysofJSON[j]]==1){//this is newly added code
  Headers=keys.join(' ')
tableHead=tableHead+'<th>'+Headers+'</th>';
  }
}
tableHead=tableHead+'</tr></thead>'
var tableEnd=$(tableHead);
tableEnd.appendTo('#example');

}

function cleaningDataToFitInTableByaddingHTML(rawData)
{
  data_to_execl=[];
  globalRawdt=rawData;
console.log(rawData);
  for(var i=0;i<rawData.length;i++){
    var dataRow='<tr>';
    var datajson={};
    for (var k = 0; k < keysofJSON.length; k++) {
      if(columnsoFtable[keysofJSON[k]]==1){//this is newly added code
      dataRow=dataRow+'<td>'+rawData[i][keysofJSON[k]]+'</td>';
      datajson[keysofJSON[k]]=rawData[i][keysofJSON[k]];
    }
    }
    console.log(dataRow);
    dataRow=dataRow+'</tr>';
    data_to_execl.push(datajson);
      var jdataRow=$(dataRow);
    jdataRow.appendTo('.tbody');
  }
 table=$('#example').DataTable( {
        "paging":   true,
        "ordering": true,
        "info":     true,
         "scrollY":"350px" ,
        "scrollX": true,
        "bDestroy": true,
         "order": [[ 0, "desc" ]]
    } );


}
