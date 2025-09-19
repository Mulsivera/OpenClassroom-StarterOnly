function main() {
    initEvents();
}

main();

function initEvents() {
    // Modal opening at modal-btn click
    const modalBtn = document.querySelectorAll(".modal-btn");
    modalBtn.forEach((btn) => btn.addEventListener("click", () => ModalDisplay("block")));
    // Modal closing at X icon click
    const closeModalBtn = document.querySelector("#close-icon");
    closeModalBtn.addEventListener("click", () => ModalDisplay("none"));
}

function ModalDisplay(display) {
    // Retrieve the modal and manage its display
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = display;
    ModalContentDisplay("modal-form", "modal-thanks");
}

function ModalContentDisplay(showClass, hideClass) {
    // Switch between form and thanks visibility
    const showElement = document.querySelector("." + showClass);
    const hideElement = document.querySelector("." + hideClass);
    showElement.style.display = "block";
    hideElement.style.display = "none";
}