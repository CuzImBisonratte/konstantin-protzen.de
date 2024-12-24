let locked = true;
var lockscreen = document.getElementById("lockscreen");

// Functions controlling the lockscreen state

function lockscreen_unlock() {
    if (locked) return;
    locked = true;
    lockscreen.classList.remove("unlock");
}

function lockscreen_unlock() {
    if (!locked) return;
    locked = false;
    lockscreen.classList.add("unlock");
}

document.addEventListener("keydown", function (event) {
    if (event.key == " ") lockscreen_unlock();
});

// Lockscreen swipe
var downY = 0, currentY = 0, down = false, distUp = 0;
document.addEventListener("mousedown", function (event) {
    downY = event.clientY;
    down = true;
});
document.addEventListener("mousemove", function (event) {
    if (!down) return;
    currentY = event.clientY;
    distUp = downY - currentY;
    if (distUp < 0) return;
    lockscreen.style.transform = "translateY(-" + (distUp) + "px)";
    console.log(currentY - downY);
});
document.addEventListener("mouseup", function (event) {
    down = false;
    downY = 0;
    currentY = 0;
    if (distUp < window.innerHeight / 2) {
        lockscreen.style.transform = "translateY(0)";
    } else {
        lockscreen.style.transform = "translateY(-100%)";
        window.setTimeout(function () {
            lockscreen.style.display = "none";
            lockscreen_unlock();
        }, 1000);
    }
});

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