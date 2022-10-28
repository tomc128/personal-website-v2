// Cool transform effect on SVG hero graphic
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelectorAll('.dot-grid-container').forEach((item) => {
        item.style.transform = `rotate(${x * 5}deg) skew(${x * 5}deg, ${y * 5}deg)`;
    });
});