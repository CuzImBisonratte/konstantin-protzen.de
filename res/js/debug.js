let debugTyped = "";
let debugTimeout;
let debug;

function debug_clear() {
    let elements = document.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "";
        debug = false;
    }
}

function debug_start() {
    let elements = document.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "1px solid red";
        elements[i].style.boxSizing = "border-box";
        debug = true;
    }
}

document.addEventListener("keydown", function (event) {
    debugTyped += event.key.toLowerCase();
    if (debugTyped === "debug") {
        debug_start();
    } else if (debugTyped.length > 5 && event.key.toLowerCase() == "d") {
        debugTyped = "d";
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") debug_clear();
});

lastTouchTime = 0;
touches = 0;
lastTouch = [0, 0];
document.addEventListener("touchstart", function (event) {
    if (Date.now() - lastTouchTime > 1000) touches = 0;
    lastTouchTime = Date.now();
    // Check if the touch is near the last touch - within 10px
    if (Math.abs(event.touches[0].clientX - lastTouch[0]) < 25 && Math.abs(event.touches[0].clientY - lastTouch[1]) < 25) {
        touches++;
    } else {
        touches = 0;
    }
    lastTouch = [event.touches[0].clientX, event.touches[0].clientY];
    if (touches >= 5) {
        debug ? debug_clear() : debug_start();
        touches = 0;
    }
});