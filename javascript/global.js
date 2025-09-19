
// DOM Elements
const formData = document.querySelectorAll(".formData");

const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const mailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const radiosInputs = document.getElementsByName("location");
const checkboxInput = document.getElementById("checkbox1");
const dateInput = document.getElementById("birthdate");


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
        alert("Merci ! Votre réservation a été reçue.")
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


