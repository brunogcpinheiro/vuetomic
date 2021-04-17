#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const { join } = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')
const cwd = process.cwd()

const vueTemplates = require('./templates/vue-templates')

const setFirstLetterToUppercase = text => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const createComponent = ({ type, name, nuxt, ts }) => {
  const capitalizedName = setFirstLetterToUppercase(name)
  const lang = ts ? (nuxt ? 'nuxt-ts' : 'ts') : 'js'
  const basePath = `${cwd}${nuxt ? '' : '/src'}/components`
  const filePath = `${basePath}/${type}`

  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath)
  }

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath)
  }

  if (!fs.existsSync(`${filePath}/${capitalizedName}.vue`)) {
    fs.writeFileSync(
      join(filePath, `${capitalizedName}.vue`),
      vueTemplates[lang](capitalizedName)
    )

    console.log(
      `${chalk.green('CREATE:')} ${filePath}/${capitalizedName}.vue`.replace(
        `${cwd}/`,
        ''
      )
    )
  }
}

const getAnswers = async options => {
  const answers = await inquirer.prompt(questions)

  createComponent({ ...answers, ...options })
}

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Please select an atomic level?',
    choices: [
      'bosons',
      'quarks',
      'atoms',
      'molecules',
      'organisms',
      'templates',
      'pages'
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: 'Component name:',
    validate: value => (value ? true : "Component name can't be empty")
  }
]

program
  .command('make')
  .option('-t, --ts', 'create a ts vue component')
  .option('-n, --nuxt', 'create a nuxt path component')
  .action(options => getAnswers(options))

program.parse(process.argv)
