let activeWindows = {};

class window_obj {
    title;
    icon;
    id;
    index;
    type;
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
        activeWindows.splice(activeWindows.indexOf(this), 1);
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
}

