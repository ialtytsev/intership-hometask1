import data from "./data.js";
import findNoteId from "./findNoteId.js";
import renderActiveNotes from "./renderActiveNotes.js";
import renderArchivedNotes from "./renderArchivedNotes.js";

const deleteNote = (event) => {
  try {
    const note = findNoteId(event.target);
    const noteIndex = data.findIndex((elem) => elem.id === note.id);

    data.splice(noteIndex, 1);

    renderActiveNotes(data);
    renderArchivedNotes(data);
  } catch (error) {
    console.log(error);
  }
};

export default deleteNote;
