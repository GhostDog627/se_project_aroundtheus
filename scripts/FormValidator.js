class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;

    // update other settings as shown above
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showInputError(inputEl, errorMessagesEl) {
    const errorElement = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessagesEl.textContent = inputEl.validationMessage;
    errorMessagesEl.classList.add(this._errorClass);
  }

  _toggleButtonState() {
    if (hasInvalidInput(this._inputEls)) {
      disabledButton(submitButton, inactiveButtonClass);
      return;
  }

  _hasInvalidInput()
    if (hasInvalidInput(this._inputEls)) {
      disabledButton(submitButton, inactiveButtonClass);
      return;
  }


  _setEventListeners()
  const {inputSelector} = options;
  this._inputEls = [this._.querySelectorAll(this._inputSelector)];
  this._submitButton = this._.querySelector(this._submitButtonSelector);
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(this._form, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      // no need for args
      this._setEventListeners();
  }
}

// export default the class

// this gets done in index.js
// need to pass args


export default FormValidator