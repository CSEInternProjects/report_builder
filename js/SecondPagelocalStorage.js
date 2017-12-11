function getUserInfoInSecondPage() {
    toDateCurrent();
    client_data = localStorage.getItem('lgndata');
    if (client_data != null) {
        //DisplayAllCharts();

        return client_data;
    } else {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('lgndata');
    window.location.href = "index.html "
}
