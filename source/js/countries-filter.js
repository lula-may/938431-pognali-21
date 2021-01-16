const countriesFilterElement = document.querySelector(`.countries-filter`);
const toggleButtonElement = countriesFilterElement.querySelector(`.countries-filter__toggle`);
const closeButtonElement = countriesFilterElement.querySelector(`.countries-filter__button`);
const continentFilter = countriesFilterElement.querySelector(`.continent-filter`);
const alphabeticSortElement = countriesFilterElement.querySelector(`.alphabetic-sort`);
const filterCheckboxElements = continentFilter.querySelectorAll(`input[type="checkbox"]`);
const countriesItemElements = countriesFilterElement.querySelectorAll(`.countries-list__item`);

let isFilterApplied = false;

const getActiveContinents = () => {
  return Array.from(filterCheckboxElements)
  .filter((element) => element.checked)
  .map((element) => element.id);
}

const countries = Array.from(countriesItemElements).map((itemElement) => {
  const linkElement = itemElement.querySelector(`a`);
  const countryStrings = linkElement.getAttribute(`href`)
    .replace(`./countries/`, ``)
    .split(`/`);
  const continent = countryStrings[0];
  const country = countryStrings[1].replace(`.html`, ``);

  return {
    element: itemElement,
    linkElement,
    continent,
    country
  };
});

const filterCountries = (continentNames, countryItems) => {
  countryItems.forEach((country) => {
    continentNames.includes(country.continent)
    ? country.element.classList.remove(`countries-list__item--no-show`)
    : country.element.classList.add(`countries-list__item--no-show`);
  });
};

const resetFilter = () => {
  if (!isFilterApplied) {
    return;
  }
    countries.forEach((country) => country.element.classList.remove(`countries-list__item--no-show`));
    Array.from(filterCheckboxElements).forEach((element) => element.checked = false);
    isFilterApplied = false;
};

if (toggleButtonElement) {
  window.catalog.setToggleListener(countriesFilterElement, toggleButtonElement, `countries-filter`, resetFilter);
}

if (closeButtonElement) {
  closeButtonElement.addEventListener(`click`, () => {
    countriesFilterElement.classList.remove(`countries-filter--expanded`);
  });
}


continentFilter.addEventListener(`change`, (evt) => {
  evt.preventDefault();
  filterCountries(getActiveContinents(), countries);
  isFilterApplied = true;
});
