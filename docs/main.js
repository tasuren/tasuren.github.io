/// tcw - JavaScript


/// クッキーからテーマを取り出すだけの関数です。
let getTheme = function () {
    return document.cookie.split("=")[1];
};


/// テーマを設定する関数です。
let toggleDarkmode = function (writeCookie=true) {
    let theme = document.documentElement.getAttribute("theme");
    if (theme == "dark") {
        theme = "light";
    } else {
        theme = "dark";
    };
    document.documentElement.setAttribute("theme", theme);
    if (writeCookie) document.cookie = `theme=${theme}`;
};


window.onload = function () {
    // クッキーに保存されているテーマの設定を読み込む。
    let theme = getTheme();
    if (typeof theme != "undefined"
            && theme != document.documentElement.getAttribute("theme"))
        // テーマを設定する。
        toggleDarkmode(false);
    // 全てのアンカーの属性にtarget="_blank"を付ける。
    for (let element of document.getElementsByTagName("a"))
        if (element.getAttribute("href").startsWith("http"))
            element.setAttribute("target", "_blank");
};