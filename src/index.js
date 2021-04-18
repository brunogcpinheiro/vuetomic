#!/usr/bin/env node

const program = require("commander");
const createComponent = require("./action-command/create-component");
const newProject = require("./action-command/new-project");

program
  .command("make")
  .option("-t, --ts", "create a ts vue component")
  .option("-n, --nuxt", "create a nuxt path component")
  .action(createComponent);

program.command("new").action(newProject);

program.parse(process.argv);
