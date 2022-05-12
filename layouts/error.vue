<template>
  <div class="error">
    <p>Here Is Error Page!</p>
    <button @click="goHome">back home</button>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'full',
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/all';

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 180px);
  background: #dd1043;

  p {
    margin: 0 0 20px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
