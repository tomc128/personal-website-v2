const dotGridContainer = document.querySelector('.dot-grid-container');
const nav = document.querySelector('#nav');

// Cool transform effect on SVG hero graphic
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    dotGridContainer.style.transform = `rotate(${x * 5}deg) skew(${x * 5}deg, ${y * 5}deg)`;
});

// on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10 && nav.classList.contains('docked')) {
        nav.classList.remove('docked');
    }
    if (scrollPosition <= 10 && !nav.classList.contains('docked')) {
        nav.classList.add('docked');
    }
});

