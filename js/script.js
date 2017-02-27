$(window).resize(function(){
    var text = $(".row a"),
        currentWidth = parseInt(text.css("width")),
        newWidth = 28;

    if(currentWidth==700) newWidth = 28;
    else if (currentWidth<700 && currentWidth>=600) newWidth = 25;
    else if (currentWidth<600 && currentWidth>=500) newWidth = 21;
    else if (currentWidth<500 && currentWidth>=300) newWidth = 16;

    text.css("font-size",newWidth+"px");
});
