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
}