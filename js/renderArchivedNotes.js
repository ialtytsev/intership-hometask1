import renderNotesTable from "./renderNotesTable.js";
import renderSummaryTable from "./renderSummaryTable.js";

const renderArchivedNotes = (notes) => {
  try {
    const tbodyNotes = document.querySelector(".archive-table tbody");
    tbodyNotes.innerHTML = "";

    const archivedNotes = notes.filter((elem) => elem.archived === true);
    renderNotesTable(tbodyNotes, archivedNotes);
    renderSummaryTable(notes);
  } catch (error) {
    console.log(error);
  }
};

export default renderArchivedNotes;
