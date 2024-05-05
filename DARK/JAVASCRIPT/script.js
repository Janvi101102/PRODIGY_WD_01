// script.js

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.add('hovered');
    }
});

document.addEventListener('mouseout', () => {
    nav.classList.remove('hovered');
});