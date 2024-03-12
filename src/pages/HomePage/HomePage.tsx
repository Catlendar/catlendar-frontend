import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import { fortuneDataAtom } from '../../atom/FortuneStateAtom';
import NavBar from '../../components/Common/NavBar/NavBar';
import TodoBox from '../../components/Common/TodoBox/TodoBox';
import MainCard from '../../components/MainCard/MainCard';
import { HomeWrapper } from './HomePage.styled';

export default function HomePage() {
  const userAtom = useRecoilValue(UserAtom);
  const setFortuneData = useSetRecoilState(fortuneDataAtom);
  const navigate = useNavigate();
  const today = moment(new Date()).format('YYYY-MM-DD');

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
        navigate('/');
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAtom, setFortuneData]);

  return (
    <HomeWrapper>
      <div>
        <MainCard />
        <TodoBox date={today} />
      </div>
      <NavBar />
    </HomeWrapper>
  );
}
