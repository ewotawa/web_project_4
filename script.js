/* Opening and Closing the Popup Box */

function popupToggle() {
  // get the element for the modal window
  let modalElement = document.querySelector('.popup');
  // toggle the class for modal visibility
  modalElement.classList.toggle('popup_opened');
}

/* ----- open ----- */

let popupOpenButton = document.querySelector('.profile__info-edit');

popupOpenButton.addEventListener('click', popupToggle);

/* ----- close ----- */

let popupCloseButton = document.querySelector('.popup__close');

popupCloseButton.addEventListener('click', popupToggle);


/* Form Fields */
/* Once the form has been opened, the "Name" and "About me" fields must be filled in with the values displayed on the page. */
/* If the user closes the popup by clicking on the close button, the entered values won't save. We'll tell you how the "Save" button works further down. */




/* Editing Your Name and About Me */
/* Just opening and closing the popup box isn't enough. It's the "Edit profile" popup, so it must edit the corresponding fields of the page. Once the user enters new information and clicks on the "Save" button, the page has to update to reflect the changes made, with the popup closing simultaneously: */


