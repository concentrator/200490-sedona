var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__close');

navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
  } else {
    navMain.classList.add('main-nav--closed');
  }
});

navClose.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed');
});