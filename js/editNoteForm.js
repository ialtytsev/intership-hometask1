import findNoteId from "./findNoteId.js";
import toggleModal from "./toggleModal.js";

const editNoteForm = (event) => {
  try {
    toggleModal();

    const note = findNoteId(event.target);
    const form = document.querySelector(".add-note-form");
    form.querySelector("#id").setAttribute("value", note.id);
    form.querySelector("#name").setAttribute("value", note.name);
    const categoryOption = form.querySelector(
      `#category option[value="${note.category}"`
    );
    categoryOption.selected = true;
    form.querySelector("#content").setAttribute("value", note.content);
  } catch (error) {
    console.log(error);
  }
};

export default editNoteForm;
