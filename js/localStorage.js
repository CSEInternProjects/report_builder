function getUSerInfo(localStoragename)
{

    var aValue =JSON.parse(localStorage.getItem(localStoragename));
    if(aValue!=null)
    {
      //window.location.href="display.html";
      console.log(aValue[0].username);
       authenticate(aValue[0].username,aValue[0].password)
    }

}
