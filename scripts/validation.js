function disabledButton(submitButton, inactiveButtonClass) {
  submitButton.classlist.add(inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, inactiveButtonClass){
  submitButton.classlist.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function showInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
  const errorMessagesEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.add(inputErrorClass);
  errorMessagesEl.textContent = inputEl.validationMessage;
  errorMessagesEl.classlist.add(errorClass);
}

function hideInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
  const errorMessagesEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.remove(inputErrorClass);
  errorMessagesEl.textContent = "";
  errorMessagesEl.classlist.remove(errorClass);
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

  enabledButton(submitButton, inactiveButtonClass);
}

function setEventListeners(formEl, options) {
  const {inputSelector} = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = options.querySelector(".modal__button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEls, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });

  setEventListeners(formEl, options);
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