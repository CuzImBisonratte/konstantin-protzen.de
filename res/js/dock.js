
function update_lockTime() {
    var date = new Date();
    // Time
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("dock-time").innerHTML = hours + ":" + minutes + ":" + seconds;
    // Date
    var dom = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    dom = dom < 10 ? "0" + dom : dom;
    month = month < 10 ? "0" + month : month;
    document.getElementById("dock-date").innerHTML = dom + "." + month + "." + year;
}

setInterval(update_lockTime, 500);
update_lockTime();

function updateDockShortcuts() {
    let shortcuts = "";
    // activeWindows from desktop.js
    for (const [key, e] of Object.entries(activeWindows)) {
        shortcuts += "<div class='dock-shortcut' onclick='focusWindow(\"" + e.id + "\")'><img src='" + e.icon + "' alt='" + e.title + "'></div>";
    };
    document.getElementById("dock-shortcuts").innerHTML = shortcuts;
}