const fs = require("fs");
const { join } = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");
const cwd = process.cwd();

const vueTemplates = require("../templates/vue-templates");
const { setFirstLetterToUppercase } = require("../functions/base-functions");
const atomicLevelQuestion = require("../questions/atomic-level-questions");

const createComponent = async (options) => {
  const answers = await inquirer.prompt(atomicLevelQuestion);

  const { type, name, nuxt, ts } = { ...answers, ...options };

  const capitalizedName = setFirstLetterToUppercase(name);
  const lang = ts ? (nuxt ? "nuxt-ts" : "ts") : "js";
  const basePath = `${cwd}${nuxt ? "" : "/src"}/components`;
  const filePath = `${basePath}/${type}`;

  if (!fs.existsSync(basePath)) fs.mkdirSync(basePath);

  if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);

  if (!fs.existsSync(`${filePath}/${capitalizedName}.vue`)) {
    fs.writeFileSync(
      join(filePath, `${capitalizedName}.vue`),
      vueTemplates[lang](capitalizedName),
    );

    console.log(
      `${chalk.green("CREATE:")} ${filePath}/${capitalizedName}.vue`.replace(
        `${cwd}/`,
        "",
      ),
    );
  }
};

module.exports = createComponent;
