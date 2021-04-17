#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const { join } = require('path')
const inquirer = require('inquirer')
const cwd = process.cwd()

const vueTemplates = require('./templates/vue-templates')

const createFolder = ({ type, name }, lang) => {
  const basePath = cwd + '/components'
  const filePath = `${basePath}/${type}`

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath)
  }

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath)
  }

  if (!fs.existsSync(`${filePath}/${name}.vue`)) {
    fs.writeFileSync(join(filePath, `${name}.vue`), vueTemplates[lang](name))
  }
}

const createComponent = async (component, lang) => {
  const answers = await inquirer.prompt(questions)

  createFolder(answers, lang)
}

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What atomic level?',
    choices: ['bosons', 'quarks', 'atoms', 'molecules', 'organisms', 'templates']
  },
  {
    type: 'input',
    name: 'name',
    message: 'Component name:'
  }
]

program
  .command('cts [component]')
  .description('Create an atomic component')
  .action(component => createComponent(component, 'ts'))

program
  .command('c [component]')
  .description('Create an atomic component')
  .action(component => createComponent(component, 'js'))

program.parse(process.argv)
