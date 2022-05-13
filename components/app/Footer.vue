<template>
  <div class="footer">
    <p>footer</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/all';

.footer {
  width: 100%;
  height: $footer-height;
  background: #000;
  border: 1px solid red;
}
</style>
