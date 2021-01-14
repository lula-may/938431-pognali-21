const countrySelectElements = document.querySelectorAll('.country-field');

countrySelectElements.forEach((element) => {
  const openSelectElement = element.querySelector('.country-field__toggle');

  if (!openSelectElement) {
    return;
  }

  openSelectElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.classList.toggle('country-field--open');
    openSelectElement.classList.toggle('country-field__toggle--close');
  })
})
