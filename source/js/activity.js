const form = document.querySelector(`#direction-form`);
const textareaElements = form.querySelectorAll(`.activity__text`);

if (form) {
  form.setAttribute(`novalidate`, true);
  window.form.setSubmitHandler(form, textareaElements, `direction-form`);
}
