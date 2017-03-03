function getNumberCurrentDayInYear() {
    var currentData = new Date();
    var beginYear = new Date(currentData.getFullYear(), 0, 0);
    var diff = currentData - beginYear;
    var oneDay = 1000 * 60 * 60 * 24;
    var numberDayInYear = Math.floor(diff / oneDay);
    return numberDayInYear
}
function getConditions() {
    for (var i = 1; i < getNumberCurrentDayInYear(); i++) {
        //console.log("day " + i + " " + conditionCrew + " " + crewConditionString[conditionCrew - 1]);
        if (i == 1) {
            if (conditionCrew === 1) {
                conditionCrew++;
                continue
            }
            if (conditionCrew === 2) {
                conditionCrew++;
                continue
            }
            if (conditionCrew === 3) {
                conditionCrew++;
                continue
            }
            if (conditionCrew === 4) {
                conditionCrew = 1;
                continue
            }
            continue;
        }
        if (conditionCrew === 1) {
            conditionCrew++;
            continue
        }
        if (conditionCrew === 2) {
            conditionCrew++;
            continue
        }
        if (conditionCrew === 3) {
            conditionCrew++;
            continue
        }
        if (conditionCrew === 4) conditionCrew = 1;
    }
    return conditionCrew;
}

var scheduleOnEndYear = [3, 2, 1, 4];
var crewNameString = ["А", "Б", "В", "Г"];
var crewConditionString = ["день", "ночь", "отсыпной", "выходной"];
var crewsCondition = [];

for (var crew = 0; crew < 4; crew++) {
    var conditionCrew = scheduleOnEndYear[crew];
    crewsCondition[crew] = getConditions();
}
console.log(crewsCondition);

var dayNight = new Date().getHours();
if (dayNight < 8 || dayNight > 20) dayNight = "ночь";
if (dayNight > 8 || dayNight < 20) dayNight = "день";
document.getElementById("currentDate").innerHTML = "Сегодня " + new Date().toLocaleDateString() + " в " + dayNight + " смена ";
