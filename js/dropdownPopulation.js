var globaldropdownJson;
var globalOrgs;
var globalPartners;

function gettingResponsefromFirstPage(clientJSON) {
    globaldropdownJson = clientJSON[0].clients_accessed;
    Orgarr_partner_names = [];
    Orgarr_clients_names = [];

    partner_arr = [];
    client_arr = [];

    //  switch_pc=1;

    for (var i = 0; i < globaldropdownJson.length; i++) {
        if (globaldropdownJson[i].partner == 'Yes') {
            Orgarr_partner_names.push(globaldropdownJson[i].refname);
            partner_arr.push(globaldropdownJson[i]);
        } else {
            Orgarr_clients_names.push(globaldropdownJson[i].refname);
            client_arr.push(globaldropdownJson[i]);
        }
    }
    // var organizations=Object.keys(globaldropdownJson);
    // globalOrgs=organizations;

    setorg(Orgarr_partner_names, Orgarr_clients_names);

}


function setorg() {
    if (switch_pc) {
        populatingOndropdown(Orgarr_partner_names, 'OrganizationalSelect');
    } else {
        populatingOndropdown(Orgarr_clients_names, 'OrganizationalSelect');

    }
    gettingResponsefromFirstPageForClients();

}

function gettingResponsefromFirstPageForClients() {


    if (switch_pc) {
        populatingOndropdown(partner_arr[0].clients_refname, 'PartnerSelect');
    } else {
        populatingOndropdown(client_arr[0].partner_orgids, 'PartnerSelect');

    }


    // if(globaldropdownJson[0].partner=="Yes")
    // {
    //   populatingOndropdown(globaldropdownJson[0].clients_refname,"PartnerSelect");
    // }
    // else {
    //   populatingOndropdown(globaldropdownJson[0].partner_orgids,"PartnerSelect");
    // }

    // var partners=Object.values(globaldropdownJson);
    // globalPartners=partners;
    // populatingOndropdown(partners[0],"PartnerSelect");
}


function populatingOndropdown(optionals, docid) {
    console.log(optionals);
    document.getElementById(docid).innerHTML = "";
    var selectors = $('#PartnerSelect').selectize({
        plugins: ['remove_button']
    })[0].selectize;
    selectors.clearOptions();
    var inHTML = document.getElementById(docid).innerHTML;
    for (var i = 0; i < optionals.length; i++) {
        document.getElementById(docid).innerHTML += "<option value=" + optionals[i] + ">" + optionals[i] + "</option>"
        selectors.addOption({
            text: optionals[i],
            value: optionals[i]
        });

    }
}
itself = [];

function callingTicketDataBase() {

    var e = document.getElementById('PartnerSelect');

    var PartName;
    var Partlength = e.selectedOptions.length;
    if (Partlength == 0) {
        alert("Select atleast one client or organization");
    } else {
        switchToAll();
        var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);
            console.log($pageloader);

             $pageloader[0].classList.toggle('is-active');
        document.getElementById('idTabs').style.display = 'block';
        document.getElementById('tabler').style.display = 'flex';
        document.getElementById('charter').style.display = 'none';
        document.getElementById('instructions').style.display = 'none';
        PartName = e.selectedOptions[0].text;
        itself = [];
        // var url="https://productsupport.konylabs.net/ticketpojo/"+OrgName+"/"+fromDate+"/"+toDate+"/"+PartName;
        if (switch_pc) {

            for (var i = 1; i < Partlength; i++) {


                PartName = PartName + ',' + document.getElementById('PartnerSelect')[i].text.trim();

                if (i == Partlength - 1) {
                    cnl_and_acc(PartName);
                }
            }

            if (Partlength == 1) {
                cnl_and_acc(PartName);
            }

        } else {
            for (var i = 1; i < Partlength; i++) {


                PartName = PartName + ',' + document.getElementById('PartnerSelect')[i].text.trim();

                if (i == Partlength - 1) {
                    client_fun(document.getElementById('OrganizationalSelect').value.trim(), PartName);
                }
            }
            if (Partlength == 1) {


                client_fun(document.getElementById('OrganizationalSelect').value.trim(), PartName);
            }
        }
    }
}



