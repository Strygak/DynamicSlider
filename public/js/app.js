var socket = io("http://localhost:3000"); 

function createColor() {
    var r = Math.floor(Math.random() * 257);
    var g = Math.floor(Math.random() * 257);
    var b = Math.floor(Math.random() * 257);
    return "rgb" + "(" + ( r + "," + g + "," + b + ")" );
}

function getRandom() {
    var width = $(window).width() - 200;
    socket.emit("getRandom", { number: width });
}

setInterval( function() { getRandom() }, 2000);

socket.on("send", function(data) {
    $("div.slider").css("background-color", createColor()).animate({
        left: data.num
    });
});
