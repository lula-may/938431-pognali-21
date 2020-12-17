// Скрипт реализует показ/скрытие модального окна
"use strict"

const openModalButton = document.querySelector('.modal__open');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close');

const closePopup = () => {
  modal.classList.remove('modal--show');
  window.removeEventListener('keydown', escPressListener);
};

const escPressListener = (evt) => {
  if (evt.key !== 'Escape') {
    return;
  }
  closePopup();
};

if (openModalButton) {
  openModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--show');


    closeModalButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      closePopup();
    });

    window.addEventListener('keydown', escPressListener);
  });
}
