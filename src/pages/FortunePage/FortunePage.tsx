import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserAtom } from '../../atom/UserAtom';
import { FortuneTitleAtom } from '../../atom/FortuneTitleAtom';
import {
  FortuneCardWrapper,
  CatImg,
  FortuneContentWrapper,
  FortuneTitle,
  FortuneContent,
} from './FortunePage.styled';
import Header from '../../components/Common/Header/Header';
import fortuneCat from '../../assets/images/fortune-2.png';
import { TabDataFortune } from '../../components/Common/Tab/TabData';
import Tab from '../../components/Common/Tab/Tab';

export default function FortunePage() {
  const navigate = useNavigate();
  const userAtom = useRecoilValue(UserAtom);
  const [fortuneTitle, setFortuneTitle] = useRecoilState(FortuneTitleAtom);
  const [fortuneDesc, setFortuneDesc] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

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
        // 총운에서 키워드 4글자만 뽑기
        const keywordMatch = fortune[0].keyword.match(/<b>(.*?)<\/b>/);
        const keywordText = keywordMatch ? keywordMatch[1].replace(/["'“”]/g, '') : '';
        setFortuneTitle(keywordText);
        setFortuneDesc(fortune[selectedTab].desc);
      } catch (error) {
        navigate('/error');
      }
    };
    fetchData();
  }, [
    userAtom.birthDate,
    userAtom.birthTime,
    userAtom.calendarType,
    userAtom.gender,
    navigate,

    selectedTab,
    setFortuneTitle,
  ]);

  const handleTabClick = (index) => {
    setSelectedTab(index); // 선택된 탭 인덱스 업데이트
  };

  return (
    <div>
      <FortuneCardWrapper>
        <Header title="오늘의 운세" />
        <CatImg src={fortuneCat} alt="운세 고양이 이미지" />
        <Tab tabData={TabDataFortune} onTabClick={handleTabClick} />
      </FortuneCardWrapper>
      <FortuneContentWrapper>
        <FortuneTitle>오늘의 하루는 {fortuneTitle}입니다.</FortuneTitle>
        <FortuneContent>{fortuneDesc}</FortuneContent>
      </FortuneContentWrapper>
    </div>
  );
}
