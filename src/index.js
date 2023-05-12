import './index.html';
// New modules //
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';


// Use modules //
slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination'
  }
})

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;