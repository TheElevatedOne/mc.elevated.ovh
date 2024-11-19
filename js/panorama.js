function rPano() {
    const panoramas = [
        "./panoramas/01.jpg",
        "./panoramas/02.jpg",
        "./panoramas/03.jpg"
    ];

    let random = Math.floor(Math.random() * panoramas.length);

    document.getElementById("panorama").src = panoramas[random];
}

setTimeout(rPano, 2000)