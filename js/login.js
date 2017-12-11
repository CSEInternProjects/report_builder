function onClickingLoginButton() {
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  authenticate(username,password);
}

function authenticate(user_name,password)
{

  console.log(user_name+"  "+password);

  if(user_name==""){
    alert("enter username before login");
  }
  else if(password=="")
  {
    alert("enter password before login");
  }
  else {


      var saveData = $.ajax({
    		type: 'GET',
    		url: "https://productsupport.konylabs.net/userauth/"+user_name+"/"+password+"",
    		dataType: "json",
    		cors: true,
    		headers: {

    		}


    	}).done(function (resultData)
      {
        logindata=resultData;
        console.log(resultData);
        // delete resultData[0].clients_accessed;
        var cookieText=JSON.stringify(resultData);

        localStorage.setItem("lgndata",cookieText)
        //alert(resultData);
        //document.cookie=JSON.stringify(resultData);
        var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);
            console.log($pageloader);

             $pageloader[0].classList.toggle('is-active');
             var pageloaderTimeout = setTimeout( function() {
                      $pageloader[0].classList.toggle('is-active');
                        window.location.href="display.html";
                      clearTimeout( pageloaderTimeout );

                    }, 1000 );



      }).error(function (){alert("Enter Valid credentials");});





  }


}
