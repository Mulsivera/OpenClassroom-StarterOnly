function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById("close-button");
const submitBtn = document.getElementById("btn-submit");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const mailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const radiosInputs = document.getElementsByName("location");
const checkboxInput = document.getElementById("checkbox1");
const dateInput = document.getElementById("birthdate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener("click", CloseModal);


// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//Close modal form
function CloseModal() {
    modalbg.style.display = "none";
}

// Block modal validation
function validate() {
    RemoveAllErrorMessage()
    var valid = true
    if (firstNameInput.value.length < 2) {
        ShowErrorMessage("formDataFirst", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", "First")
        valid = false
    } else {
        RemoveErrorMessage("First")
    }
    if (lastNameInput.value.length < 2) {
        ShowErrorMessage("formDataLast", "Veuillez entrer 2 caractères ou plus pour le champ du nom.", "Last")
        valid = false
    } 
    if (!mailInput.value.includes("@") || !mailInput.value.includes(".")) {
        ShowErrorMessage("formDataMail", "Veuillez entrer un Email valide.", "Mail")
        valid = false
    }
    if (/\D/.test(quantityInput.value) || quantityInput.value == "") {
        ShowErrorMessage("formDataQuantity", "Veuillez entrer un nombre valide.", "Quantity")
        valid = false
    }
    if (checkboxInput.checked == false) {
        ShowErrorMessage("formDataCheckboxs", "Veuillez accepter les conditions d'utilisation", "Checkboxs")
        valid = false
    }
    const radiosChecked = Array.from(radiosInputs).some(radio => radio.checked)
    if (!radiosChecked) {
        ShowErrorMessage("formDataRadios", "Veuillez choisir au moins une ville.", "Radios")
        valid = false
    }
    if (dateInput.value == "") {
        ShowErrorMessage("formDataBirthDate", "Veuillez entrer une date de naissance.", "BirthDate")
        valid = false
    }
    if (valid == false) {
        console.log("false")
        return false
    } else {
        console.log("validé")
        return true
    }
}

// Show error message
function ShowErrorMessage (parentElementId , content , errorMessageId) {
    const parentElement = document.getElementById(parentElementId)
    const textElement = document.createElement("p")
    textElement.textContent = content
    textElement.className = "errorMessage"
    textElement.id = "errorMessage" + errorMessageId
    parentElement.appendChild(textElement)
}

// Remove one error message
function RemoveErrorMessage (errorMessageId) {
    const errorMessage = document.getElementById("errorMessage" + errorMessageId)
    if (errorMessage) errorMessage.remove()
}

// Remove all error messages
function RemoveAllErrorMessage () {
    const errorMessages = document.getElementsByClassName("errorMessage")
    Array.from(errorMessages).forEach(message => message.remove())
}


