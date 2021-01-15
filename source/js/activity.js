const form = document.querySelector(`#direction-form`);
const textareaElements = form.querySelectorAll(`.activity__text`);

window.form.setSubmitHandler(form, textareaElements, `direction-form`);
