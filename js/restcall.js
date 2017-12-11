function restResult(url){
$.ajax({
      url: url,
      type: "GET",
      dataType: 'json',
      cors: true  ,
      headers: {}
      })
        .done(function(data) {
          //console.log(data);

          handleDatafromServerforTickets(data);
          //if(differentiator==2)

          })
}
////console.log
