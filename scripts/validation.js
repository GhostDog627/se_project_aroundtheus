function disabledButton(submitButton, inactiveButtonClass) {
  submitButton.classlist.add(inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, inactiveButtonClass){
  submitButton.classlist.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function showInputError(formEls, inputEl, {inputErrorClass, errorClass}) {
  const errorMessagesEl = formEls.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.add(inputErrorClass);
  errorMessagesEl.textContent = inputEl.validationMessage;
  errorMessagesEl.classlist.add(errorClass);
}

function hideInputError(formEls, inputEl, {inputErrorClass, errorClass}) {
  const errorMessagesEl = formEls.querySelector(`#${inputEl.id}-error`);
  inputEl.classlist.remove(inputErrorClass);
  errorMessagesEl.textContent = "";
  errorMessagesEl.classlist.remove(errorClass);
}

function checkInputValidity(formEls, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEls, inputEl, options);
  } else {
    hideInputError(formEls, inputEl, options);
  }
}

function toggleButtonState(inputEls, submitButton, {inactiveButtonClass}) {
  if (hasInvalidInput(inputEls)) {
    disabledButton(submitButton, inactiveButtonClass);
    return;
  }

  enabledButton(submitButton, inactiveButtonClass);
}

function setEventListeners(formEls, options) {
  const {inputSelector} = options;
  const inputEls = [...formEls.querySelectorAll(inputSelector)];
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
  formEls.forEach((formEls) => {
    formEls.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });

  setEventListeners(formEls, options);
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