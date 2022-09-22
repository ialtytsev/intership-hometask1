const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");
const createNoteButton = document.querySelector(".btn-create-note button");

const toggleModal = () => {
  try {
    const form = document.querySelector(".add-note-form");
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");

    form.querySelector("#id").setAttribute("value", "");
    form.querySelector("#name").setAttribute("value", "");
    form.querySelector("#content").setAttribute("value", "");
  } catch (error) {
    console.log(error);
  }
};

closeButton.addEventListener("click", toggleModal);
modalOverlay.addEventListener("click", toggleModal);

createNoteButton.addEventListener("click", toggleModal);

export default toggleModal;
