function DisplayEleventhChart() {
    var mttr1 = 0;
    var mttr2 = 0;
    var mttr3 = 0;
    var mttr4 = 0;
    var mttr5 = 0;
    var EleventhChartData = [];
    var averageEleventhChartData = 1;
    var date2, date1, diffDays, timeDiff;
    for (i = 0; i < obj.length; i++) {

        tags = obj[i].Tags;

        if (tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if (obj[i].Assignee == "Kony L3 Product Support" && obj[i].Status == "Closed") {
                if (obj[i].Tags.indexOf("critical") != -1) {
                    if (EleventhChartData[0] == undefined) {
                        EleventhChartData[0] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr1 = parseFloat(mttr1 + diffDays);
                    } else {
                        EleventhChartData[0]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr1 = parseFloat(mttr1 + diffDays);
                    }

                } else if (obj[i].Tags.indexOf("high") != -1) {
                    if (EleventhChartData[1] == undefined) {
                        EleventhChartData[1] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr2 = parseFloat(mttr2 + diffDays);
                    } else {
                        EleventhChartData[1]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr2 = parseFloat(mttr2 + diffDays);
                    }
                } else if (obj[i].Tags.indexOf("medium") != -1) {
                    if (EleventhChartData[2] == undefined) {
                        EleventhChartData[2] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr3 = parseFloat(mttr3 + diffDays);
                    } else {
                        EleventhChartData[2]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr3 = parseFloat(mttr3 + diffDays);
                    }
                } else {
                    if (EleventhChartData[3] == undefined) {
                        EleventhChartData[3] = 1;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr4 = parseFloat(mttr4 + diffDays);
                    } else {
                        EleventhChartData[3]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        mttr4 = parseFloat(mttr4 + diffDays);
                    }
                }
                if (averageEleventhChartData == undefined) {
                    averageEleventhChartData = 1;
                    date1a = new Date(obj[i].Solved_at);
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    mttr5 = parseFloat(mttr5 + diffDaysa);
                } else {
                    averageEleventhChartData++;
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
    if (EleventhChartData.length !== 0) {
        flage = true;
    }
    EleventhChartData[0] = parseFloat(mttr1 / EleventhChartData[0]).toFixed(2);
    EleventhChartData[1] = parseFloat(mttr2 / EleventhChartData[1]).toFixed(2);
    EleventhChartData[2] = parseFloat(mttr3 / EleventhChartData[2]).toFixed(2);
    EleventhChartData[3] = parseFloat(mttr4 / EleventhChartData[3]).toFixed(2);
    averageEleventhChartData = parseFloat(mttr5 / averageEleventhChartData).toFixed(2);

    data = {
        labels: ["Critical", "High", "Medium", "Low"],
        datasets: []
    }

    data.datasets.push(dataset_json('MTTR', EleventhChartData, colors[6]));
    drawstackedbarchart('bar', 'mttrofl3_vs_severity', data, options_json('MTTR of L3 vs Severity'), flage, true);

    document.getElementById('mttrofl3_vs_severity' + "avg").innerText += 'Average is = ' + averageEleventhChartData + ' Days';
}
