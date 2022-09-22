import data from "./data.js";

const findNoteId = (note) => {
  try {
    const regex = /\d+/;
    const id = Number.parseInt(note.id.match(regex)[0]);
    return data.find((elem) => elem.id === id);
  } catch (error) {
    console.log(error);
  }
};

export default findNoteId;
