function currentDate() {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };
    var date = document.getElementById("currentDate").innerHTML = new Date().toLocaleString("ru", options);
}
currentDate();






