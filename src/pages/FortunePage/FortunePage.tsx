import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fortuneDataAtom, selectedTabAtom } from '../../atom/FortuneStateAtom';
import { SelectTabTypeAtom } from '../../atom/SelectTabTypeAtom';
import {
  FortuneWrapper,
  FortuneCardBox,
  CatImg,
  FortuneContentBox,
  FortuneTitle,
  FortuneContent,
  MoreButton,
} from './FortunePage.styled';
import { FortuneCatImg, fortuneCats } from './fortuneCats';
import Header from '../../components/Common/Header/Header';
import { TabDataFortune } from '../../components/Common/Tab/TabData';
import Tab from '../../components/Common/Tab/Tab';

export default function FortunePage() {
  const [currentImg, setCurrentImg] = useState<FortuneCatImg | undefined>(undefined);
  const [isShowMoreMap, setIsShowMoreMap] = useState<{ [key: string]: boolean }>({});
  const [textLimit, setTextLimit] = useState<number>(200);
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);
  const [selectedTabValue, setSelectedTabValue] = useRecoilState(SelectTabTypeAtom);
  const fortuneData = useRecoilValue(fortuneDataAtom);

  useEffect(() => {
    const randomImgIndex = Math.floor(Math.random() * fortuneCats.length);
    setCurrentImg(fortuneCats[randomImgIndex]);
    setSelectedTabValue('totalFortune');
  }, [setSelectedTabValue]);

  const getFortuneTitle = (selectedTabType: string): string => {
    switch (selectedTabType) {
      case 'totalFortune':
        return `오늘의 하루는 ${fortuneData.fortuneTitle}입니다.`;
      case 'love':
        return '오늘의 애정운입니다.';
      case 'money':
        return '오늘의 재물운입니다.';
      case 'work':
        return '오늘의 직장운입니다.';
      case 'study':
        return '오늘의 학업운입니다.';
      case 'health':
        return '오늘의 건강운입니다.';
      default:
        return '운세 정보가 없습니다.';
    }
  };

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const showFortune = fortuneData.fortuneDesc[selectedTab];

  const showFortuneDesc = () => {
    if (!showFortune) {
      return parse('운세 데이터를 불러오는 데 실패했습니다.');
    }

    const formattedDesc = showFortune.split('. ').join('.<br/>');

    return parse(formattedDesc);
  };

  return (
    <FortuneWrapper>
      <FortuneCardBox>
        {currentImg && <CatImg src={currentImg.src} alt={currentImg.alt} loading="lazy" />}
        <Tab tabData={TabDataFortune} onTabClick={handleTabClick} selectedTab={selectedTab} />
      </FortuneCardBox>
      <FortuneContentBox>
        <FortuneTitle>{getFortuneTitle(selectedTabValue)}</FortuneTitle>
        <FortuneContent>{showFortuneDesc()}</FortuneContent>
      </FortuneContentBox>
    </FortuneWrapper>
  );
}
