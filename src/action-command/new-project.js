const inquirer = require("inquirer");
const { execCommand } = require("../functions/base-functions");
const newProjectQuestion = require("../questions/new-project-questions");

const newProject = async (options) => {
  const answers = await inquirer.prompt(newProjectQuestion);

  const { type, name } = answers;

  if (type.toUpperCase() === "NUXT") {
    execCommand(`npx create-nuxt-app ${name}`);
  } else if (type.toUpperCase() === "VUE") {
    execCommand(`npx @vue/cli create ${name}`);
  }
};

module.exports = newProject;
