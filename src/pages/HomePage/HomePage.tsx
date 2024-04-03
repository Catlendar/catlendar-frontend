import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import { fortuneDataAtom } from '../../atom/FortuneStateAtom';
import TodoBox from '../../components/Common/TodoBox/TodoBox';
import MainCard from '../../components/MainCard/MainCard';
import LogoIcon from '../../components/Icon/LogoIcon';
import ArrowIcon from '../../components/Icon/ArrowIcon';
import ReactCalendar from '../../components/Calendar/ReactCalendar';
import useCompleted from '../../hooks/useCompleted';

export default function HomePage({ isDesktop }: { isDesktop: boolean }) {
  const userAtom = useRecoilValue(UserAtom);
  const setFortuneData = useSetRecoilState(fortuneDataAtom);
  const navigate = useNavigate();
  const today = moment(new Date()).format('YYYY-MM-DD');
  const { date, setDate, dataGroup } = useCompleted();
  const [clickedDay, setClickedDay] = useState(today);

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

  console.log('!!!!!!!!!!!!!!!,', clickedDay);
  return isDesktop ? (
    <main className="grid-layout">
      <section className="wrap-info">
        <LogoIcon />
        <p className="txt-info">
          오늘의 운세를 통해 영감을 받고,
          <br /> 할일을 같이 계획해봐요!
        </p>
        <Link to="/fortune" className="txt-link">
          오늘의 운세 <ArrowIcon />
        </Link>
      </section>
      <section>
        <MainCard isDesktop={isDesktop} />
        <TodoBox date={clickedDay} />
      </section>
      <section className="wrap-calendar">
        {dataGroup && (
          <ReactCalendar
            value={date}
            setValue={setDate}
            isDesktop={isDesktop}
            setIsDesktopClickedDay={setClickedDay}
          />
        )}
      </section>
    </main>
  ) : (
    <main style={{ backgroundColor: 'var(--bg-color-main)' }}>
      <MainCard />
      <TodoBox date={today} />
    </main>
  );
}
