const CLASS_MODIFIER = `--expanded`;
const countryFilterElement = document.querySelector(`.countries-filter`);
const toggleButtonElement = countryFilterElement.querySelector(`.countries-filter__toggle`);
const closeButtonElement = countryFilterElement.querySelector(`.countries-filter__button`);

const setToggleListener = (element, toggle, elementClass) => {
  const toggledClass = `${elementClass}${CLASS_MODIFIER}`;
  toggle.addEventListener(`click`, () => {
    element.classList.toggle(toggledClass);
  })
};

if (toggleButtonElement) {
  setToggleListener(countryFilterElement, toggleButtonElement, `countries-filter`);
}

if (closeButtonElement) {
  closeButtonElement.addEventListener(`click`, () => {
    countryFilterElement.classList.remove(`countries-filter--expanded`);
  })
}

// Устанавливаем обработчики клика на все выпадающие списки формы подбора попутчика
const companionFieldElements = document.querySelectorAll('.field-group');
companionFieldElements.forEach((field) => {
  const fieldToggle = field.querySelector('.field-group__header');
  setToggleListener(field, fieldToggle, `field-group`);
});
