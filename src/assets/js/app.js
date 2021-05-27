const nav = document.querySelector('.nav'),
  navToggle = document.querySelector(".nav__toggle"),
  slides = document.querySelectorAll('.advantages__item'),
  btns = document.querySelectorAll('.advantage__toggle'),
  slidesRev = document.querySelectorAll('.reviews__item'),
  btnsRev = document.querySelectorAll('.reviews__toggle');

nav.classList.remove('nav--nojs');
navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
})

let currentSlide = 1;

const manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('slider__item--active');

    btns.forEach((btn) => {
      btn.classList.remove('slider__toggle--current');
    });

  });
  slides[manual].classList.add('slider__item--active');
  btns[manual].classList.add('slider__toggle--current');
}

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});

