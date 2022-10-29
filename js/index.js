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

// card hover effect
let currentCardBounds;
let currentCard;
const cardEffectStrength = 15;

function transformCard(e) {
    const x = e.clientX - currentCardBounds.left;
    const y = e.clientY - currentCardBounds.top;

    const xRel = x / currentCardBounds.width;
    const yRel = y / currentCardBounds.height;

    currentCard.style.transform = `scale3d(1.05, 1.05, 1.05) rotateX(${(yRel - 0.5) * cardEffectStrength}deg) rotateY(${-(xRel - 0.5) * cardEffectStrength}deg)`;
}

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        currentCard = card;
        currentCardBounds = card.getBoundingClientRect();
        document.addEventListener('mousemove', transformCard);
    });
    card.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', transformCard);
        currentCard.style.transform = '';
    });
});

// project card hover effect
let currentProjectCardBounds;
let currentProjectCard;
let currentProjectCardImage;
const projectCardEffectStrength = 5;

function transformProjectCard(e) {
    const x = e.clientX - currentProjectCardBounds.left;
    const y = e.clientY - currentProjectCardBounds.top;

    const xRel = x / currentProjectCardBounds.width;
    const yRel = y / currentProjectCardBounds.height;

    currentProjectCardImage.style.transform = `scale3d(1.05, 1.05, 1.05) rotateX(${(yRel - 0.5) * projectCardEffectStrength}deg) rotateY(${-(xRel - 0.5) * projectCardEffectStrength}deg)`;
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((projectCard) => {
    projectCard.addEventListener('mouseenter', () => {
        currentProjectCard = projectCard;
        currentProjectCardImage = projectCard.querySelector('.right');
        currentProjectCardBounds = projectCard.getBoundingClientRect();
        document.addEventListener('mousemove', transformProjectCard);
    });
    projectCard.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', transformProjectCard);
        currentProjectCard.style.transform = '';
        currentProjectCardImage.style.transform = '';
    });
});