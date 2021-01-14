const feedbackFormElement = document.querySelector('#feedback-form');
const inputElements = feedbackFormElement.querySelectorAll('.feedback__input');

window.form.setSubmitHandler(feedbackFormElement, inputElements, 'feedback__form');