function itself_data(client_name, partners) {

    var OrgName = document.getElementById('OrganizationalSelect').value;

    var fromDate = document.getElementById('fromDate').value;

    var toDate = document.getElementById('toDate').value;

    var s = document.getElementById('selectMode').value;

    var url = "https://productsupport.konylabs.net/ticketpojo/" + OrgName + "/" + fromDate + "/" + toDate;
    $.ajax({
            url: url,
            type: "GET",
            dataType: 'json',
            cors: true,
            headers: {
                'type': s
            }
        })
        .done(function(data) {
            itself = data;
            client_fun_up(client_name, partners);
            return;
        });

}


function internal_data(PartName) {
    var OrgName = document.getElementById('OrganizationalSelect').value;

    var fromDate = document.getElementById('fromDate').value;

    var toDate = document.getElementById('toDate').value;


    var url = "https://productsupport.konylabs.net/clientgetter/" + OrgName;
    $.ajax({
            url: url,
            type: "GET",
            dataType: 'json',
            cors: true,
            headers: {}
        })
        .done(function(data) {
            var cnl = "Internal Projects";
            var acc = (data[0].account_name_values.map(function(s) {
                return String.prototype.trim.apply(s);
            })).join(",");

            if (acc == "") {
                acc = "-";
            } else {
                acc = acc + "," + "-";
            }
            var s = document.getElementById('selectMode').value;
            var url = "https://productsupport.konylabs.net/ticketpojo/" + OrgName + "/" + fromDate + "/" + toDate + "/" + cnl;
            $.ajax({
                    url: url,
                    type: "GET",
                    dataType: 'json',
                    cors: true,
                    headers: {
                        'type': s
                    }
                })
                .done(function(data) {
                    var iurl = "https://productsupport.konylabs.net/ticketpojo/" + OrgName + "/" + fromDate + "/" + toDate + "/" + "-/" + acc;

                    $.ajax({
                            url: iurl,
                            type: "GET",
                            dataType: 'json',
                            cors: true,
                            headers: {
                                'type': s
                            }
                        })
                        .done(function(idata) {
                            itself = idata.concat(data);
                            cnl_and_acc_up(PartName);
                        });

                });
        });
}


function client_fun(client_name, partners) {
    if (partners.indexOf("Itself") !== -1) {
        itself_data(client_name, partners);
    }
    else {
      client_fun_up(client_name, partners);
    }

}

function client_fun_up(client_name, partners){

  var url = "https://productsupport.konylabs.net/clientgetter/" + client_name;
  $.ajax({
          url: url,
          type: "GET",
          dataType: 'json',
          cors: true,
          headers: {}
      })
      .done(function(data) {
          var cnl = (data[0].customer_name_list_values.map(function(s) {
              return String.prototype.trim.apply(s);
          })).join(",");
          var acc = (data[0].account_name_values.map(function(s) {
              return String.prototype.trim.apply(s);
          })).join(",");

          var fromDate = document.getElementById('fromDate').value;

          var toDate = document.getElementById('toDate').value;
          var s = document.getElementById('selectMode').value;
          var url = "https://productsupport.konylabs.net/ticketpojo/" + partners + "/" + fromDate + "/" + toDate + "/" + cnl;
          $.ajax({
                  url: url,
                  type: "GET",
                  dataType: 'json',
                  cors: true,
                  headers: {
                      'type': s
                  }
              })
              .done(function(data) {

                  var iurl = "https://productsupport.konylabs.net/ticketpojo/" + partners + "/" + fromDate + "/" + toDate + "/" + "-/" + acc;
                  $.ajax({
                          url: iurl,
                          type: "GET",
                          dataType: 'json',
                          cors: true,
                          headers: {
                              'type': s
                          }
                      })
                      .done(function(idata) {
                          console.log(data);
                          console.log(idata);

                          var rawdata = idata.concat(data).concat(itself);

                          console.log(rawdata);
                          handleDatafromServerforTickets(rawdata);
                          settingHeaderOfTable();
                      });
              });

      });






}





function cnl_and_acc(PartName) {
    if (PartName.indexOf("Internal Project") !== -1) {
        internal_data(PartName);
    }
    else{
      cnl_and_acc_up(PartName);
    }

}


