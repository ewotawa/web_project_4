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

/* ----- identify modal form fields ----- */

let popupFields = document.querySelectorAll('.popup__input');

/* ----- lookup profile text ----- */

let profileName = document.querySelector('.profile__info-name').innerHTML;
let profileAbout = document.querySelector('.profile__info-description').innerHTML;

/* ----- update modal form fields with profile text ----- */

popupFields[0].placeholder = profileName;
popupFields[1].placeholder = profileAbout;









/* Editing Your Name and About Me */

// Let's find the form in the DOM
let formElement = document.querySelector('.popup__form');

  // Next is the form submit handler, though
  // it won't submit anywhere just yet
  function handleFormSubmit(evt) {
    evt.preventDefault();
    // This line stops the browser from submitting the form in the default way.
    // Having done so, we can define our own way of submitting the form.
    // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let popupFields = document.querySelectorAll('.popup__input');
    let nameInput = popupFields[0];
    let jobInput = popupFields[1];

        // Get the values of each field from the corresponding value property
        // Select elements where the field values will be entered
        // Insert new values using the textContent property of the querySelector() method
        document.querySelector('.profile__info-name').textContent = nameInput.value;
        document.querySelector('.profile__info-description').innerHTML = jobInput.value;

    // close the popup window
    popupToggle();

  }

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit);