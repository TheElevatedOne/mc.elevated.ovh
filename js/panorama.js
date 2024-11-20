const panoramas = [
    "panoramas/01.png",
    "panoramas/02.png",
    "panoramas/03.png"
];

function rPano() {
    let random = Math.floor(Math.random() * panoramas.length);
    $("#panorama").attr("src", panoramas[random])
}
