const refs = {
    openModalBtn: document.querySelector(".bird"),
    backdrop: document.querySelector(".backdrop"),
    modal: document.querySelector("[data-modal]"),
};

(() => {
    refs.openModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

window.addEventListener("click", closeModal);
window.addEventListener("keydown", closeModal);

function closeModal(ev) {
    if (ev.target === refs.backdrop || ev.keyCode === 27) {
        refs.backdrop.classList.add("is-hidden");
    }
}