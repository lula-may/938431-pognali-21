(function () {
  const INVALID_POSTFIX = `--invalid`;

  const setSubmitHandler = (form, elements, formClass) => {
    const invalidClass = `${formClass}${INVALID_POSTFIX}`;

    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      return (form.reportValidity())
        ? form.submit()
        : form.classList.add(invalidClass);
    });

    elements.forEach((element) => {
      element.addEventListener(`focus`, () => {
        form.classList.remove(invalidClass);
      });
    });
  };

  window.form = {
    setSubmitHandler
  };
})();
