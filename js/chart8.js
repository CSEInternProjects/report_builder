function DisplayEighthChart() {
    var Ageing = [];

    var Ageing5 = 0;
    var EighthChartData = [];
    var averageEighthChartData = 1;
    var date1, date2, timeDiff, diffDays;
    for (i = 0; i < obj.length; i++) {

        tags = obj[i].Tags;

        if (tags.indexOf("platform__feature_request") == -1 && obj[i].Change_Request_ !== "yes") {
            if (obj[i].Status == "Closed" || obj[i].Status == "Solved") {
                if (obj[i].Tags.indexOf("critical") != -1) {
                    if (EighthChartData[0] == undefined) {
                        EighthChartData[0] = 1;
                        Ageing[1] = 0;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[1] = parseFloat(Ageing[1] + diffDays);
                    } else {
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[1] = parseFloat(Ageing[1] + diffDays);
                        EighthChartData[0]++;
                    }
                } else if (obj[i].Tags.indexOf("high") != -1) {
                    if (EighthChartData[1] == undefined) {
                        EighthChartData[1] = 1;
                        Ageing[2] = 0;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[2] = parseFloat(Ageing[2] + diffDays);
                    } else {
                        EighthChartData[1]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[2] = parseFloat(Ageing[2] + diffDays);
                    }
                } else if (obj[i].Tags.indexOf("medium") != -1) {
                    if (EighthChartData[2] == undefined) {
                        EighthChartData[2] = 1;
                        Ageing[3] = 0;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[3] = parseFloat(Ageing[3] + diffDays);
                    } else {
                        EighthChartData[2]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[3] = parseFloat(Ageing[3] + diffDays);
                    }
                } else {
                    if (EighthChartData[3] == undefined) {
                        EighthChartData[3] = 1;
                        Ageing[4] = 0;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[4] = parseFloat(Ageing[4] + diffDays);
                    } else {
                        EighthChartData[3]++;
                        date1 = new Date(obj[i].Solved_at);
                        date2 = new Date(obj[i].Created_at);
                        timeDiff = Math.abs(date2.getTime() - date1.getTime());
                        diffDays = parseFloat(timeDiff / (1000 * 3600 * 24));
                        Ageing[4] = parseFloat(Ageing[4] + diffDays);
                    }
                }

                if (averageEighthChartData == undefined) {
                    averageEighthChartData = 1;
                    date1a = new Date(obj[i].Solved_at);
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    Ageing5 = parseFloat(Ageing5 + diffDaysa);
                } else {
                    averageEighthChartData++;
                    date1a = new Date(obj[i].Solved_at);
                    date2a = new Date(obj[i].Created_at);
                    timeDiffa = Math.abs(date2a.getTime() - date1a.getTime());
                    diffDaysa = parseFloat(timeDiffa / (1000 * 3600 * 24));
                    Ageing5 = parseFloat(Ageing5 + diffDaysa);
                }

            }

        }
    }
    var flage = false;
    if (EighthChartData.length !== 0) {
        flage = true;
    }

    for (i = 0; i < 4; i++)
        if (!isNaN(EighthChartData[i])) {
            j = i + 1;
            EighthChartData[i] = parseFloat(Ageing[j] / EighthChartData[i]).toFixed(2);
        }
    else {
        EighthChartData[i] = 0;
    }

    // EighthChartData[0] = parseFloat(Ageing[1] / EighthChartData[0]).toFixed(2);
    // EighthChartData[1] = parseFloat(Ageing[2] / EighthChartData[1]).toFixed(2);
    // EighthChartData[2] = parseFloat(Ageing[3] / EighthChartData[2]).toFixed(2);
    // EighthChartData[3] = parseFloat(Ageing[4] / EighthChartData[3]).toFixed(2);
    averageEighthChartData = parseFloat(Ageing5 / averageEighthChartData).toFixed(2);

    var data = {
        labels: ["Critical", "High", "Medium", "Low"],
        datasets: []
    }

    data.datasets.push(dataset_json('Age', EighthChartData, colors[6]));



    drawstackedbarchart('line', 'Ageing_of_Closed_vs_severity', data, options_json('Ageing of Solved and Closed Tickets vs Severity'), flage, true);

    document.getElementById("Ageing_of_Closed_vs_severity" + "avg").innerText += 'Average is = ' + averageEighthChartData + ' Days';
}
