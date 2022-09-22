import data from "./data.js";
import renderActiveNotes from "./renderActiveNotes.js";
import renderArchivedNotes from "./renderArchivedNotes.js";
import renderCategoryOptions from "./renderCategoryOptions.js";
import noteFormSubmit from "./noteFormSubmit.js";

const form = document.querySelector(".add-note-form");
form.addEventListener("submit", noteFormSubmit);

renderCategoryOptions();

renderActiveNotes(data);
renderArchivedNotes(data);
