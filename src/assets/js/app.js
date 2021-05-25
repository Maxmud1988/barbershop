const nav = document.querySelector('.nav'),
  navToggle = document.querySelector(".nav__toggle"),
  slides = document.querySelectorAll('.slider__item'),
  btns = document.querySelectorAll('.slider__toggle');

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
console.log(btns)
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});
