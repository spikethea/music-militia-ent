import Glide from '@glidejs/glide';
import VConsole from 'vconsole';

const vConsole = new VConsole();

const heroSection = document.querySelector('#hero-section');
const backToTop = document.querySelector('#back-to-top');

let MMECardCarousel = null;

window.addEventListener('load', function () {
    MMECardCarousel = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    gap: 40,
    perView: 3,
    breakpoints: {
        480: {
            perView: 1,
            gap:10,
            peek: 20
        },
        820: {
            perView: 2,
            gap: 40,
            peek: 0
        }

    }
    }).mount();
});

window.addEventListener('scroll', () => {
    if (
        window.scrollY > heroSection.clientHeight &&
        window.innerWidth < 481
    ) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

window.addEventListener('resize', () => {
    MMECardCarousel.mount()
});