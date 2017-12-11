function DisplaySixteenthChart() {
    var responeseTergetTotalPosP = 0;
    var responeseTergetTotalcountP = 0;
    var responeseTergetTotalPosSt = 0;
    var responeseTergetTotalcountSt = 0;
    var SixteenthChartData = [];

    for (i = 0; i < obj.length; i++) {
        if ((obj[i]['Customer_Support_Plan(Ticket)_'] == "Premier" || obj[i]['Customer_Support_Plan(Ticket)_'] == "Premier-Plus") && obj[i].Status == "Closed") {
            if ((obj[i].First_reply_time_in_minutes <= 30 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes <= 120 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes <= 480 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes <= 1440 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes <= 480 && obj[i].Severity_ == '-') {
                responeseTergetTotalPosSt++;
                responeseTergetTotalcountP++;
            } else if ((obj[i].First_reply_time_in_minutes > 30 && obj[i].obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes > 120 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes > 480 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes > 1440 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes > 480 && obj[i].Severity_ == '-') {
                responeseTergetTotalcountP++;
            }
        } else if ((obj[i]['Customer_Support_Plan(Ticket)_'] == "-" || obj[i]['Customer_Support_Plan(Ticket)_'] == "Standard" || obj[i]['Customer_Support_Plan(Ticket)_'] == "Standard-Plus") && obj[i].Status == "Closed") {
            if ((obj[i].First_reply_time_in_minutes <= 60 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes <= 240 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes <= 1440 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes <= 2880 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes <= 240 && obj[i].Severity_ == '-') {
                responeseTergetTotalPosSt++;
                responeseTergetTotalcountP++;
            } else if ((obj[i].First_reply_time_in_minutes > 60 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].First_reply_time_in_minutes > 240 && obj[i].Tags.indexOf("high") != -1) || (obj[i].First_reply_time_in_minutes > 1440 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].First_reply_time_in_minutes > 2880 && obj[i].Tags.indexOf("low") != -1) || obj[i].First_reply_time_in_minutes > 240 && obj[i].Severity_ == '-') {
                responeseTergetTotalcountP++;
            }
        }
    }


    var a = [];
    var b = [];

    a.push(((responeseTergetTotalPosSt / responeseTergetTotalcountP) * 100).toFixed(2));
    // a.push(1);
    b.push((((responeseTergetTotalcountP - responeseTergetTotalPosSt) / responeseTergetTotalcountP) * 100).toFixed(2));
    // b.push(1);

    var data = {
        labels: ["Response Target"],
        datasets: []
    };

    sendData = ["Target Met", "Target NOT Met"];
    colorFormation(sendData);
    data.datasets.push(dataset_json("Target Met", a, color1[0]));

    data.datasets.push(dataset_json("Target NOT Met", b, color1[1]));
    var flage = true;
    if (a[0] == 0 && b[0] == 0) {
        flage = false;

    }

    drawstackedbarchart('bar', 'response_target', data, options_json('Response Target'), flage);



}
