#!/usr/bin/env node

const program = require('commander')
const { join } = require('path')
const fs = require('fs')
const inquirer = require('inquirer')

const package = require('./package.json')

const createFolder = ({ type, name }) => {
  if (!fs.existsSync(__dirname + '/components')) {
    fs.mkdirSync(__dirname + '/components')
  }

  const p = __dirname + '/components/' + type

  if (!fs.existsSync(p)) {
    fs.mkdirSync(p)
  }

  if (!fs.existsSync(p + `/${name}.vue`)) {
    fs.writeFileSync(
      join(p, `${name}.vue`),
      `<template>
  <div></div>
</template>
    
<script lang="ts">
import Vue from 'vue'
    
export default Vue.extend({
  name: '${name}'
})
</script>
    
<style lang="scss" scoped></style>`
    )
  }
}

program.version(package.version)

program
  .command('add [component]')
  .description('Create component')
  .action(async component => {
    let answers
    if (!component) {
      answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'type',
          message: 'What type?',
          choices: ['bosons', 'atoms', 'molecules', 'organisms', 'templates']
        },
        {
          type: 'input',
          name: 'name',
          message: 'Component name: '
        }
      ])
    }

    createFolder(answers)
  })

program.parse(process.argv)
