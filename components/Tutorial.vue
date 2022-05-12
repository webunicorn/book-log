<!-- Please remove this file from your project -->
<template>
  <div>
    <p class="test">test<span>ddd</span></p>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/all';

.test {
  border: 1px solid red;

  span {
    color: blue;
  }

  @include mobile {
    border: 1px solid purple;
  }
}
</style>
