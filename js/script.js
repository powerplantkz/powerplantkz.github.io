var dayNight = new Date().getHours();
if (dayNight < 8 || dayNight > 20) dayNight = "ночь";
if (dayNight > 8 || dayNight < 20) dayNight = "день";

document.getElementById("currentDate").innerHTML = "Сегодня " + new Date().toLocaleDateString() + " в " + dayNight + " смена";
