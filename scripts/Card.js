 class Card {
  constructor(cardData, cardSelector,handleImageClick ) {
    this._cardName = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  this._handleImageClick = handleImageClick;
  }


  getView() {
    this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__delete-button");
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardTitle.textContent = this._cardName;
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._cardName;
    this._setEventListeners();
    return this._cardElement;
  }

  _setEventListeners() {
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this)
    });

    this._deleteButton.addEventListener("click", this._handleDeleteCard);

    this._likeButton.addEventListener("click", this._handleLikeIcon);
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }
}

export default Card