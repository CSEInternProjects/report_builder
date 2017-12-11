var options = document.getElementById("OrganizationalSelect");
options.addEventListener("change", function() {
    console.log("change " + options.value);
    var selectors = $('#PartnerSelect').selectize()[0].selectize;
    selectors.clearOptions();
    selectors.clear();
    var selectizejson = {};
    secondarray = [];

    for (var i = 0; i < globaldropdownJson.length; i++) {
        if (globaldropdownJson[i].refname == options.value) {
            if (globaldropdownJson[i].partner == "Yes") {
                secondarray = globaldropdownJson[i].clients_refname;
                for (var k = 0; k < globaldropdownJson[i].clients_refname.length; k++) {
                    selectors.addOption({
                        text: globaldropdownJson[i].clients_refname[k],
                        value: globaldropdownJson[i].clients_refname[k]
                    });
                    //selectors.addItem(globaldropdownJson[options.value][k]);
                }
            } else {
                secondarray = globaldropdownJson[i].partner_orgids;

                for (var k = 0; k < globaldropdownJson[i].partner_orgids.length; k++) {
                    selectors.addOption({
                        text: globaldropdownJson[i].partner_orgids[k],
                        value: globaldropdownJson[i].partner_orgids[k]
                    });
                    //selectors.addItem(globaldropdownJson[options.value][k]);
                }
            }
        }
    }
    populatingOndropdown(secondarray, "PartnerSelect");
});

// gettingResponsefromFirstPageForClients(globaldropdownJson);
