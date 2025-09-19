function main () {
    initEvents();
}

main();

function initEvents () {
    // Calling sending function for form
    const form = document.querySelector("#form");
    form.addEventListener("submit", sendform);
    // Form Reset on closing
    const closeButton = document.querySelector("#close-icon");
    const inputDivIDList = [
    "formDataFirst",
    "formDataLast",
    "formDataMail",
    "formDataBirthDate",
    "formDataQuantity",
    "formDataRadios",
    "formDataCheckboxs"
    ];
    closeButton.addEventListener("click", () => resetform(inputDivIDList));
}

function sendform(event) {
    // Enable form sending based on inputs validity
    if(!validateInputs()) {
        event.preventDefault();
        console.log("Form not sent because one of input is wrong");
        return;
    }
    console.log("Form sent");
}

function resetform(inputDivIDList) {
    // Reset Form and Error Message
    const form = document.querySelector("#form");
    form.reset();
    inputDivIDList.forEach(inputID => {
        const input = document.getElementById(inputID);
        if (input) {
            SetError(input, "", "false");
        }
    });
}


function validateInputs () {
    // Verify all inputs validity
    validity = true
    if (
        !CheckNull("first") || 
        !CheckLessLength("first", 2) || 
        !CheckMoreLength("first", 30) ||
        !CheckRegex("first", /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)) 
        {
        validity = false
    }
    if (
        !CheckNull("last") || 
        !CheckLessLength("last", 2) ||
        !CheckMoreLength("last", 30) ||
        !CheckRegex("last", /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)) 
        {
        validity = false
    }
    if (
        !CheckNull("email") ||
        !CheckRegex("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) 
        {
        validity = false
    }
    if (
        !CheckNull("birthdate"))
        {
            validity = false
        }
    if (
        !CheckNull("quantity") ||
        !CheckRegex("quantity", /^[0-9]+$/))
        {
            validity = false
        }
    if (
        !CheckRadios("location", "formDataRadios"))
        {
            validity = false
        }
    if (
        !CheckCheckBox("checkbox1", "formDataCheckboxs", "Vous devez vérifier que vous acceptez les termes et conditions."))
        {
            validity = false
        }
    return validity
}

function CheckNull(inputID) {
    // Verify if a input is empty
    const checkInput = document.querySelector("#" + inputID);
    const parentDiv = checkInput.parentElement;
    const labelContent = checkInput.labels[0].textContent;
    if (checkInput.value == "") {
        SetError(parentDiv, "Le champ " + labelContent +  " doit être rempli.", "true");
        console.log("Input : " + inputID + " is empty");
        return false;
    } else {
        SetError(parentDiv, "", "false");
        return true;
    }
}

function CheckLessLength(inputID, length) {
    // Verify if a input is less than x caracters
    const checkInput = document.querySelector("#" + inputID);
    const parentDiv = checkInput.parentElement;
    const labelContent = checkInput.labels[0].textContent;
    if (checkInput.value.length < length ) {
        SetError(parentDiv, "Le champ " + labelContent +  " doit faire au minimum " + length + " caractères de long", "true");
        console.log("Input : " + inputID + " is less than " + length + " caracters");
        return false;
    } else {
        SetError(parentDiv, "", "false");
        return true
    }
}

function CheckMoreLength(inputID, length) {
    // Verify if a input is more than x caracters
    const checkInput = document.querySelector("#" + inputID);
    const parentDiv = checkInput.parentElement;
    const labelContent = checkInput.labels[0].textContent;
    if (checkInput.value.length > length ) {
        SetError(parentDiv, "Le champ " + labelContent +  " doit faire au maximum " + length + " caractères de long", "true");
        console.log("Input : " + inputID + " is more than " + length + " caracters");
        return false;
    } else {
        SetError(parentDiv, "", "false");
        return true
    }
}

function CheckRegex (inputID, regex) {
    // Verify a input Regex
    const checkInput = document.querySelector("#" + inputID);
    const parentDiv = checkInput.parentElement;
    const labelContent = checkInput.labels[0].textContent;
    if (!regex.test(checkInput.value)) {
        SetError(parentDiv, "Le champ " + labelContent +  " ne respecte pas les règles d'écriture", "true");
        console.log("Input : " + inputID + " regex is wrong");
        return false;
    } else {
        SetError(parentDiv, "", "false");
        return true
    }
}

function CheckRadios (RadiosName, RadiosDivID) {
    // Verify if one in a array of radios are checked
    const radiosInputs = document.getElementsByName(RadiosName);
    const parentDiv = document.getElementById(RadiosDivID);
    const radiosChecked = Array.from(radiosInputs).some(radio => radio.checked);
    if (!radiosChecked) {
        SetError(parentDiv, "Veuillez sélectionner au moins un élément", "true");
        console.log("At least one of the " + RadiosName + " radios isn't checked");
        return false;
    } else {
        SetError(parentDiv, "", "false");
        return true
    }
}

function CheckCheckBox (CheckBoxID, CheckBoxDivID, message) {
    // Verify if a CheckBox is checked
    const CheckBoxInput = document.getElementById(CheckBoxID)
    const parentDiv = document.getElementById(CheckBoxDivID);
    if (!CheckBoxInput.checked) {
        SetError(parentDiv, message, "true");
        console.log(CheckBoxID + " isn't checked");
        return false;
    } else {
        SetError(parentDiv, "", "false");
        return true
    }
}

function SetError (element, message, visibility) {
    // Set error message attributes
    element.setAttribute("data-error", message);
    element.setAttribute("data-error-visible", visibility);
}