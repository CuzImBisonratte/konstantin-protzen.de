let current_slide = 1;
const slides = [
    { "name": "home", "display": "grid" },
    { "name": "aboutme", "display": "grid" },
    { "name": "portfolio", "display": "grid" },
    { "name": "education", "display": "grid" },
    { "name": "contact", "display": "grid" }
];


const slide_home = document.getElementById('slide-home');

function switchSlide(slide_num) {
    if (slide_num == current_slide) return;
    if (slide_num < 1 || slide_num > slides.length) return;
    hideSlide(current_slide);
    window.setTimeout(() => showSlide(slide_num), 250);
    current_slide = slide_num;
    checkArrows();
}

function nextSlide() {
    switchSlide(current_slide - 1);
}

function lastSlide() {
    switchSlide(current_slide + 1);
}

function hideSlide(slide_num) {
    const slide = document.getElementById('slide-' + slides[slide_num - 1].name);
    slide.style.opacity = 0;
    slide.style.transform = "scale(0.75);";
    window.setTimeout(() => {
        slide.style.display = 'none';
    }, 250);
}

function showSlide(slide_num) {
    const slide = document.getElementById('slide-' + slides[slide_num - 1].name);
    slide.style.opacity = 0;
    slide.style.display = slides[slide_num - 1].display;
    window.setTimeout(() => {
        slide.style.opacity = 1;
    }, 250);
}

function checkArrows() {
    if (current_slide == 1) {
        document.getElementById('arrow_up').style.opacity = 0.25;
        document.getElementById('arrow_up').classList.add('arrow_nohover');
    } else {
        document.getElementById('arrow_up').style.opacity = 1;
        document.getElementById('arrow_up').classList.remove('arrow_nohover');
    }
    if (current_slide == slides.length) {
        document.getElementById('arrow_down').style.opacity = 0.25;
        document.getElementById('arrow_down').classList.add('arrow_nohover');
    } else {
        document.getElementById('arrow_down').style.opacity = 1;
        document.getElementById('arrow_down').classList.remove('arrow_nohover');
    }
}
checkArrows();