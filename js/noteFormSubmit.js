import data from "./data.js";
import renderAllNotes from "./renderAllNotes.js";
import toggleModal from "./toggleModal.js";

const noteFormSubmit = (event) => {
  try {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const id = +formData.get("id");
    const name = formData.get("name");
    const category = formData.get("category");
    const content = formData.get("content");

    //Parse Dates
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{1,4}/gm;
    const matchDates = content.match(dateRegex);
    const dates = matchDates ? Array.from(matchDates) : [];

    //Add or edit note
    const noteId = data.findIndex((elem) => elem.id === id);
    if (noteId !== -1) {
      data[noteId] = {
        ...data[noteId],
        name,
        category,
        dates,
        content,
      };
    } else {
      const created = new Date().toLocaleDateString("en", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      data.push({
        id: data.length + 1,
        created,
        name,
        category,
        dates,
        content,
        archived: false,
      });
    }

    renderAllNotes(data);
    console.log(data);

    toggleModal();
    form.reset();
  } catch (error) {
    console.log(error);
  }
};

export default noteFormSubmit;
