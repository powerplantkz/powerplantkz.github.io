document.onclick = function (e) {
    var id = e.target.nodeName.id;
    console.log("pressed " + id);
};
