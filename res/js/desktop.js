let activeWindows = {};

class window_obj {
    title;
    icon;
    id;
    index;
    type;
    position = { x: 0, y: 0, w: 0, h: 0 };
    constructor(parameters) {
        this.title = parameters.title;
        this.icon = parameters.icon;
        this.type = parameters.type;
        this.id = Math.random().toString(36).substring(7);
        this.index = Object.keys(activeWindows).length;
        activeWindows[this.id] = this;
        spawnProgram(this.id, this.type);
        updateDockShortcuts();
    }
    destroy() {
        delete activeWindows[this.id];
        document.getElementById(this.id).remove();
        updateDockShortcuts();
        Object.values(activeWindows).forEach(e => {
            if (e.index > this.index) {
                e.index--;
            }
        });
        updateWindowHeights();
    }
    toggleMaximize() {
        let window_element = document.getElementById(this.id);
        if (window_element.classList.contains("window-windowed")) {
            window_element.classList.remove("window-windowed");
            window_element.classList.add("window-maximized");
            window_element.style.width = "100%";
            window_element.style.height = "100%";
            window_element.style.top = "0px";
            window_element.style.left = "0px";
        } else {
            window_element.classList.remove("window-maximized");
            window_element.classList.add("window-windowed");
            window_element.style.width = this.position.w + "px";
            window_element.style.height = this.position.h + "px";
            window_element.style.top = this.position.y + "px";
            window_element.style.left = this.position.x + "px";
        }
    }
    minimize() {
        let window_element = document.getElementById(this.id);
        window_element.style.transition = "transform 0.25s";
        window_element.style.transform = "translateY(100%) scale(0.5)";
        window.setTimeout(() => {
            window_element.style.transition = "none";
            window_element.style.display = "none";
        }, 250);
    }
    restore() {
        let window_element = document.getElementById(this.id);
        window_element.style.display = "grid";
        window_element.style.transition = "transform 0.25s";
        window_element.style.transform = "translateY(0%) scale(1)";
        window.setTimeout(() => { window_element.style.transition = "none"; }, 250);
    }
}

window.setTimeout(() => { new window_obj({ title: "WebBrowser", icon: "/res/modules/yaru/icons/Yaru/256x256/apps/web-browser.png", type: "web" }); }, 1000);
window.setTimeout(() => { new window_obj({ title: "Terminal", icon: "/res/modules/yaru/icons/Yaru/256x256/apps/utilities-terminal.png", type: "terminal" }); }, 2000);
window.setTimeout(() => { new window_obj({ title: "Settings", icon: "/res/modules/yaru/icons/Yaru/256x256/apps/preferences-system.png", type: "settings" }); }, 3000);

function updateWindowHeights() {
    Object.values(activeWindows).forEach(e => {
        document.getElementById(e.id).style.zIndex = 100 + e.index * 10;
    });
}

function moveWindowUp(window_id) {
    let window = activeWindows[window_id];
    let maxIndex = Object.keys(activeWindows).length - 1;
    Object.values(activeWindows).forEach(e => {
        if (e.index > window.index) {
            e.index--;
        }
    });
    window.index = maxIndex;
    updateWindowHeights();
    window.restore();
}

// 
// Window movement
//
let activeWindow = null;
let activeWindowStart = { x: 0, y: 0 };
let activeWindowElementStart = { x: 0, y: 0 };
function moveWindowStart(e) {
    activeWindowElement = e.target;
    while (!activeWindowElement.classList.contains("window")) {
        activeWindowElement = activeWindowElement.parentElement;
    }
    activeWindow = activeWindowElement.id;
    activeWindowStart = { x: e.clientX, y: e.clientY };
    activeWindowElementStart = { x: activeWindowElement.offsetLeft, y: activeWindowElement.offsetTop };
    moveWindowUp(activeWindow);
    // Disable all iframe mouse events (prevent mouse events from being sent to the iframe and not being sent to the window)
    Object.values(activeWindows).forEach(e => {
        document.getElementById(e.id).querySelector("iframe").style.pointerEvents = "none";
    });
}
function moveWindowEnd(e) {
    activeWindow = null;
    Object.values(activeWindows).forEach(e => {
        document.getElementById(e.id).querySelector("iframe").style.pointerEvents = "auto";
    });
}
window.addEventListener("mousemove", (e) => {
    if (activeWindow) {
        let window_element = document.getElementById(activeWindow);
        let xOffset = e.clientX - activeWindowStart.x;
        let yOffset = e.clientY - activeWindowStart.y;
        activeWindows[activeWindow].position.x = activeWindowElementStart.x + xOffset;
        activeWindows[activeWindow].position.y = activeWindowElementStart.y + yOffset;
        window_element.style.left = activeWindows[activeWindow].position.x + "px";
        window_element.style.top = activeWindows[activeWindow].position.y + "px";
    }
});