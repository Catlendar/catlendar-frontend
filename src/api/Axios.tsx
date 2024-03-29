import axios from 'axios';

// export const URL = 'http://54.66.123.168:8080/';
const URL = window.location.hostname === 'localhost' ? 'http://54.66.123.168:8080' : 'api';

// 기본 인스턴스
export const instance = axios.create({
  baseURL: URL,
  headers: { 'Content-Type': 'application/json' },
});

// 토큰이 포함된 인스턴스
export const tokenInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

tokenInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('token');
  // eslint-disable-next-line dot-notation, no-param-reassign
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

/* 아래는 API 사용 예시 코드입니다!!!!!

이건 페이지 들어가자마자 로드 되어야 할 데이터를 불러올 때 쓰시오
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await tokenInstance.post('calendar/getToday', { userId: userAtom.userId });
      console.log(response);
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    }
  };

  fetchData();
}, [userAtom.userId]);

// 이건 onClick같은 함수에 적용 시킬 때 쓰세요!
const getTodo = async () => {
  try {
    const response = await tokenInstance.post('calendar/getToday', { userId: userAtom.userId });
    if (response.status === 200) {
      navigate('/Home');
    } else {
      navigate('/Home');
    }
  } catch (error) {
    navigate('/error');
  }
};
*/
