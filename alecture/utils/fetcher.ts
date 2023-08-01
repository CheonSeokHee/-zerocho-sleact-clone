import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
      //쿠키 생성 유무 백 -> 프론트 / 프론트 -> 백 데이터 전달 가능 단, port 번호가 백, 프론트 서로 다를 시
    })
    .then((response) => response.data);

export default fetcher;
