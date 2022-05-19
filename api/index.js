import axios from 'axios'

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK ${process.env.kakaoApi}`,
  },
})

export const bookSearch = (query) => {
  const params = {
    sort: 'accuracy',
  }
  return Kakao.get(`/v3/search/book?query=${query}&sort=${params.sort}`)
}
