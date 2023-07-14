import Glide from '@glidejs/glide';

let MMECardCarousel = null;

window.addEventListener('load', function () {
    MMECardCarousel = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    gap: 40,
    perView: 3,
    breakpoints: {
        800: {
            perView: 1
        }
    }
    }).mount();
  });