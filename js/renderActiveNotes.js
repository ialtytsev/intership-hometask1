import renderNotesTable from "./renderNotesTable.js";
import renderSummaryTable from "./renderSummaryTable.js";

const renderActiveNotes = (notes) => {
  try {
    const tbodyNotes = document.querySelector(".notes-table tbody");
    tbodyNotes.innerHTML = "";

    const activeNotes = notes.filter((elem) => elem.archived === false);
    renderNotesTable(tbodyNotes, activeNotes);
    renderSummaryTable(notes);
  } catch (error) {
    console.log(error);
  }
};

export default renderActiveNotes;