function cnl_and_acc_up(PartName){
  var cnl = "";
  var acc = "";
  var url = "https://productsupport.konylabs.net/clientgetter/" + PartName;
  $.ajax({
          url: url,
          type: "GET",
          dataType: 'json',
          cors: true,
          headers: {}
      })
      .done(function(data) {




          for (var i = 0; i < data.length; i++) {
              data[i].customer_name_list_values = data[i].customer_name_list_values.map(function(s) {
                  return String.prototype.trim.apply(s);
              });
              data[i].account_name_values = data[i].account_name_values.map(function(s) {
                  return String.prototype.trim.apply(s);
              });

              if (data[i].customer_name_list_values.length !== 0) {
                  cnl = cnl + "," + data[i].customer_name_list_values.join(",");
              }
              if (data[i].account_name_values.length !== 0) {
                  acc = acc + "," + data[i].account_name_values.join(",");
              }
              console.log(acc + "-------------------" + cnl);
          }

      }).done(function() {
          acc = acc.slice(1, acc.length);
          cnl = cnl.slice(1, cnl.length);
          call_tickets_api(acc, cnl);

      });





}





function call_tickets_api(acc, cnl) {

    var OrgName = document.getElementById('OrganizationalSelect').value;

    var fromDate = document.getElementById('fromDate').value;

    var toDate = document.getElementById('toDate').value;

    if (cnl == "") {
        cnl = "null";
    }
    if (acc == "") {
        acc = "null";
    }

    var s = document.getElementById('selectMode').value;
    var url = "https://productsupport.konylabs.net/ticketpojo/" + OrgName + "/" + fromDate + "/" + toDate + "/" + cnl;
    $.ajax({
            url: url,
            type: "GET",
            dataType: 'json',
            cors: true,
            headers: {
                'type': s
            }
        })
        .done(function(data) {
            var iurl = "https://productsupport.konylabs.net/ticketpojo/" + OrgName + "/" + fromDate + "/" + toDate + "/" + "-/" + acc;

            $.ajax({
                    url: iurl,
                    type: "GET",
                    dataType: 'json',
                    cors: true,
                    headers: {
                        'type': s
                    }
                })
                .done(function(idata) {
                    console.log(data);
                    console.log(idata);
                    var rawdata = idata.concat(data).concat(itself);
                    console.log(rawdata);
                    handleDatafromServerforTickets(rawdata);
                    settingHeaderOfTable();
                });


        });
}
// var clientJSON={
//         "username": "asdf",
//         "password": "qwerty",
//         "clients": {
//             "Accenture": [
//                 "ABInBev",
//                 "BancaMovil",
//                 "Banco AV Villas",
//                 "Banco de Bogota",
//                 "Banco Occidental",
//                 "Colombia Group",
//                 "Grupo Aval",
//                 "Porvenir",
//                 "Siemens",
//                 "Taylor United Technologies Corporation",
//                 "United Technologies Corporation"
//             ],
//             "Cognizant":[
//         "Aetna",
//         "Ally Bank",
//         "Ally Financial",
//         "China Light and Power",
//         "Daimler",
//         "DBS",
//         "Harland Clarke",
//         "Jack In The Box",
//         "Mapfre",
//         "Marathon Oil",
//         "Rentokil Initial",
//         "RJReynolds"
//     ]
//         }
//     };
//
//   var clientJSON={
//     "_id" : ObjectId("59faab6afa2807302cebf36a"),
//     "username" : "asdf",
//     "password" : "qwerty",
//     "Team" : "cse",
//     "clients_accessed" : [
//         {
//             "refname" : "Accenture",
//             "partner" : "Yes",
//             "partner_orgids" : [],
//             "clients_refname" : [
//                 "Intenal Project",
//                 " Abinbev",
//                 " BancaMovil",
//                 " Banco de Bogota",
//                 " Banco Occidental de Descuento",
//                 " Bancoavvillas",
//                 " Colombia Group",
//                 " Grupo Aval Acciones Y Valores S A",
//                 " Porvenir",
//                 " Siemens",
//                 " Taylor Corporation",
//                 " United Technologies Corporation"
//             ]
//         },
//         {
//             "refname" : "Aetna",
//             "partner" : "No",
//             "partner_orgids" : [
//                 "Kony",
//                 " UST Global Inc"
//             ],
//             "clients_refname" : []
//         }
//     ]
// };
//
//
gettingResponsefromFirstPage(JSON.parse(localStorage.getItem('lgndata')));
