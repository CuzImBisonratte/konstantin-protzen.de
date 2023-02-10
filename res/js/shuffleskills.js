function shuffleSkills() {
    const e = document.querySelectorAll(".skill_list-wrapper>p");
    for (let i = 0; e.length > i; i++) e[i].style.order = Math.floor(Math.random() * e.length);
}
shuffleSkills();