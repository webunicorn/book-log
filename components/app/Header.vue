<template>
  <div class="header">
    <p>header</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/all';

.header {
  width: 100%;
  height: $header-height;
  background: palevioletred;
}
</style>
