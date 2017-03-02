document.getElementById("currentDate").innerHTML = "Сегодня " + new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();
var dayNight = new Date().getHours();
function () {
    if (dayNight > 8 && dayNight < 20) alert("day");
    if (dayNight > 20 && dayNight < 8) alert("night");
}

var A, B, C, D;
