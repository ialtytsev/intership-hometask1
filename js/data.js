import categories from "./categories.js";

const data = [
  {
    id: 1,
    name: "Shopping list",
    created: "20/09/2022",
    category: categories.task,
    content: "Tomatoes, bread",
    dates: [],
    archived: false,
  },
  {
    id: 2,
    name: "The theory of evolution",
    created: "20/09/2022",
    category: categories.randomTought,
    content: "The evolution of Darwin is...",
    dates: [],
    archived: false,
  },
  {
    id: 3,
    name: "New feature",
    created: "20/09/2022",
    category: categories.idea,
    content: "Implement new feature 18/09/2022 and 21/09/2022",
    dates: ["20/09/2022", "20/09/2022"],
    archived: false,
  },
  {
    id: 4,
    name: "William Gaddis",
    created: "20/09/2022",
    category: categories.task,
    content: "Power doesn't corrupt people; people corrupt power",
    dates: [],
    archived: false,
  },
  {
    id: 5,
    name: "Books",
    created: "20/09/2022",
    category: categories.randomTought,
    content: "The learn startup",
    dates: [],
    archived: false,
  },
  {
    id: 6,
    name: "War never changes",
    created: "24/02/2022",
    category: categories.randomTought,
    content: "War never changes beacause it is never justified",
    dates: [],
    archived: true,
  },
  {
    id: 7,
    name: "Start a new project",
    created: "21/09/2022",
    category: categories.randomTought,
    content: "Start a new project 01/10/2022",
    dates: ["01/10/2022"],
    archived: false,
  },
];

export default data;
