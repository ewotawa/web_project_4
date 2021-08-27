/* DOM element variable declarations */

  /* ----- opening and closing the popup box ----- */

  let modalElement = document.querySelector('.popup');
  let popupOpenButton = document.querySelector('.profile__info-edit');
  let popupCloseButton = document.querySelector('.popup__close');

  /* ----- identify modal form fields ----- */

  let popupFieldName = document.querySelector('.popup__input_field_name');
  let popupFieldAbout = document.querySelector('.popup__input_field_about');

  /* ----- lookup profile text ----- */

  let profileName = document.querySelector('.profile__info-name');
  let profileAbout = document.querySelector('.profile__info-description');

  /* ----- Let's find the form in the DOM ----- */
  let formElement = document.querySelector('.popup__form');




/* Opening and Closing the Popup Box */

  function popupToggle() {
    // determine how many classes are included on the modal element
    let classListLength = modalElement.classList.length;

    if (classListLength == 1) {
      // class list of 1 means that the popup is closed (doesn't have the modifier).
      // ----- update modal form fields with profile text
      popupFieldName.value = profileName.textContent;
      popupFieldAbout.value = profileAbout.textContent;
      // ----- Add the modifier.
      modalElement.classList.add('popup_opened');
    } else {
      // class list length other than one indicates that modifier is present. Remove modifier to close modal.
      modalElement.classList.remove('popup_opened');
    }
  }

  /* ----- open ----- */

  popupOpenButton.addEventListener('click', popupToggle);

  /* ----- close ----- */

  popupCloseButton.addEventListener('click', popupToggle);





/* Editing Your Name and About Me */

  // form submit handler
  function handleFormSubmit(evt) {
    evt.preventDefault();

    // Get the values of each field from the corresponding value property
    // Select elements where the field values will be entered
    // Insert new values using the textContent property of the querySelector() method
    profileName.textContent = popupFieldName.value;
    profileAbout.textContent = popupFieldAbout.value;

    // close the popup window
    popupToggle();

  }

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleFormSubmit);
