const atomicLevelQuestion = [
  {
    type: "list",
    name: "type",
    message: "Please select an atomic level?",
    choices: [
      "bosons",
      "quarks",
      "atoms",
      "molecules",
      "organisms",
      "templates",
      "pages",
    ],
  },
  {
    type: "input",
    name: "name",
    message: "Component name:",
    validate: (value) => (value ? true : "Component name can't be empty"),
  },
];

module.exports = atomicLevelQuestion;
