import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fortuneDataAtom, selectedTabAtom } from '../../atom/FortuneStateAtom';
import {
  FortuneCardWrapper,
  CatImg,
  FortuneContentWrapper,
  FortuneTitle,
  FortuneContent,
} from './FortunePage.styled';
import { FortuneCatImg, fortuneCats } from './fortuneCats';
import Header from '../../components/Common/Header/Header';
import { TabDataFortune } from '../../components/Common/Tab/TabData';
import Tab from '../../components/Common/Tab/Tab';

export default function FortunePage() {
  const [currentImg, setCurrentImg] = useState<FortuneCatImg | undefined>(undefined);
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);
  const fortuneData = useRecoilValue(fortuneDataAtom);

  useEffect(() => {
    const randomImgIndex = Math.floor(Math.random() * fortuneCats.length);
    setCurrentImg(fortuneCats[randomImgIndex]);
  }, []);

  const getFortuneTitle = (index: number): string => {
    switch (index) {
      case 0:
        return `오늘의 하루는 ${fortuneData.fortuneTitle}입니다.`;
      case 1:
        return '오늘의 애정운입니다.';
      case 2:
        return '오늘의 재물운입니다.';
      case 3:
        return '오늘의 직장운입니다.';
      case 4:
        return '오늘의 학업운입니다.';
      case 5:
        return '오늘의 건강운입니다.';
      default:
        return '운세 정보가 없습니다.';
    }
  };

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <FortuneCardWrapper>
        <Header title="오늘의 운세" />
        {currentImg && <CatImg src={currentImg.src} alt={currentImg.alt} />}
        <Tab tabData={TabDataFortune} onTabClick={handleTabClick} />
      </FortuneCardWrapper>
      <FortuneContentWrapper>
        <FortuneTitle>{getFortuneTitle(selectedTab)}</FortuneTitle>
        <FortuneContent>{fortuneData.fortuneDesc[selectedTab]}</FortuneContent>
      </FortuneContentWrapper>
    </div>
  );
}
