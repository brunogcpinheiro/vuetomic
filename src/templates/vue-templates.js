module.exports = {
  ts: name => `<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '${name}'
})
</script>

<style lang="scss" scoped></style>`,
  js: name => `<template>
  <div></div>
</template>

<script>
export default {
  name: '${name}'
}
</script>

<style lang="scss" scoped></style>`
}
