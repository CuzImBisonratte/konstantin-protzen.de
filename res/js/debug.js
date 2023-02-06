let debugTyped = "";
let debugTimeout;
let debug;

document.addEventListener("keydown", function(event) {
    debugTyped += event.key.toLowerCase();
    if (debugTyped === "debug") {
        let elements = document.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.border = "1px solid red";
            elements[i].style.boxSizing = "border-box";
            debug = true;
        }
    } else if (debugTyped.length > 5 && event.key.toLowerCase() == "d") {
        debugTyped = "d";
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Escape") {
        let elements = document.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.border = "";
            debug = false;
        }
    }
});

document.addEventListener("keydown", event => { if (event.key.toLowerCase() == "t") debugCycle() });

function debugCycle() {
    if (!debug) return;
    cycleTheme();
    window.setTimeout(debugCycle, 1000);
}