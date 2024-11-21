function rcon() {
    let x = document.getElementById("content");
    let y = document.getElementById("console");
    let z = document.getElementById("info");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function con() {
    let x = document.getElementById("content");
    let y = document.getElementById("console");
    let z = document.getElementById("info");
    if (y.style.display == "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
}