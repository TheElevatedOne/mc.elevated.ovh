const local = {
    "eng": {
        "button_01": "Server Info",
        "button_02": "Dynamic Map",
        "button_03": "Mods",
        "title_01": "Server Info",
        "title_02": "Dynamic Map",
        "sub_01": "Players:",
        "sub_02": "Version:",
        "sub_03": "Player List (Sample)",
        "sub_04": "Reload",
        "sub_05": "Fullscreen",
        "sub_06": "Back",
        "sub_07": "Back"
    },
    "sk": {
        "button_01": "Info o Serveri",
        "button_02": "Dynamická Mapa",
        "button_01": "Info o Serveri",
        "title_01": "Info o Serveri",
        "title_02": "Dynamická Mapa",
        "sub_01": "Hráči:",
        "sub_02": "Verzia:",
        "sub_03": "Zoznam Hráčov (Vzorka)",
        "sub_04": "Znovu Načítať",
        "sub_05": "Na Celú Obrazovku",
        "sub_06": "Naspäť",
        "sub_07": "Naspäť"
    },
    "cz": {
        "button_01": "Info o Serveru",
        "button_02": "Dynamická Mapa",
        "button_03": "Módy",
        "title_01": "Info o Serveru",
        "title_02": "Dynamická Mapa",
        "sub_01": "Hráči:",
        "sub_02": "Verze",
        "sub_03": "Seznam Hráčů (Ukázka)",
        "sub_04": "Znovu Načíst",
        "sub_05": "Na Celou Obrazovku",
        "sub_06": "Zpět",
        "sub_07": "Zpět"
    },
    "ussr": {
        "button_01": "Информация о Сервере",
        "button_02": "Динамическая Карта",
        "button_03": "Моды",
        "title_01": "Информация о Сервере",
        "title_02": "Динамическая Карта",
        "sub_01": "Игроки:",
        "sub_02": "Версия:",
        "sub_03": "Список Игроков (Образец)",
        "sub_04": "Перезагрузка",
        "sub_05": "Фуллскренн",
        "sub_06": "Назад",
        "sub_07": "Назад"
    }
}


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
        for (const [key, value] of Object.entries(local[x.id])) {
            document.getElementById(key).innerHTML = value;
        }
        document.getElementById("flag").style.background = `url('${e_style.getPropertyValue("background").slice(6).split(")")[0].slice(0, -1)}') center / calc(6vh * 0.73) no-repeat`;
        document.getElementById("lang").checked = false;
        // console.log(`url('${e_style.getPropertyValue("background").slice(6).split(")")[0].slice(0, -1)}') center / calc(6vh * 0.73) no-repeat`);
        document.cookie = `language=${x.id}; expires=${cookieExpire()}`;
    } else if (document.cookie != "") {
        var x = document.cookie.split("; ")[0].split("=")[1];
        var element = document.getElementById(`flag_${x}`);
        var e_style = window.getComputedStyle(element);
        for (const [key, value] of Object.entries(local[x])) {
            document.getElementById(key).innerHTML = value;
        }
        document.getElementById("flag").style.background = `url('${e_style.getPropertyValue("background").slice(6).split(")")[0].slice(0, -1)}') center / calc(6vh * 0.73) no-repeat`;
        document.getElementById("lang").checked = false;
    }
}