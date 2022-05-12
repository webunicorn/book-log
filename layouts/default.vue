<template>
  <div class="layout">
    <Header class="layout__header" />
    <Nuxt class="layout__body" />
    <Footer class="layout__footer" />
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/all';

.layout {
  &__body {
    min-height: calc(100vh - #{$footer-height});
  }
}
</style>
