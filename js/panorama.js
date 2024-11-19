const panoramas = [
    "panoramas/01.jpg",
    "panoramas/02.jpg",
    "panoramas/03.jpg"
];

function rPano() {
    let random = Math.floor(Math.random() * panoramas.length);
    $("#panorama").attr("src", panoramas[random])
}