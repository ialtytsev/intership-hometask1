import categories from "./categories.js";
import setCategoryIcon from "./setCategoryIcon.js";

const renderSummaryTable = (notes) => {
  try {
    const tbody = document.querySelector(".summary-table tbody");
    tbody.innerHTML = "";

    const notesSummary = [];

    Object.values(categories).forEach((category) => {
      const summaryNotes = notes.filter((note) => note.category === category);
      const archivedNotes = summaryNotes.filter((note) => note.archived);

      const taskCategory = {
        category,
        active: summaryNotes.length - archivedNotes.length,
        archived: archivedNotes.length,
      };

      notesSummary.push(taskCategory);
    });

    notesSummary.forEach((notesCategory) => {
      const tr = document.createElement("tr");

      const summaryTd = document.createElement("td");
      summaryTd.appendChild(setCategoryIcon(notesCategory.category));
      tr.appendChild(summaryTd);

      tr.addTextTd(notesCategory.category);
      tr.addTextTd(notesCategory.active);
      tr.addTextTd(notesCategory.archived);

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error(error);
  }
};

export default renderSummaryTable;
