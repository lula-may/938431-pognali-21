const countriesFilterElement = document.querySelector('.countries-filter');
const continentFilter = countriesFilterElement.querySelector('.continent-filter');
const alphabeticSortElement = countriesFilterElement.querySelector('.alphabetic-sort');
const filterCheckboxElements = continentFilter.querySelectorAll('input[type="checkbox"]');
const countriesItemElements = countriesFilterElement.querySelectorAll('.countries-list__item');

const getActiveContinents = () => {
  return Array.from(filterCheckboxElements)
  .filter((element) => element.checked)
  .map((element) => element.id);
}

const countries = Array.from(countriesItemElements).map((itemElement) => {
  const linkElement = itemElement.querySelector('a');
  const countryStrings = linkElement.getAttribute('href')
    .replace('./countries/', '')
    .split('/');
  const continent = countryStrings[0];
  const country = countryStrings[1].replace('.html', '');

  return {
    element: itemElement,
    linkElement,
    continent,
    country
  };
});

let activeContinents = getActiveContinents();

const filterCountries = (continentNames, countryItems) => {
  countryItems.forEach((country) => {
    continentNames.includes(country.continent)
    ? country.element.classList.remove('countries-list__item--no-show')
    : country.element.classList.add('countries-list__item--no-show');
  });
};

const resetFilter = () => {
  countries.forEach((country) => country.element.classList.remove('countries-list__item--no-show'));
  Array.from(filterCheckboxElements).forEach((element) => element.checked = false);
}

continentFilter.addEventListener('change', (evt) => {
  evt.preventDefault();
  filterCountries(getActiveContinents(), countries);
});
