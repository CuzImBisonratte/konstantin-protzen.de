// Config
const config = {
    main_path: 'res/js/themes/',
    standart: "dark",
    standart_dark: "dark",
    standart_light: "light",
    themes: [{
        name: 'dark',
        displayName: 'Dunkel',
        text: '#ffffff',
        text2: '#cccccc',
        background: '#282c36',
        background2: '#080c16',
        background3: '#0f111a',
        accent: '#eb660e',
        accent_rgb: '235, 102, 14',
        accent2: '#f2a900',
        icon: '<i class="fas fa-adjust"></i>'
    },
    {
        name: 'night',
        displayName: 'Nacht',
        text: '#ffffff',
        text2: '#cccccc',
        background: '#1b1b1b',
        background2: '#020409',
        background3: '#0f111a',
        accent: '#0078d7',
        accent_rgb: '0, 120, 215',
        accent2: '#00bcf2',
        icon: '<i class="fa-solid fa-cloud-moon"></i>'
    }, {
        name: 'light',
        displayName: 'Hell',
        text: '#000000',
        text2: '#222222',
        background: '#d2d2d2',
        background2: '#ffffff',
        background3: '#e6e6e6',
        accent: '#eb660e',
        accent_rgb: '235, 102, 14',
        accent2: '#f2a900',
        icon: '<i class="fa-solid fa-sun"></i>'
    }
    ]
};

// Functions

function setTheme(set_to_theme) {
    config.themes.forEach((theme) => {
        if (theme.name == set_to_theme) {
            Object.keys(theme).forEach((key) => {
                if (key != 'name' && key != 'displayName' && key != 'icon') {
                    document.documentElement.style.setProperty('--' + key.replace("_", "-") + '-color', theme[key]);
                }
            });
            window.setTimeout(() => {
                document.getElementById("themeswitch").children[0].innerHTML = theme.icon;
            }, 250);
        }
    });
    let rotation = parseInt((document.getElementById("themeswitch").children[0].style.transform || "rotate(0deg);").replace("rotate(", "").replace("deg);", "").replace("deg)", ""));
    rotation = rotation + 360;
    document.getElementById("themeswitch").children[0].style.transform = "rotate(" + rotation + "deg)";
    localStorage.setItem("theme", set_to_theme);
}

function initTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == null) {
        // Check if system theme is dark
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = config.standart_dark;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            theme = config.standart_light;
        } else {
            theme = config.standart;
        }
    }
    setTheme(theme);
}
initTheme();

function cycleTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == null) {
        theme = config.standart;
    }
    let index = config.themes.findIndex((obj) => obj.name == theme);
    if (index == config.themes.length - 1) {
        index = 0;
    } else {
        index++;
    }
    setTheme(config.themes[index].name);
}