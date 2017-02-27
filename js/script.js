function currentDate() {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };
    var date = document.getElementById("size").innerHTML = new Date().toLocaleString("ru", options);
}

function fontSizeOnDevices() {
    var width = screen.width;
    var numberWidth = document.getElementById("width").innerHTML = width;


}

currentDate();
fontSizeOnDevices();





