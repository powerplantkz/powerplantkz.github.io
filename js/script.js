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
    if (width < 480 || width > 320) var text = document.getElementsByTagName("a");
}

currentDate();






