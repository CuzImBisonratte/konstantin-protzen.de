const desktop = document.getElementById("desktop");

function spawnProgram(windowId, program) {
    let window_element = document.createElement("div");
    window_element.id = windowId;
    window_element.classList.add("window");
    window_element.classList.add("window-windowed");
    window_element.style.width = window.innerWidth / 2 + "px";
    window_element.style.height = window.innerHeight / 2 + "px";
    window_element.style.top = "100px";
    window_element.style.left = "100px";
    window_element.style.zIndex = 100 + activeWindows[windowId].index * 10;
    window_element.innerHTML = `
        <div class="window_head">
            <div class="window_title" id="window_title">
                <div class="window_title-icon">
                    <img src="${activeWindows[windowId].icon}" alt="" srcset="" />
                </div>
                <div class="window_title-name">${activeWindows[windowId].title}</div>
            </div>
            <div class="window_controls">
                <div class="window_controls-minimize">
                    <img src="/res/modules/yaru/icons/Yaru/scalable/ui/window-minimize-symbolic.svg" alt="" srcset="" />
                </div>
                <div class="window_controls-resize">
                    <img src="/res/modules/yaru/icons/Yaru/scalable/ui/window-restore-symbolic.svg" alt="" srcset="" />
                </div>
                <div class="window_controls-close">
                    <img src="/res/modules/yaru/icons/Yaru/scalable/ui/window-close-symbolic.svg" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div class="window_body">
            <iframe src="/programs/${program}/index.html" frameborder="0"></iframe>
        </div>
    `;
    desktop.appendChild(window_element);
}