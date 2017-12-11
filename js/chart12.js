function DisplayTwelfthChart() {
    var mttr1 = 0;
    var mttr2 = 0;
    var mttr3 = 0;
    var mttr4 = 0;
    var mttr5 = 0;
    var TwelfthChartData = [];
    var averageTwelfthChartData = 1;
    var date2, date1, diffDays, timeDiff;
    for (i = 0; i < obj.length; i++) {
        tags = obj[i].Tags;

        if (tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if (obj[i].Status == "Closed") {
                if (obj[i].Tags.indexOf("critical") != -1) {
                    if (TwelfthChartData[0] == undefined) {
                        TwelfthChartData[0] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr1 = parseFloat(mttr1 + diffDays);
                    } else {
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr1 = parseFloat(mttr1 + diffDays);
                        TwelfthChartData[0]++;
                    }

                } else if (obj[i].Tags.indexOf("high") != -1) {
                    if (TwelfthChartData[1] == undefined) {
                        TwelfthChartData[1] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr2 = parseFloat(mttr2 + diffDays);
                    } else {
                        TwelfthChartData[1]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr2 = parseFloat(mttr2 + diffDays);
                    }
                } else if (obj[i].Tags.indexOf("medium") != -1) {
                    if (TwelfthChartData[2] == undefined) {
                        TwelfthChartData[2] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr3 = parseFloat(mttr3 + diffDays);
                    } else {
                        TwelfthChartData[2]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr3 = parseFloat(mttr3 + diffDays);
                    }
                } else {
                    if (TwelfthChartData[3] == undefined) {
                        TwelfthChartData[3] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr4 = parseFloat(mttr4 + diffDays);
                    } else {
                        TwelfthChartData[3]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr4 = parseFloat(mttr4 + diffDays);
                    }
                }
                if (averageTwelfthChartData == undefined) {
                    averageTwelfthChartData = 1;
                    date1a = new Date(obj[i].Solved_at);
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    mttr5 = parseFloat(mttr5 + diffDaysa);
                } else {
                    averageTwelfthChartData++;
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
    if (TwelfthChartData.length !== 0) {
        flage = true;
    }
    TwelfthChartData[0] = parseFloat(mttr1 / TwelfthChartData[0]).toFixed(2);
    TwelfthChartData[1] = parseFloat(mttr2 / TwelfthChartData[1]).toFixed(2);
    TwelfthChartData[2] = parseFloat(mttr3 / TwelfthChartData[2]).toFixed(2);
    TwelfthChartData[3] = parseFloat(mttr4 / TwelfthChartData[3]).toFixed(2);
    averageTwelfthChartData = parseFloat(mttr5 / averageTwelfthChartData).toFixed(2);

    data = {
        labels: ["Critical", "High", "Medium", "Low"],
        datasets: []
    }




    data.datasets.push(dataset_json('MTTR', TwelfthChartData, colors[5]));
    drawstackedbarchart('bar', 'mttr_vs_severity', data, options_json('MTTR of All Tickets vs Severity'), flage, true);

    document.getElementById('mttr_vs_severity' + "avg").innerText += 'Average is = ' + averageTwelfthChartData + ' Days';
}
