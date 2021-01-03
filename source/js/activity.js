const directionFormElement = document.querySelector('#direction-form');
const textareaElements = directionFormElement.querySelectorAll('.activity__text');

directionFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('validity:', directionFormElement.reportValidity());
  return (directionFormElement.reportValidity())
    ? directionFormElement.submit()
    : directionFormElement.classList.add('direction-form--invalid');
})

textareaElements.forEach((element) => {
  element.addEventListener('change', () => {
    console.log('change', element.id);
    directionFormElement.classList.remove('direction-form--invalid');
  })
})
