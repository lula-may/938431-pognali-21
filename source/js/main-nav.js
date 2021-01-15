document.querySelector(`body`).classList.remove(`page__body--no-js`);

const mainNav = document.querySelector(`.main-nav`);
const mainNavToggle = mainNav.querySelector(`.main-nav__toggle`);

mainNavToggle.addEventListener(`click`, () => {
  mainNav.classList.toggle(`main-nav--open`);
  mainNav.classList.toggle(`main-nav--close`);
})

mainNavToggle.addEventListener(`keydown`, (evt) => {
  if (evt.key !== `Enter`) {
    return;
  }
  evt.preventDefault();
  mainNav.classList.toggle(`main-nav--open`);
  mainNav.classList.toggle(`main-nav--close`);
})
