var api = "https://api.minetools.eu/ping/"
var url = 'donutsmp.net'
$.getJSON(api + url, 
    function(data){
        if (data.error) {
            document.getElementById("server-title").innerHTML = "Server Offline";
            return false
        }
        document.getElementById("server-image").src = data.favicon;
        document.getElementById("server-desc").appendChild(data.description.replaceColorCodes());
        document.getElementById("server-title").innerHTML = url;
        document.getElementById("players").innerHTML = `Players: ${data.players.online}/${data.players.max}`;
        document.getElementById("version").innerHTML = `Version: ${data.version.name}`;
        var sample = data.players.sample;
        if (sample.length != 0) {
            document.getElementById("right").style.overflowY = "scroll";
            for (let i = 0; i < sample.length; i++) {
                $.getJSON("https://playerdb.co/api/player/minecraft/" + sample[i].name, function(info){
                    var name = info.data.player.username;
                    var uuid = info.data.player.id;
                    var avatar = info.data.player.avatar;
                    document.getElementById("player-list").innerHTML += `<li>
                    <img src="${avatar}"><span title="${uuid}">${name}</span>
                    </li>`;
                });
            }
        } else {
            document.getElementById("right").style.overflowY = "hidden";
            document.getElementById("player-list").innerHTML = "<li>Private Player List</li>";
        }
    }
);
