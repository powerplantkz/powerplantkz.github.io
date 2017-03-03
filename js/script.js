var year = [366];

var dayInYear = {
    data: undefined,
    crewWorkInDay: undefined,
    crewWorkInNight: undefined,
    item1: undefined,
    item2: undefined,
    item3: undefined,
    item4: undefined
};

var currentData = new Date();
var beginYear = new Date(currentData.getFullYear(), 0, 0);
var diff = currentData - beginYear;
var oneDay = 1000 * 60 * 60 * 24;
var numberDayInYear = Math.floor(diff / oneDay);

console.log("today " + numberDayInYear + " numberDayInYear in year");


var dayNight = new Date().getHours();
if (dayNight < 8 || dayNight > 20) dayNight = "ночь";
if (dayNight > 8 || dayNight < 20) dayNight = "день";
document.getElementById("currentDate").innerHTML = "Сегодня " + new Date().toLocaleDateString() + " в " + dayNight + " смена ";
