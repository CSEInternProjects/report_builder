month_names = {
    0: "JAN",
    1: "FEB",
    2: "MAR",
    3: "APR",
    4: "MAY",
    5: "JUN",
    6: "JUL",
    7: "AUG",
    8: "SEP",
    9: "OCT",
    10: "NOV",
    11: "DEC"
};

function onresponse() //obj as parameter
{
    for (var i = 0; i < obj.length; i++) {
        //month_name-start
        obj[i].month_name = month_names[(new Date(obj[i].Created_at)).getMonth()] + " " + (new Date(obj[i].Created_at)).getFullYear();
        //month_name-end


        //all-tickets-start
        obj[i].all_tickets = "consider full volume";
        //all-tickets-end


        //source-start
        if (obj[i].Tags.indexOf("kony_internal") !== -1) {
            obj[i].source = "kony_internal";
        } else if (obj[i].Tags.indexOf("product") !== -1) {
            obj[i].source = "product";
        } else if (obj[i].Tags.indexOf("channelpartner") !== -1) {
            obj[i].source = "channelpartner";
        } else {
            obj[i].source = "-";
        }
        //source-end


        //type1-start
        if (obj[i].Assignee == "Kony Product Support" || obj[i].Assignee == "Kony BDE Product Support") {
            obj[i].type1 = "product_support";
        } else if (obj[i].Assignee == "Kony L3 Product Support") {
            obj[i].type1 = "product_defect";
        } else {
            obj[i].type1 = "-";
        }
        //type1-end


        //type2-start
        if (obj[i].Tags.indexOf("platform__feature_request") !== -1 || obj[i].Change_Request_ == "yes") {
            obj[i].type2 = "Ftr_ticket";
        } else {
            obj[i].type2 = "regular_ticket";
        }
        //type2-end

        //mttr-start
        if (obj[i].Status == "Closed" && (obj[i].Tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") && (obj[i].Assignee == "Kony Product Support" || obj[i].Assignee == "Kony BDE Product Support")) {
            var date1 = new Date(obj[i].Solved_at);
            var date2 = new Date(obj[i].Created_at);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            obj[i].mttr = parseFloat(timeDiff / (1000 * 3600 * 24)).toFixed(2);
        } else {
            obj[i].mttr = "-";
        }
        //mttr-end

        //AASC-start
        if ((obj[i].Status == "Closed" || obj[i].Status == "Solved") && (obj[i].Tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes")) {
            var date1 = new Date(obj[i].Solved_at);
            var date2 = new Date(obj[i].Created_at);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            obj[i].aasc = parseFloat(timeDiff / (1000 * 3600 * 24)).toFixed(2);
        } else {
            obj[i].aasc = "-";
        }
        //AASC-end

        //AAOP-start
        if ((obj[i].Status == "Open" || obj[i].Status == "Pending") && (obj[i].Tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes")) {
            var date1 = new Date();
            var date2 = new Date(obj[i].Created_at);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            obj[i].aaop = parseFloat(timeDiff / (1000 * 3600 * 24)).toFixed(2);
        } else {
            obj[i].aaop = "-";
        }
        //AAOP-end

        //response target-start
        if ((obj[i]['Customer_Support_Plan(Ticket)_'] == "Premier" || obj[i]['Customer_Support_Plan(Ticket)_'] == "Premier-Plus") && obj[i].Status == "Closed") {
            if ((obj[i].First_reply_time_in_minutes <= 30 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes <= 120 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes <= 480 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes <= 1440 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes <= 480 && obj[i].Severity_ == '-') {
                obj[i].response_target = 'Target Met';
            } else if ((obj[i].First_reply_time_in_minutes > 30 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes > 120 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes > 480 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes > 1440 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes > 480 && obj[i].Severity_ == '-') {
                obj[i].response_target = 'Target NOT Met';
            }
        } else if ((obj[i]['Customer_Support_Plan(Ticket)_'] == "-" || obj[i]['Customer_Support_Plan(Ticket)_'] == "Standard" || obj[i]['Customer_Support_Plan(Ticket)_'] == "Standard-Plus") && obj[i].Status == "Closed") {
            if ((obj[i].First_reply_time_in_minutes <= 60 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes <= 240 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes <= 1440 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes <= 2880 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes <= 240 && obj[i].Severity_ == '-') {
                obj[i].response_target = 'Target Met';
            } else if ((obj[i].First_reply_time_in_minutes > 60 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes > 240 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes > 1440 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes > 2880 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes > 240 && obj[i].Severity_ == '-') {
                obj[i].response_target = 'Target NOT Met';
            }
        }

        //resolution target-end
        if (obj[i].Tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if (obj[i].Status == "Closed") {
                if ((obj[i].Requester_wait_time_in_minutes <= 1440 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].Requester_wait_time_in_minutes <= 10080 && obj[i].Tags.indexOf("high") != -1) || (obj[i].Requester_wait_time_in_minutes <= 30240 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].Requester_wait_time_in_minutes <= 30240 && obj[i].Tags.indexOf("low") != -1) || obj[i].Requester_wait_time_in_minutes <= 30240 && obj[i].Severity_ == '-') {
                    obj[i].resolution_target = "Target Met";
                } else if ((obj[i].Requester_wait_time_in_minutes > 1440 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].Requester_wait_time_in_minutes > 10080 && obj[i].Tags.indexOf("high") != -1) || (obj[i].Requester_wait_time_in_minutes > 30240 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].Requester_wait_time_in_minutes > 30240 && obj[i].Tags.indexOf("low") != -1) || obj[i].Requester_wait_time_in_minutes > 30240 && obj[i].Severity_ == '-') {
                    obj[i].resolution_target = "Target NOT Met";
                }
            }

        }
        //resolution target

        //RCA start
        if (obj[i].Tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {

            rca = obj[i]["CSE_-_Root_Cause_Category_"];
            if (rca == "Product Defect" || rca == "Documentation Defect" || rca == "Kony Infrastructure" || rca == "Regression") {
                obj[i].rca = "product_issue";
            } else if (rca == "Consultative" || rca == "Native Issue / Limitation" || rca == "Application Code Issue" || rca == "Application Design Issue" || rca == "Configuration" || rca == "Customer Infra Issue" || rca == "Documentation Not Referred" || rca == "Knowledge Gap") {
                obj[i].rca = "non_product_issue";
            } else if (rca == "I AM NOT SMART" || rca == "-" || rca == "Yet to be Identified" || rca == "Third-party Issue" || rca == "Invalid Issue" || rca == "Feature Request") {
                obj[i].rca = "other";
            } else {
                obj[i].rca = "-";
            }
        }
        //RCA end
    }
}





function to_tag(s) {
    switch (s) {
        case "status":
            return "Status";

        case "severity":
            return "Severity_";

        case "platform category":
            return "Platform_Category_";

        case "source":
            return "source";

        case "type1":
            return "type1";

        case "type2":
            return "type2";

        case "month":
            return "month_name";

        case "All Tickets":
            return "all_tickets";

        case "Response Target":
            return "response_target";

        case "Escalation Reason":
            return "Escalation_Reason_";

        case "version":
            return "Product_Version_";

    }


}





function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// // usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter( onlyUnique );

function x_parameter_selected(param_x) {

    var tag = to_tag(param_x);
    var temp = [];

    for (var i = 0; i < obj.length; i++) {
        temp.push(obj[i][tag]);
        if (i == obj.length - 1) {
            return temp.filter(onlyUnique);
        }
    }


}



function fetch_data(param_x, param_x_sub, param_y) {
    console.log(param_x_sub);
    var tag = to_tag(param_x);
    var temp = {};

    for (var i = 0; i < obj.length; i++) {
        for (var j = 0; j < param_x_sub.length; j++) {
            if (obj[i][tag] == param_x_sub[j]) {
                if (temp[param_x_sub[j]] == undefined) {
                    temp[param_x_sub[j]] = [];
                    temp[param_x_sub[j]].push(obj[i]);
                } else {
                    temp[param_x_sub[j]].push(obj[i]);
                }
            }
        }
        if (i == obj.length - 1) {
            var dataDummy2 = cal_count(temp, param_y);

        }

    }


    return dataDummy2;
}


function cal_count(temp, param_y) {
    var a = [];
    var keys = Object.keys(temp);
    a.push(keys);

    switch (param_y) {
        case "volume":
            {
                var values = ticket_volume(temp);

            }
            break;
        case "escalated volume":
            {
                var values = escalated_ticket_volume(temp);

            }
            break;
        case "mttr":
            {
                var values = mttr(temp);

            }
            break;

        case "ageing of solved and closed":
            {
                var values = AASC(temp);

            }
            break;

        case "ageing of open and pending":
            {
                var values = AAOP(temp);

            }
            break;

    }
    a.push(values);
    console.log("This is the ultimate result");
    console.log(a);
    //displaycustomCharts(a);
    //  drawCustomChart('custom_charter_nee',charttypeselected,a);
    return a;

}
/*
   {
   open:[{},{},{}],closed:[{},{},{}]
 }
   */



function fetch_data_stacked(param_x, param_x_sub, param_z, param_z_sub, param_y) {
    var tag = to_tag(param_x);
    var innertag = to_tag(param_z);
    var temp = {};

    var temp_ref = {};
    for (var l = 0; l < param_x_sub.length; l++) {
        temp_ref[param_x_sub[l]] = [];
        if (l == param_x_sub.length - 1) {
            for (var i = 0; i < obj.length; i++) {
                for (var j = 0; j < param_x_sub.length; j++) {
                    if (obj[i][tag] == param_x_sub[j]) {
                        for (var k = 0; k < param_z_sub.length; k++) {
                            if (obj[i][innertag] == param_z_sub[k]) {
                                if (temp[param_z_sub[k]] == undefined) {
                                    temp[param_z_sub[k]] = JSON.parse(JSON.stringify(temp_ref));



                                    // if(temp[param_z_sub[k]][param_x_sub[j]]==undefined)
                                    //           {temp[param_z_sub[k]][param_x_sub[j]]=[];
                                    //         temp[param_z_sub[k]][param_x_sub[j]].push(obj[i]);}
                                    // else {
                                    temp[param_z_sub[k]][param_x_sub[j]].push(obj[i]);
                                    // }
                                } else {
                                    if (temp[param_z_sub[k]][param_x_sub[j]] == undefined) {
                                        temp[param_z_sub[k]][param_x_sub[j]] = [];
                                        temp[param_z_sub[k]][param_x_sub[j]].push(obj[i]);
                                    } else {
                                        temp[param_z_sub[k]][param_x_sub[j]].push(obj[i]);
                                    }
                                }
                            }
                        }


                    }


                }

                if (i == obj.length - 1) {
                    var dataDummy2 = cal_count_stacked(temp, param_y);

                }
            }







        }
    }
    return dataDummy2;
}


function cal_count_stacked(temp, param_y) {
    var a = [];
    var zkeys = Object.keys(temp);
    a.push(zkeys);
    var xkeys = Object.keys(temp[zkeys[0]]);
    a.push(xkeys);

    var values = [];

    for (var i = 0; i < zkeys.length; i++) {
        switch (param_y) {
            case "volume":
                {
                    values.push(ticket_volume(Object.values(temp)[i]));

                }
                break;
            case "escalated volume":
                {
                    values.push(escalated_ticket_volume(Object.values(temp)[i]));

                }
                break;
            case "mttr":
                {
                    values.push(mttr(Object.values(temp)[i]));
                }
                break;

            case "ageing of solved and closed":
                {
                    values.push(AASC(Object.values(temp)[i]));
                }
                break;

            case "ageing of open and pending":
                {
                    values.push(AAOP(Object.values(temp)[i]));
                }
                break;

        }

        if (i == zkeys.length - 1) {
            a.push(values);
            console.log(a);
            //  drawStackedChart('custom_charter_nee',charttypeselected,a);
            return a;
        }

    }



}
/*
  {
  open:[{},{},{}],closed:[{},{},{}]
}
  */
function ticket_volume(data_json) {
    var values = Object.values(data_json);
    var result_arr = [];
    for (var i = 0; i < values.length; i++) {
        result_arr[i] = values[i].length;
        if (i == values.length - 1) {
            return result_arr;
        }
    }

}


function escalated_ticket_volume(data_json) {
    var values = Object.values(data_json);
    var result_arr = [];
    for (var i = 0; i < values.length; i++) {
        var count = 0;

        for (var j = 0; j < values[i].length; j++) {
            if (values[i][j]["Tags"].indexOf("l2_escalated") !== -1) {
                count++;
            }
        }
        result_arr[i] = count;
        if (i == values.length - 1) {
            return result_arr;
        }
    }

}




function mttr(data_json) {
    return common_code(data_json, "mttr");
}





function AASC(data_json) {
    return common_code(data_json, "aasc");

}



function AAOP(data_json) {
    return common_code(data_json, "aaop");

}


function common_code(data_json, tag_name) {
    var values = Object.values(data_json);
    var result_arr = [];
    for (var i = 0; i < values.length; i++) {
        var s = 0,
            c = 0;
        for (var j = 0; j < values[i].length; j++) {
            if (values[i][j][tag_name] != "-") {
                c++;
                s += parseFloat(values[i][j][tag_name]);
            }
            if (j == values[i].length - 1) {
                if (c == 0) {
                    result_arr[i] = 0;
                } else {
                    result_arr[i] = parseFloat(parseFloat(s / c).toFixed(2));
                }
            }
        }


        if (i == values.length - 1) {
            return result_arr;
        }
    }

}
