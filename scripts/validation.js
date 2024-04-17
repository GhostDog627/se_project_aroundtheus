function disabledButton(submitButton, inactiveButtonClass) {
  submitButton.classlist.add(inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, inactiveButtonClass){
  submitButton.classlist.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function showInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classlist.add(errorClass);
}

function hideInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.remove(inputErrorClass);
  errorMessageEl.classlist.remove(errorClass);
  errorMessageEl.textContent = "";
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
}

function toggleButtonState(inputEls, submitButton, {inactiveButtonClass}) {
  if (hasInvalidInput(inputEls)) {
    disabledButton(submitButton, inactiveButtonClass);
    return;
  }

  enableButton(submitButton, inactiveButtonClass);
}

function setEventListeners(formEl, options) {
  const {inputSelector} = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".modal__button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formEl = document.querySelectorAll(options.formSelector);
  formEl.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(form, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

enableValidation(config);