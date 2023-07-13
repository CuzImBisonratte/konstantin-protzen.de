function resize() {
    if (window.innerWidth <= 1000) {
        document.getElementsByTagName("main")[0].style.height = window.innerHeight - 16 + "px";
        document.getElementsByClassName("main-mainview")[0].style.height = window.innerHeight - 100 + "px";
        document.getElementsByClassName("main-slides")[0].style.height = window.innerHeight - 116 + "px";
    } else {
        document.getElementsByTagName("main")[0].style.height = "";
        document.getElementsByClassName("main-mainview")[0].style.height = "";
        document.getElementsByClassName("main-slides")[0].style.height = "";
    }
}


window.addEventListener("resize", resize);
window.addEventListener("load", resize);