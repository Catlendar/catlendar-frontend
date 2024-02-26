import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import { fortuneDataAtom } from '../../atom/FortuneStateAtom';
import TodoBox from '../../components/Common/TodoBox/TodoBox';
import MainCard from '../../components/MainCard/MainCard';

export default function HomePage() {
  const userAtom = useRecoilValue(UserAtom);
  const setFortuneData = useSetRecoilState(fortuneDataAtom);
  const navigate = useNavigate();

  // 오늘의 운세 api 호출
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
        // 총운에서 키워드 4글자만 추출
        const keywordMatch = fortune[0].keyword.match(/<b>(.*?)<\/b>/);
        const keywordText = keywordMatch ? keywordMatch[1].replace(/["'“”]/g, '') : '';
        setFortuneData({
          fortuneTitle: keywordText,
          fortuneDesc: fortune.map((item) => item.desc),
        });
      } catch (error) {
        navigate('/error');
      }
    };
    fetchData();
  }, [userAtom, navigate, setFortuneData]);

  return (
    <div
      style={{
        boxShadow: 'rgba(255, 255, 0, 0.35) 0px 0px 5px 20px',
        width: '390px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <MainCard />
      <TodoBox />
    </div>
  );
}
