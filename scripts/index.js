const initialCards = [
{  name: "back of head portrait",
   link: "https://unsplash.com/photos/a-man-with-tattoos-covering-his-face-and-hands-behind-his-head-10TQYfgWnQI",
},

{
  name:"old cars",
  link:"https://unsplash.com/photos/a-car-is-parked-in-front-of-a-house-yEYravYsZkU",
},

{
  name:"nightime japan",
  link:"https://unsplash.com/photos/a-woman-walking-down-a-street-holding-an-umbrella-5KRVZp_23a0",
},

{
  name:"field",
  link:"https://unsplash.com/photos/a-grassy-field-with-a-fence-in-the-background-NdK5-yABH2c",
},

{
  name:"hiking",
  link:"https://unsplash.com/photos/a-person-walking-up-a-hill-on-a-sunny-day-JM0VeViZPo4",
},

{
  name:"motorcycle in mountains",
  link:"https://unsplash.com/photos/black-motorcycle-on-brown-dirt-road-during-daytime--P-YV9aTyHE",
},
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector("profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.setAttribute("src", cardData.link);
  cardImageEl.setAttribute("alt", cardData.title)
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened")
});

profileEditCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});