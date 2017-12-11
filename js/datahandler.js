function handleDatafromServerforTickets(data)
{
  console.log(data);


  var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);


var pageloaderTimeout = setTimeout( function() {
      $pageloader[0].classList.toggle('is-active');
        //window.location.href="display.html";
        cleaningDataToFitInTableByaddingHTML(data);
      clearTimeout( pageloaderTimeout );

    }, 1000 );


  // document.getElementById('chartsection').style.display='flex';
  // document.getElementById('exportsection').style.display='flex';
  // document.getElementById('customChartsection').style.display='flex';
  // document.getElementById('tabler').style.display='none';
obj=data;
  globaldt=data;
}
