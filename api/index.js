import axios from 'axios'

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK`,
  },
})

export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book', { params })
}

// const config = {
//   baseURL: 'https://dapi.kakao.com/v3/search/book',
//   headers: {
//     Authorization: `KakaoAK`,
//   },
// }

// function fetchBook() {
//   const test = axios.get(config.baseURL)
//   console.log(test)
// }

// export { fetchBook }
