import data from "./data.js";
import findNoteId from "./findNoteId.js";
import renderAllNotes from "./renderAllNotes.js";

const toggleArchiveNote = (event) => {
  try {
    const note = findNoteId(event.target);
    const noteIndex = data.findIndex((elem) => elem.id === note.id);

    data[noteIndex] = {
      ...data[noteIndex],
      archived: !data[noteIndex].archived,
    };
    renderAllNotes(data);
  } catch (error) {
    console.log(error);
  }
};

export default toggleArchiveNote;
