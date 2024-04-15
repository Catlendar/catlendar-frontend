import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import { fortuneDataAtom } from '../../atom/FortuneStateAtom';
import TodoBox from '../../components/Common/TodoBox/TodoBox';
import MainCard from '../../components/MainCard/MainCard';
import WhiteLogo from '../../components/Icon/WhiteLogo';
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://m.search.naver.com/p/csearch/dcontent/external_api/json_todayunse_v3.naver?_callback=window.__jindo2_callback._fortune_my_0&gender=${userAtom.gender}&birth=${userAtom.birthDate}&solarCal=${userAtom.calendarType}&time=${userAtom.birthTime}`,
  //         {
  //           method: 'GET',
  //         },
  //       );
  //       if (!response.ok) {
  //         navigate('/error');
  //       }
  //       const data = await response.text();
  //       // json으로 포맷변경
  //       const fortune = JSON.parse(`${data.substring(data.indexOf('['), data.indexOf(']'))}]`);
  //       // 총운에서 키워드 4글자만 추출
  //       const keywordMatch = fortune[0].keyword.match(/<b>(.*?)<\/b>/);
  //       const keywordText = keywordMatch ? keywordMatch[1].replace(/["'“”]/g, '') : '';
  //       setFortuneData({
  //         fortuneTitle: keywordText,
  //         fortuneDesc: fortune.map((item) => item.desc),
  //       });
  //     } catch (error) {
  //       navigate('/');
  //     }
  //   };
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userAtom, setFortuneData]);

  // 20240415 변경된 운세api에 대한 후처리 완료
  // 운세 api에 맞는 텍스트로 변경
  const gender = userAtom.gender === '남성' ? 'm' : 'w';
  const calendarType = userAtom.calendarType === '양력' ? 'solar' : 'lunarGeneral';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://m.search.naver.com/p/csearch/content/apirender.nhn?where=nexearch&pkid=387&_callback=jQuery1124044077201959404455_1713099730172&u2=${userAtom.birthDate}&q=%EC%83%9D%EB%85%84%EC%9B%94%EC%9D%BC+%EC%9A%B4%EC%84%B8&u1=${gender}&u3=${calendarType}&u4=${userAtom.birthTime}`,
          {
            method: 'GET',
          },
        );
        if (!response.ok) {
          navigate('/error');
        }
        // 응답값을 json형식로 받아올수없어 text로 전달받음
        const data = await response.text();
        // 오늘운세의 사자성어 텍스트
        const keywordText = data.substring(data.indexOf('<b>') + 3, data.indexOf('<b>') + 7);
        // 위에서 저장한 data를 json형태로 가공
        const text = JSON.parse(`${data.substring(data.indexOf('['), data.indexOf(']'))}]`)[0];

        interface FortuneItem {
          name: string;
          content: string;
        }
        const patterns: { name: string; start: string; end: string }[] = [
          { name: '총운', start: '<dt class="blind">총운</dt>', end: '</dd>' },
          { name: '애정운', start: '<dt class="blind">애정운</dt>', end: '</dd>' },
          { name: '금전운', start: '<dt class="blind">금전운</dt>', end: '</dd>' },
          { name: '직장운', start: '<dt class="blind">직장운</dt>', end: '</dd>' },
          { name: '학업, 성적운', start: '<dt class="blind">학업, 성적운</dt>', end: '</dd>' },
          { name: '건강운', start: '<dt class="blind">건강운</dt>', end: '</dd>' },
        ];

        const result: FortuneItem[] = patterns.reduce((fortune: FortuneItem[], pattern) => {
          const startIndex: number = text.indexOf(pattern.start);
          if (startIndex !== -1) {
            const endIndex: number = text.indexOf(pattern.end, startIndex);
            if (endIndex !== -1) {
              const contentStartIndex: number = startIndex + pattern.start.length;
              const content: string = text.substring(contentStartIndex, endIndex).trim();
              // 운세 내용에서 <p> 태그로 시작하고 </p> 태그로 끝나는 부분 문자열을 찾음
              const matches: RegExpMatchArray | null = content.match(/<p>.*?<\/p>/g);
              // <p>태그를 제거하고 각 문단을 공백으로 연결하여 하나의 문자열로 병합
              if (matches) {
                const mergedContent: string = matches
                  .map((match) => match.replace(/<\/?p>/g, '').trim())
                  .join(' ');
                // 추출된 운세 정보를 객체 형태로 저장
                fortune.push({
                  name: pattern.name,
                  content: mergedContent,
                });
              }
            }
          }
          return fortune;
        }, []);

        setFortuneData({
          fortuneTitle: keywordText,
          fortuneDesc: result.map((item) => item.content),
        });
      } catch (error) {
        navigate('/');
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAtom, setFortuneData]);

  return isDesktop ? (
    <main className="grid-layout">
      <section className="wrap-info">
        <WhiteLogo />
        <p className="txt-info">
          오늘의 운세를 통해 영감을 받고,
          <br /> 할일을 같이 계획해봐요!
        </p>
        <Link to="/fortune" className="txt-link">
          오늘의 운세 <ArrowIcon />
        </Link>
      </section>
      <section className="todo-card">
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
