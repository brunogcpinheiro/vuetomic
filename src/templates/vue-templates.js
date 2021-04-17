module.exports = {
  ts: name => `<template>
  <div class="component"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '${name}'
})
</script>

<style lang="scss" scoped>
.component {}
</style>`,

  js: name => `<template>
  <div class="component"></div>
</template>

<script>
export default {
  name: '${name}'
}
</script>

<style lang="scss" scoped>
.component {}
</style>`,

  'nuxt-ts': name => `<template>
  <div class="component"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '${name}'
})
</script>

<style lang="scss" scoped>
.component {}
</style>`
}
