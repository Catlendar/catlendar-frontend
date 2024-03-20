import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fortuneDataAtom, selectedTabAtom } from '../../atom/FortuneStateAtom';
import { SelectTabTypeAtom } from '../../atom/SelectTabTypeAtom';
import {
  FortuneCardWrapper,
  CatImg,
  FortuneContentWrapper,
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

  const handleShowMoreClick = () => {
    setIsShowMoreMap((prevState) => ({
      ...prevState,
      [selectedTab]: !prevState[selectedTab],
    }));
    setTextLimit(200);
  };

  const showFortune = fortuneData.fortuneDesc[selectedTab];
  const isShowMore = isShowMoreMap[selectedTab] || false;

  // const showFortuneDesc = () => {
  //   if (showFortune && showFortune.length > textLimit) {
  //     // 운세 내용이 있는지, 길이를 초과 하는지
  //     const shortDesc = showFortune
  //       .slice(0, isShowMore ? undefined : textLimit) // true면 전체 글자 false면 200자 이내 글자만
  //       .split('.')
  //       .join('.<br/>');
  //     const moreFortune = isShowMore ? shortDesc : `${shortDesc}...`;
  //     return parse(moreFortune);
  //   }

  //   return parse(showFortune || '운세 데이터를 불러오는 데 실패했습니다.');
  // };

  const showFortuneDesc = () => {
    if (!showFortune) {
      return parse('운세 데이터를 불러오는 데 실패했습니다.');
    }
    // 더보기 없을 때
    const shortDesc = showFortune.split('. ').join('.<br/>');

    // 더보기가 있을 때 조건문
    if (showFortune.length > textLimit) {
      const longDesc = showFortune
        .slice(0, isShowMore ? undefined : textLimit)
        .split('. ')
        .join('.<br/>');
      const moreFortune = isShowMore ? longDesc : `${longDesc}...`;

      return parse(moreFortune);
    }
    return parse(shortDesc);
  };
  return (
    <div>
      <FortuneCardWrapper>
        <Header title="오늘의 운세" />
        {currentImg && <CatImg src={currentImg.src} alt={currentImg.alt} />}
        <Tab tabData={TabDataFortune} onTabClick={handleTabClick} selectedTab={selectedTab} />
      </FortuneCardWrapper>
      <FortuneContentWrapper>
        <FortuneTitle>{getFortuneTitle(selectedTabValue)}</FortuneTitle>
        <FortuneContent>
          {showFortuneDesc()}
          {showFortune && showFortune.length > textLimit && (
            <MoreButton type="button" onClick={handleShowMoreClick}>
              {isShowMore ? '닫기' : '더 보기'}
            </MoreButton>
          )}
        </FortuneContent>
      </FortuneContentWrapper>
    </div>
  );
}
