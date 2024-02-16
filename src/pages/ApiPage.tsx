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
  return (
    <div>
      <Button type="enable" text="로그인" to="" onClick={getTodo} />{' '}
    </div>
  );
}
