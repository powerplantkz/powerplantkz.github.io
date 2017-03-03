function getNumberCurrentDayInYear() {
    var currentData = new Date();
    var beginYear = new Date(currentData.getFullYear(), 0, 0);
    var diff = currentData - beginYear;
    var oneDay = 1000 * 60 * 60 * 24;
    var numberDayInYear = Math.floor(diff / oneDay);
    return numberDayInYear
}

var scheduleOnEndYear = [3, 2, 1, 4];
var crewName = ["А", "Б", "В", "Г"];

var condition = scheduleOnEndYear[0];

for (var i = 1; i < getNumberCurrentDayInYear() + 1; i++) {
    console.log("day " + i + " " + condition);
    if (i == 1) {
        console.log(condition);
        if (condition === 1) {condition++;continue}
        if (condition === 2) {condition++;continue}
        if (condition === 3) {condition++;continue}
        if (condition === 4) {condition=1;continue}
        continue;
    }
    if (condition === 1) {condition++;continue}
    if (condition === 2) {condition++;continue}
    if (condition === 3) {condition++;continue}
    if (condition === 4) {condition=1;continue}
    //console.log(condition);
}


var dayNight = new Date().getHours();
if (dayNight < 8 || dayNight > 20) dayNight = "ночь";
if (dayNight > 8 || dayNight < 20) dayNight = "день";
document.getElementById("currentDate").innerHTML = "Сегодня " + new Date().toLocaleDateString() + " в " + dayNight + " смена ";
