const bodyElement = document.querySelector(`body`);
bodyElement.classList.remove(`page__body--no-js`);

const mainNav = document.querySelector(`.main-nav`);
const mainNavToggle = mainNav.querySelector(`.main-nav__toggle`);

const onScroll = () => {
  (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  ? bodyElement.classList.add(`page__body--scroll`)
  : bodyElement.classList.remove(`page__body--scroll`);
};

mainNavToggle.addEventListener(`click`, () => {
  mainNav.classList.toggle(`main-nav--open`);
  mainNav.classList.toggle(`main-nav--close`);
});

mainNavToggle.addEventListener(`keydown`, (evt) => {
  if (evt.key !== `Enter`) {
    return;
  }
  evt.preventDefault();
  mainNav.classList.toggle(`main-nav--open`);
  mainNav.classList.toggle(`main-nav--close`);
});

document.addEventListener('scroll', onScroll);
