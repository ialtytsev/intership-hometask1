import categories from "./categories.js";

const renderCategoryOptions = () => {
  try {
    const form = document.querySelector(".add-note-form");
    const categorySelect = form.querySelector("#category");

    Object.values(categories).forEach((elem) => {
      const categoryOption = document.createElement("option");
      categoryOption.setAttribute("value", elem);
      categoryOption.appendChild(document.createTextNode(elem));
      categorySelect.appendChild(categoryOption);
    });
  } catch (error) {
    console.log(error);
  }
};

export default renderCategoryOptions;
