function export_excel()
{
  var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);
      console.log($pageloader);

       $pageloader[0].classList.toggle('is-active');

      //  var pageloaderTimeout = setTimeout( function() {
       // $pageloader[0].classList.toggle('is-active');
      //             //window.location.href="display.html";
      //           clearTimeout( pageloaderTimeout );
       //
      //         }, 10000 );
  predata=globalRawdt;
  var a=[];
  var b={};
  for(var i=0;i<predata.length;i++){

    b={};
    for(var k=0;k<keysofJSON.length;k++){
      b[keysofJSON[k].split("_").join(" ")]=predata[i][keysofJSON[k]];
    }
    a[i]=b;
  }

JSONToCSVConvertor(a,"qwert",true);

doc = new jsPDF({
//  orientation: 'landscape',
unit: 'in',
format: [100, 13]
});

countx=0.5;
county=1;

htoc(0);


}



//pos=[1,7];
