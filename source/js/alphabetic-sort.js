const ACTIVE_CLASS = `countries-list__letter-list--active`;
const LETTER_PREFIX = `letter`;
const LIST_PREFIX = `list`;

const alphabetElement = document.querySelector(`.alphabetic-sort__alphabet`);
const countriesListElement = document.querySelector(`.countries-list`);
let activeLetterElement = alphabetElement.querySelector(`.letter-button[aria-pressed="true"]`);
let activeListElement = countriesListElement.querySelector(`.${ACTIVE_CLASS}`);

changeShowedLetterList = (id) => {
  const listId = id.replace(LETTER_PREFIX, LIST_PREFIX);
  const newActiveListElement = document.getElementById(listId);

  activeListElement.classList.remove(ACTIVE_CLASS);
  newActiveListElement.classList.add(ACTIVE_CLASS);

  return newActiveListElement;
};

changeCurrentLetter = (id) => {
  const newActiveLetterElement = document.getElementById(id);

  activeLetterElement.setAttribute(`aria-pressed`, false);
  newActiveLetterElement.setAttribute(`aria-pressed`, true);

  return newActiveLetterElement;
};

if (alphabetElement) {
  alphabetElement.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== `BUTTON` || evt.target === activeListElement) {
      return;
    }

    const newActiveId = evt.target.id;
    activeLetterElement = changeCurrentLetter(newActiveId);
    activeListElement = changeShowedLetterList(newActiveId);
  });
}
