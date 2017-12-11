var todaysDate, currentYear, currentMonth, currentDay, startingYear, startingMonth, startingDate;

function toDateCurrent() {
    // todaysDate = new Date();
    // currentYear = todaysDate.getFullYear();
    // currentMonth = todaysDate.getMonth() + 1;
    // currentDay = todaysDate.getDate();
    // fulldate = currentYear + "-" + currentMonth + "-" + currentDay;
    // document.getElementById('toDate').value = fulldate;

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

  document.getElementById('toDate').value=[year, month, day].join('-');
}

function dateCompare() {
    startingDate = new Date(document.getElementById('fromDate').value);
    startFrom2017 = new Date("2017-01-01");
    todaysDate = new Date(document.getElementById('toDate').value);
    if (startingDate < startFrom2017) {
        alert("Data will not be available before 01-01-2017");
    } else if (todaysDate < startFrom2017) {
        alert("Data will not be available before 01-01-2017");
    } else if (startingDate > todaysDate) {
        alert("Enter TO DATE greater then FROM DATE");
    } else {
        callingTicketDataBase();
    }
}
