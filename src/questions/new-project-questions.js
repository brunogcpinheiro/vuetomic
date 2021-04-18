const newProjectQuestion = [{
  type: "list",
  name: "type",
  message: "Please select the stack for development:",
  choices: ["Vue", "Nuxt"],
}, {
  type: "input",
  name: "name",
  message: "Project name:",
  validate: (value) => (value ? true : "Project name can't be empty"),
}];

module.exports = newProjectQuestion;
