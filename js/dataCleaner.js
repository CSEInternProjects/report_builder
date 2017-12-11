var inputTagsArray;
var classifiersCheckedFlag;
var classifiersCheckedFlag_z;
var classifiers_array_global;
var classifiers_array_global_z;
var charttypeselected='bar';

function returnDataForChart(idHere)
{

    if(idHere===3)
      {

        for(var j=0;j<classifiers_array_global.length;j++)
      {
        if(document.getElementById(classifiers_array_global[j]).checked)
        {
          classifiersCheckedFlag=true;
          break;
        }
        else
        {
          classifiersCheckedFlag=false;
        }
      }
            for(var j=0;j<classifiers_array_global_z.length;j++)
          {
            if(document.getElementById(classifiers_array_global_z[j]+"_z").checked)
            {
              classifiersCheckedFlag_z=true;
              break;
            }
            else
            {
              classifiersCheckedFlag_z=false;
            }
          }

          if(classifiersCheckedFlag==false)
          {
            alert("Please check a classifier for X-axis");
          }
          else if(classifiersCheckedFlag_z===false)
          {
            alert("Please check a classifier for Z-axis");
          }
          else
          {
            selected=[];

            selected_z=[];

            dataSetArray=[];

            $('#classifiers_column input:checked').each(function() {
                selected.push($(this).attr('value'));
            });
            $('#classifiers_column_z input:checked').each(function() {
                selected_z.push($(this).attr('value'));
            });
            var dataDummy=fetch_data_stacked(x_selected,selected,z_selected,selected_z,selected_y);

          }

      }


else{
    for(var j=0;j<classifiers_array_global.length;j++)
  {
    if(document.getElementById(classifiers_array_global[j]).checked)
    {
      classifiersCheckedFlag=true;
      break;
    }
    else
    {
      classifiersCheckedFlag=false;
    }
  }

  if(classifiersCheckedFlag==false)
  {
    alert("Please check a classifier for X-axis");
  }
    else
     {

       selected=[];

      $('#classifiers_column input:checked').each(function() {
          selected.push($(this).attr('value'));
      });
      console.log(x_selected+" ");
      console.log(selected);
      console.log(selected_y);
      var dataDummy=fetch_data(x_selected,selected,selected_y);

    }
  }
  return dataDummy;
}



        function drawchart(type_of_chart, chart_id, chart_data, chart_options,flage,ftr)
        {
          document.getElementById('custom_charter_naa').innerHTML='';

            if(flage){
              if(ftr)
              document.getElementById(chart_id).innerHTML='  <canvas id="'+chart_id+'_" width="" height=""></canvas><p>No Ftr Tickets                         Average is </p>';
              else {
                document.getElementById(chart_id).innerHTML='  <canvas id="'+chart_id+'_" width="" height=""></canvas>';

              }


            var bar_ctx = document.getElementById(''+chart_id+'_');
            var bar_chart = new Chart(bar_ctx, {
              type: type_of_chart,
              data: chart_data,
              options: chart_options,
              animationEasing:'linear'
            });
          }

          else{

            if(ftr)
            document.getElementById(chart_id).innerHTML='  <h2 id="'+chart_id+'" width="" height="">DATA NOT AVAILABLE FOR <B>"'+s+'"</B></h2><p>No Ftr Tickets</p>'
            else {
              document.getElementById(chart_id).innerHTML='  <h2 id="'+chart_id+'" width="" height="">DATA NOT AVAILABLE FOR <B>"'+s+'"</B></h2>'
                }
            }


          }
