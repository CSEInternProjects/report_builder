function DisplaySeventeenthChart() {
    var resolutionTargetTotalPosP = 0;
    var resolutionTargetTotalcountP = 0;
    var resolutionTargetTotalcountSt = 0;
    var SeventeenthChartData = [];
    for (i = 0; i < obj.length; i++) {
        tags = obj[i].Tags;

        if (tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if (obj[i].Status == "Closed") {
                if ((obj[i].Requester_wait_time_in_minutes <= 1440 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].Requester_wait_time_in_minutes <= 10080 && obj[i].Tags.indexOf("high") != -1) || (obj[i].Requester_wait_time_in_minutes <= 30240 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].Requester_wait_time_in_minutes <= 30240 && obj[i].Tags.indexOf("low") != -1) || obj[i].Requester_wait_time_in_minutes <= 30240 && obj[i].Severity_ == '-') {
                    resolutionTargetTotalPosP++;
                    resolutionTargetTotalcountP++;
                } else if ((obj[i].Requester_wait_time_in_minutes > 1440 && obj[i].Tags.indexOf("critical") != -1) || (obj[i].Requester_wait_time_in_minutes > 10080 && obj[i].Tags.indexOf("high") != -1) || (obj[i].Requester_wait_time_in_minutes > 30240 && obj[i].Tags.indexOf("medium") != -1) || (obj[i].Requester_wait_time_in_minutes > 30240 && obj[i].Tags.indexOf("low") != -1) || obj[i].Requester_wait_time_in_minutes > 30240 && obj[i].Severity_ == '-') {
                    resolutionTargetTotalcountP++;
                }
            }

        }
    }
    var a = [];
    var b = [];

    a.push(((resolutionTargetTotalPosP / resolutionTargetTotalcountP) * 100).toFixed(2));
    // a.push(1);
    b.push((((resolutionTargetTotalcountP - resolutionTargetTotalPosP) / resolutionTargetTotalcountP) * 100).toFixed(2));
    // b.push(1);

    var data = {
        labels: ["Resolution Target"],
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

    drawstackedbarchart('bar', 'resolution_target', data, options_json('Resolution Target'), flage, true);



}
