import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenInstance } from '../api/Axios';
import Button from '../components/Common/Button/Button';
import { UserAtom } from '../atom/UserAtom';

// 아래 코드 참고 해서 api 작성하세요!!!!
export default function ApiPage() {
  const navigate = useNavigate();
  const userAtom = useRecoilValue(UserAtom);

  // 이건 페이지 들어가자마자 로드 되어야 할 데이터를 불러올 때 쓰시오
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://m.search.naver.com/p/csearch/dcontent/external_api/json_todayunse_v3.naver?_callback=window.__jindo2_callback._fortune_my_0&gender=${userAtom.gender}&birth=${userAtom.birthDate}&solarCal=${userAtom.calendarType}&time=${userAtom.birthTime}`,
          {
            method: 'GET',
          },
        );
        if (!response.ok) {
          navigate('/error');
        }
        const data = await response.text();
        // json으로 포맷변경
        const fortune = JSON.parse(`${data.substring(data.indexOf('['), data.indexOf(']'))}]`);
        console.log(fortune);
        console.log(fortune[0].name);
      } catch (error) {
        navigate('/error');
      }
    };
    fetchData();
  }, [userAtom.birthDate, userAtom.birthTime, userAtom.calendarType, userAtom.gender, navigate]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await tokenInstance.post('calendar/getToday', { userId: userAtom.userId });
  //       if (response.status === 200) {
  //         console.log(response);
  //       } else {
  //         navigate('/error');
  //       }
  //     } catch (error) {
  //       navigate('/error');
  //     }
  //   };

  //   fetchData();
  // }, [userAtom.userId, navigate]);

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
  return (
    <div>
      <Button type="enable" text="로그인" to="" onClick={getTodo} />{' '}
    </div>
  );
}
