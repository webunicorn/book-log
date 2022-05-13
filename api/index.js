import axios from 'axios'

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK bda7af64b598391cc6061eb3c39b107f`,
  },
})

export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book', { params })
}

// const config = {
//   baseURL: 'https://dapi.kakao.com/v3/search/book',
//   headers: {
//     Authorization: `KakaoAK bda7af64b598391cc6061eb3c39b107f`,
//   },
// }

// function fetchBook() {
//   const test = axios.get(config.baseURL)
//   console.log(test)
// }

// export { fetchBook }
