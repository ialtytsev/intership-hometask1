import renderActiveNotes from "./renderActiveNotes.js";
import renderArchivedNotes from "./renderArchivedNotes.js";

const renderAllNotes = (note) => {
  try {
    renderActiveNotes(note);
    renderArchivedNotes(note);
  } catch (error) {
    console.log(error);
  }
};

export default renderAllNotes;
