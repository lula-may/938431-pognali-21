(function () {
  const CLASS_MODIFIER = `--expanded`;
  const countryFilterElement = document.querySelector(`.countries-filter`);
  const noop = () => {};
  const setToggleListener = (element, toggle, elementClass, onToggle = noop) => {
    const toggledClass = `${elementClass}${CLASS_MODIFIER}`;
    toggle.addEventListener(`click`, () => {
      element.classList.toggle(toggledClass);
      onToggle();
    })
  };

  // Устанавливаем обработчики клика на все выпадающие списки формы подбора попутчика
  const companionFieldElements = document.querySelectorAll('.field-group');
  companionFieldElements.forEach((field) => {
    const fieldToggle = field.querySelector('.field-group__header');
    setToggleListener(field, fieldToggle, `field-group`);
  });

  window.catalog = {
    setToggleListener
  };
})();
