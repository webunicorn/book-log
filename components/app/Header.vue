<template>
  <div class="header">
    <ul>
      <li><nuxt-link :to="{ path: '/' }">Home</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/mypage' }">MyPage</nuxt-link></li>
    </ul>
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
  display: flex;
  align-items: center;
  width: 100%;
  height: $header-height;
  background: palevioletred;
}

ul {
  display: flex;

  li {
    font-size: 20px;
    margin: 0 20px;
  }
}
</style>
