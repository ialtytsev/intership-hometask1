import setCategoryIcon from "./setCategoryIcon.js";

HTMLTableRowElement.prototype.addTextTd = function (text) {
  const td = document.createElement("td");
  td.innerHTML = text;
  this.appendChild(td);
  return this;
};

const renderNotesTable = (tbody, notes) => {
  try {
    notes.forEach((note) => {
      const tr = document.createElement("tr");
      tr.id = note.id;

      const categoryTd = document.createElement("td");
      categoryTd.appendChild(setCategoryIcon(note.category));
      tr.appendChild(categoryTd);

      tr.addTextTd(note.name);
      tr.addTextTd(note.created);
      tr.addTextTd(note.category);
      tr.addTextTd(note.content);
      tr.addTextTd(note.dates.join(""));

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
};

export default renderNotesTable;
