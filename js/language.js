function cookieExpire() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*604800;
    now.setTime(expireTime);
    return now.toUTCString();
}

function chLang(x) {
    if (x != null) {
        var element = document.getElementById(`flag_${x.id}`);
        var e_style = window.getComputedStyle(element);
        document.getElementById("flag").style.background = `url('${e_style.getPropertyValue("background").slice(6).split(")")[0].slice(0, -1)}') center / calc(6vh * 0.73) no-repeat`;
        document.getElementById("lang").checked = false;
        // console.log(`url('${e_style.getPropertyValue("background").slice(6).split(")")[0].slice(0, -1)}') center / calc(6vh * 0.73) no-repeat`);
        document.cookie = `language=${x.id}; expires=${cookieExpire()}`;
    } else if (document.cookie != "") {
        var x = document.cookie.split("; ")[0].split("=")[1];
        var element = document.getElementById(`flag_${x}`);
        var e_style = window.getComputedStyle(element);
        document.getElementById("flag").style.background = `url('${e_style.getPropertyValue("background").slice(6).split(")")[0].slice(0, -1)}') center / calc(6vh * 0.73) no-repeat`;
        document.getElementById("lang").checked = false;
    }
}