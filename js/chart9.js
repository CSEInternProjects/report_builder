function DisplayNinthChart() {
    var Ageing = [];

    var Ageing5 = 0;

    var NinthChartData = [];
    var averageNinthChartData = 1;
    var date1, date2, timeDiff, diffDays;
    for (i = 0; i < obj.length; i++) {

        tags = obj[i].Tags;

        if (tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if (obj[i].Status == "Open" || obj[i].Status == "Pending") {
                if (obj[i].Tags.indexOf("critical") != -1) {
                    if (NinthChartData[0] == undefined) {
                        NinthChartData[0] = 1;
                        Ageing[1] = 0
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[1] = parseFloat(Ageing[1] + diffDays);
                    } else {
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[1] = parseFloat(Ageing[1] + diffDays);
                        NinthChartData[0]++;
                    }
                } else if (obj[i].Tags.indexOf("high") != -1) {
                    if (NinthChartData[1] == undefined) {
                        NinthChartData[1] = 1;
                        Ageing[2] = 0
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[2] = parseFloat(Ageing[2] + diffDays);
                    } else {
                        NinthChartData[1]++;
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[2] = parseFloat(Ageing[2] + diffDays);
                    }
                } else if (obj[i].Tags.indexOf("medium") != -1) {
                    if (NinthChartData[2] == undefined) {
                        NinthChartData[2] = 1;
                        Ageing[3] = 0
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[3] = parseFloat(Ageing[3] + diffDays);
                    } else {
                        NinthChartData[2]++;
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[3] = parseFloat(Ageing[3] + diffDays);
                    }
                } else {
                    if (NinthChartData[3] == undefined) {
                        NinthChartData[3] = 1;
                        Ageing[4] = 0
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[4] = parseFloat(Ageing[4] + diffDays);
                    } else {
                        NinthChartData[3]++;
                        date1 = new Date();
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[4] = parseFloat(Ageing[4] + diffDays);
                    }
                }

                if (averageNinthChartData == undefined) {
                    averageNinthChartData = 1;
                    date1a = new Date();
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    Ageing5 = parseFloat(Ageing5 + diffDaysa);
                } else {
                    averageNinthChartData++;
                    date1a = new Date();
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    Ageing5 = parseFloat(Ageing5 + diffDaysa);
                }

            }

        }
    }
    var flage = false;
    if (NinthChartData.length !== 0) {
        flage = true;
    }

    for (i = 0; i < 4; i++)
        if (!isNaN(NinthChartData[i])) {
            j = i + 1;
            NinthChartData[i] = parseFloat(Ageing[j] / NinthChartData[i]).toFixed(2);
        }
    else {
        NinthChartData[i] = 0;
    }
    //
    // NinthChartData[1] = parseFloat(Ageing[2] / NinthChartData[1]).toFixed(2);
    // NinthChartData[2] = parseFloat(Ageing[3] / NinthChartData[2]).toFixed(2);
    // NinthChartData[3] = parseFloat(Ageing[4] / NinthChartData[3]).toFixed(2);

    averageNinthChartData = parseFloat(Ageing5 / averageNinthChartData).toFixed(2);

    var data = {
        labels: ["Critical", "High", "Medium", "Low"],
        datasets: []
    }

    data.datasets.push(dataset_json('Age', NinthChartData, colors[6]));



    drawstackedbarchart('line', 'ageing_of_open_vs_severity', data, options_json('Ageing of Solved and Closed Tickets vs Severity'), flage, true);

    document.getElementById('ageing_of_open_vs_severity' + "avg").innerText += 'Average is = ' + averageNinthChartData + ' Days';
}
