const mainNav = document.querySelector('.main-nav');
const mainNavToggle = mainNav.querySelector('.main-nav__toggle');

mainNavToggle.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--open');
  mainNav.classList.toggle('main-nav--close');
})
