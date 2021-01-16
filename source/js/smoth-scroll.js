const smoothLinks = document.querySelectorAll(`a[href^="#"]`);

smoothLinks.forEach((link) => {
  link.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const id = link.getAttribute(`href`);

      document.querySelector(id).scrollIntoView({
          behavior: `smooth`,
          block: `start`
      });
  });
});
