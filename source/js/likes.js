const likesElements = document.querySelectorAll(`.likes`);

const setLikesButtonClickListener = (element) => {
  const likesButtonElement = element.querySelector(`.likes__toggle`);
  const likesCounterElement = element.querySelector(`.likes__count`);

  likesButtonElement.addEventListener(`click`, () => {
    if (likesButtonElement.getAttribute(`aria-pressed`) === `false`) {
      if (!isNaN(likesCounterElement.textContent)) {
        likesCounterElement.textContent++;
      }
      likesButtonElement.setAttribute(`aria-pressed`, `true`);
    } else {
      if (!isNaN(likesCounterElement.textContent)) {
        likesCounterElement.textContent--;
      }
      likesButtonElement.setAttribute(`aria-pressed`, `false`);
    }
  });
}

likesElements.forEach(setLikesButtonClickListener);
