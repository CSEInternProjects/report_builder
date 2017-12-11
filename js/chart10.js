function DisplayTenthChart() {
    var TenthChartData = [];
    var mttr1 = 0;
    var mttr2 = 0;
    var mttr3 = 0;
    var mttr4 = 0;
    var mttr5 = 0;
    var labels = [];
    averageTenthChartData = 1;
    var date2, date1, diffDays, timeDiff;
    for (i = 0; i < obj.length; i++) {


        tags = obj[i].Tags;

        if (tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if ((obj[i].Assignee == "Kony Product Support" || obj[i].Assignee == "Kony BDE Product Support") && obj[i].Status == "Closed") {
                if (obj[i].Tags.indexOf("critical") != -1) {
                    if (TenthChartData[0] == undefined) {
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr1 = parseFloat(mttr1 + diffDays);
                        TenthChartData[0] = 1;
                        lables[0] = 'Critical';
                    } else {
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr1 = parseFloat(mttr1 + diffDays);
                        TenthChartData[0]++;
                    }

                } else if (obj[i].Tags.indexOf("high") != -1) {
                    if (TenthChartData[1] == undefined) {
                        TenthChartData[1] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr2 = parseFloat(mttr2 + diffDays);
                        labels[1] = 'High';
                    } else {
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr2 = parseFloat(mttr2 + diffDays);
                        TenthChartData[1]++;
                    }
                } else if (obj[i].Tags.indexOf("medium") != -1) {
                    if (TenthChartData[2] == undefined) {
                        TenthChartData[2] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr3 = parseFloat(mttr3 + diffDays);
                        labels[2] = 'Medium';
                    } else {
                        TenthChartData[2]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr3 = parseFloat(mttr3 + diffDays);
                    }
                } else {
                    if (TenthChartData[3] == undefined) {
                        TenthChartData[3] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr4 = parseFloat(mttr4 + diffDays);
                        labels[3] = 'Low';
                    } else {
                        TenthChartData[3]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr4 = parseFloat(mttr4 + diffDays);
                    }
                }
                if (averageTenthChartData == undefined) {
                    averageTenthChartData = 1;
                    date1a = new Date(obj[i].Solved_at);
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    mttr5 = parseFloat(mttr5 + diffDaysa);
                } else {
                    averageTenthChartData++;
                    date1a = new Date(obj[i].Solved_at);
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    mttr5 = parseFloat(mttr5 + diffDaysa);
                }
            }
        }
    }
    var flage = false;
    if (TenthChartData.length !== 0) {
        flage = true;
    }
    TenthChartData[0] = parseFloat(mttr1 / TenthChartData[0]).toFixed(2);
    TenthChartData[1] = parseFloat(mttr2 / TenthChartData[1]).toFixed(2);
    TenthChartData[2] = parseFloat(mttr3 / TenthChartData[2]).toFixed(2);
    TenthChartData[3] = parseFloat(mttr4 / TenthChartData[3]).toFixed(2);
    averageTenthChartData = parseFloat(mttr5 / averageTenthChartData).toFixed(2);
    labels = Object.values(labels);
    console.log(labels);
    data = {
        labels: ["Critical", "High", "Medium", "Low"],
        datasets: []
    }

    data.datasets.push(dataset_json('MTTR', TenthChartData, colors[5]));
    drawstackedbarchart('bar', 'mttrofl2_vs_severity', data, options_json('MTTR of L2 vs Severity'), flage, true);

    document.getElementById('mttrofl2_vs_severity' + "avg").innerText += 'Average is = ' + averageTenthChartData + ' Days';
}
