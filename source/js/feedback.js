const feedbackFormElement = document.querySelector(`#feedback-form`);
const inputElements = feedbackFormElement.querySelectorAll(`.feedback__input`);

if (feedbackFormElement) {
  feedbackFormElement.setAttribute(`novalidate`, true);
  window.form.setSubmitHandler(feedbackFormElement, inputElements, `feedback__form`);
}
