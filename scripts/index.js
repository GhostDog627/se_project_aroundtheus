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

const profileEditButton = document.querySelector('#profile-edit-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const profileCloseModal = document.querySelector('#modal-close-button');

profileEditButton.addEventListener('click', () => {
  profileEditModal.classList.add('modal_opened')
});

profileCloseModal.addEventListener('click', () => {
  profileCloseModal.classList.remove('modal_opened')
});