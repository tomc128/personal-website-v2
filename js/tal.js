// Tom's Animation Library


// data-tal : animate this element when shown, no delay
// data-tal="1000" : animate this element when shown, with a 1 second delay
// data-tal="1000;children=100" : animate this element's children after 1s, with a 100ms delay between each child

const verticalDeadzone = 0.15;

const allTalElements = document.querySelectorAll('[data-tal]');
let pendingTalElements = [];

allTalElements.forEach((element) => {
    pendingTalElements.push(element);
});

function isElementInView(element) {
    let rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - verticalDeadzone)
    );
}

function initElements(_) {
    allTalElements.forEach((element) => {
        const args = element.dataset.tal.split(';');
        if (args.length == 2) {
            const children = element.children;

            for (let i = 0; i < children.length; i++) {
                children[i].dataset.tal = '';
            }
        }
    });
}

function updateElements(_) {
    let newlyVisibleTalElements = [];

    pendingTalElements.forEach((element) => {
        if (isElementInView(element)) {
            const args = element.dataset.tal.split(';');
            const mainDelay = args[0] || 0;

            if (args.length == 1) {
                setTimeout(() => {
                    element.classList.add('tal-visible');
                }, mainDelay);
            }
            else if (args.length == 2) {
                const children = element.children;
                const childDelay = args[1].split('=')[1];

                for (let i = 0; i < children.length; i++) {
                    children[i].dataset.tal = '';
                }

                setTimeout(() => {
                    element.classList.add('tal-visible');
                    for (let i = 0; i < children.length; i++) {
                        setTimeout(() => {
                            children[i].classList.add('tal-visible');
                        }, childDelay * i);
                    }
                }, mainDelay);

            }

            newlyVisibleTalElements.push(element);
        }
    });

    pendingTalElements = pendingTalElements.filter((element) => {
        return !newlyVisibleTalElements.includes(element);
    });
}

window.addEventListener('scroll', updateElements);
window.addEventListener('load', initElements);
window.addEventListener('load', updateElements);