const numberInputElements = document.querySelectorAll('.number-field');

const setControlsListeners = (element) => {
  const inputElement = element.querySelector('.number-field__input');
  const minusControlElement = element.querySelector('.number-field__control--minus');
  const plusControlElement = element.querySelector('.number-field__control--plus');

  minusControlElement.addEventListener('click', () => {
    (inputElement.value) > 0 ? inputElement.value-- : 0
  })

  plusControlElement.addEventListener('click', () => {
    inputElement.value++;
  })

  inputElement.addEventListener('change', (evt) => {
    evt.preventDefault();
    inputElement.value = parseInt(evt.target.value, 10);
  })
}

numberInputElements.forEach(setControlsListeners);
