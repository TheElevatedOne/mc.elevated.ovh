function serverInfo() {
    var x = document.getElementById("main").style.display;
    if (x == "block") {
        document.getElementById("main").style.display = "none";
        document.getElementById("server").style.display = "block";
    } else {
        document.getElementById("main").style.display = "block";
        document.getElementById("server").style.display = "none";
    }
}

function dynMap() {
    var x = document.getElementById("main").style.display;
    if (x == "block") {
        document.getElementById("main").style.display = "none";
        document.getElementById("dynmap").style.display = "block";
    } else {
        document.getElementById("main").style.display = "block";
        document.getElementById("dynmap").style.display = "none";
    }
}

function mods() {
    var x = document.getElementById("main").style.display;
    if (x == "block") {
        document.getElementById("main").style.display = "none";
        document.getElementById("mods").style.display = "block";
    } else {
        document.getElementById("main").style.display = "block";
        document.getElementById("mods").style.display = "none";
    }
}