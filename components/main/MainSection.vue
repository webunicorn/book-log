<template>
  <div>
    <form @submit.prevent="searchBook">
      <input v-model="searchKeyword" type="text" />
      <button>검색</button>
    </form>
    <ul>
      <li v-for="(item, i) in searchList" :key="i">
        <img :src="item.thumbnail" :alt="`${item.title} 이미지`" />
        <dl>
          <dt>제목 :</dt>
          <dd>{{ item.title }}</dd>
        </dl>
        <dl>
          <dt>작가 :</dt>
          <dd>{{ item.authors[0] }}</dd>
        </dl>
        <dl>
          <dt>내용 :</dt>
          <dd v-html="item.contents" />
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import { bookSearch } from '@/api/index'

export default {
  data() {
    return {
      searchList: [],
      searchKeyword: null,
    }
  },
  created() {},
  mounted() {},
  methods: {
    async searchBook() {
      const { data } = await bookSearch(this.searchKeyword)
      this.searchList = [...data.documents]
      // this.searchList = data
      // console.log(typeof this.searchList)
      // this.searchList.forEach((element) => {
      //   console.log(element)
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/all';

input {
  border: 1px solid red;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}

li {
  width: calc(50% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ddd;

  &:nth-child(2n) {
    margin-right: 0;
  }
}

dl {
  display: flex;
}

dt {
  flex-shrink: 0;
}
</style>
