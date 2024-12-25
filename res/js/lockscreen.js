let locked = true;
var lockscreen = document.getElementById("lockscreen");

// Functions controlling the lockscreen state

function lockscreen_lock() {
    if (locked) return;
    locked = true;
    lockscreen.style.transition = "transform 0.5s";
    lockscreen.style.transform = "translateY(0)";
    window.setTimeout(function () {
        lockscreen.style.transition = "transform 0s";
    }, 500);
}

function lockscreen_unlock() {
    if (!locked) return;
    locked = false;
    lockscreen.style.transition = "transform 0.5s";
    lockscreen.style.transform = "translateY(-100%)";
    window.setTimeout(function () {
        lockscreen.style.transition = "transform 0s";
    }, 500);
}

document.addEventListener("keydown", function (event) {
    if (event.key == " ") lockscreen_unlock();
    if (event.altKey && event.key.toLowerCase() == "l") {
        event.preventDefault();
        lockscreen_lock();
    }
});

// Lockscreen swipe
var downY = 0, currentY = 0, down = false, distUp = 0;
document.addEventListener("mousedown", function (event) {
    if (!locked) return;
    downY = event.clientY;
    down = true;
    lockscreen.style.cursor = "grabbing";
    lockscreen.style.transition = "transform 0s";
});
document.addEventListener("mousemove", function (event) {
    if (!locked) return;
    if (!down) return;
    currentY = event.clientY;
    distUp = downY - currentY;
    if (distUp < 0) distUp = 0;
    lockscreen.style.transform = "translateY(-" + (distUp) + "px)";
});
document.addEventListener("mouseup", function (event) {
    if (!locked) return;
    down = false;
    downY = 0;
    currentY = 0;
    lockscreen.style.cursor = "grab";
    lockscreen.style.transition = "transform 0.5s";
    if (distUp < window.innerHeight / 2) {
        lockscreen.style.transform = "translateY(0)";
    } else {
        lockscreen_unlock();
    }
});
// Touch events for lockscreen swipe
document.addEventListener("touchstart", function (event) {
    if (!locked) return;
    downY = event.touches[0].clientY;
    down = true;
    lockscreen.style.cursor = "grabbing";
    lockscreen.style.transition = "transform 0s";
});
document.addEventListener("touchmove", function (event) {
    if (!locked) return;
    if (!down) return;
    currentY = event.touches[0].clientY;
    distUp = downY - currentY;
    if (distUp < 0) distUp = 0;
    lockscreen.style.transform = "translateY(-" + (distUp) + "px)";
});
document.addEventListener("touchend", function (event) {
    if (!locked) return;
    down = false;
    downY = 0;
    currentY = 0;
    lockscreen.style.cursor = "grab";
    lockscreen.style.transition = "transform 0.5s";
    if (distUp < window.innerHeight / 2) {
        lockscreen.style.transform = "translateY(0)";
    } else {
        lockscreen_unlock();
    }
});

// Check if device is touch capable
if ("ontouchstart" in window) {
    document.getElementById("lockscreen_note").innerHTML = "Zum Entsperren nach oben ziehen";
}

// Time updater

function update_lockTime() {
    var date = new Date();
    // Time
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("lockscreen_time").innerHTML = hours + ":" + minutes;
    // Date
    var dom = date.getDate();
    var month = date.getMonth() + 1;
    var dow = date.getDay();
    var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    document.getElementById("lockscreen_date").innerHTML = days[dow] + ", " + dom + ". " + months[month - 1];
}

setInterval(update_lockTime, 1000);
update_lockTime();

// Check for default unlock
if (new URLSearchParams(window.location.search).get("unlocked") != null) lockscreen_unlock();