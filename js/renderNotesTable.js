import editNoteForm from "./editNoteForm.js";
import setCategoryIcon from "./setCategoryIcon.js";
import toggleArchiveNote from "./toggleArchiveNote.js";
import deleteNote from "./deleteNote.js";

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

      const actionsButtons = ["edit", "archive", "trash"];

      const tdAction = document.createElement("td");
      actionsButtons.forEach((action) => {
        const btn = document.createElement("button");
        btn.id = `${action}-${note.id}`;
        btn.addEventListener("click", (event) => {
          switch (action) {
            case "edit":
              editNoteForm(event);
              break;
            case "archive":
              toggleArchiveNote(event);
              break;
            case "trash":
              deleteNote(event);
              break;
            default:
              break;
          }
        });
        btn.classList.add("btn-action", `btn-${action}`);
        tdAction.appendChild(btn);
      });
      tr.appendChild(tdAction);
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
};

export default renderNotesTable;
