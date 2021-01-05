const filterElement = document.querySelector('.countries-filter');
const toggleButtonElement = filterElement.querySelector('.countries-filter__toggle');
const closeButtonElement = filterElement.querySelector('.countries-filter__button');

if (toggleButtonElement) {
  toggleButtonElement.addEventListener('click', () => {
    filterElement.classList.toggle('countries-filter--expanded');
  })
}

if (closeButtonElement) {
  closeButtonElement.addEventListener('click', () => {
    filterElement.classList.remove('countries-filter--expanded');
  })
}
