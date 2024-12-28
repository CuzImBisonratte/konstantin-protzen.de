const desktop = document.getElementById("desktop");

function spawnProgram(windowId, program) {
    let iframe_url = `/programs/${program}/index.html`;
    let window_element = document.createElement("div");
    window_element.id = windowId;
    window_element.classList.add("window");
    window_element.classList.add("window-windowed");
    window_element.style.zIndex = 100 + activeWindows[windowId].index * 10;
    activeWindows[windowId].position = {
        x: 100,
        y: 100,
        w: window.innerWidth / 2,
        h: window.innerHeight / 2
    };
    window_element.style.width = activeWindows[windowId].position.w + "px";
    window_element.style.height = activeWindows[windowId].position.h + "px";
    window_element.style.top = activeWindows[windowId].position.y + "px";
    window_element.style.left = activeWindows[windowId].position.x + "px";
    window_element.innerHTML = `
        <div class="window_head">
            <div class="window_title" id="window_title">
                <div class="window_title-icon">
                    <img src="${activeWindows[windowId].icon}" alt="" srcset="" />
                </div>
                <div class="window_title-name">${activeWindows[windowId].title}</div>
            </div>
            <div class="window_controls">
                <div class="window_controls-minimize" onclick="activeWindows['${windowId}'].minimize()">
                    <img src="/res/modules/yaru/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="" srcset="" />
                </div>
                <div class="window_controls-resize" onclick="activeWindows['${windowId}'].toggleMaximize()">
                    <img src="/res/modules/yaru/icons/Yaru/scalable/ui/window-restore-symbolic.svg" alt="" srcset="" />
                </div>
                <div class="window_controls-close" onclick="activeWindows['${windowId}'].destroy()">
                    <img src="/res/modules/yaru/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div class="window_body">
            <iframe class="window_body_iframe" src="${iframe_url}" frameborder="0"></iframe>
        </div>
    `;
    window_element.addEventListener("mousedown", moveWindowStart);
    window_element.addEventListener("mouseup", moveWindowEnd);
    window_element.addEventListener("touchstart", moveWindowStart);
    window_element.addEventListener("touchend", moveWindowEnd);
    desktop.prepend(window_element);
    highestWindow = windowId;
}