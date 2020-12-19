// Скрипт реализует показ/скрытие модального окна по клику или нажатию Enter

const openModalButton = document.querySelector('.modal__open');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close');

const closePopup = () => {
  modal.classList.remove('modal--show');
  window.removeEventListener('keydown', escPressListener);
};

const openPopup = () => {
  modal.classList.add('modal--show');

  closeModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePopup();
  });

  window.addEventListener('keydown', escPressListener);
}

const escPressListener = (evt) => {
  if (evt.key !== 'Escape') {
    return;
  }
  closePopup();
};

if (openModalButton) {
  openModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup();
  });

  openModalButton.addEventListener('keydown', (evt) => {
    if (evt.key !== 'Enter') {
      return;
    }

    evt.preventDefault();
    openPopup();
  });
}
