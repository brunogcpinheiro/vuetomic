const { execSync } = require("child_process");

const execCommand = (stg) => execSync(stg, { stdio: [0, 1, 2] });

const setFirstLetterToUppercase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

module.exports = {
  execCommand,
  setFirstLetterToUppercase,
};
