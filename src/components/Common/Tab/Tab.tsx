/* eslint no-underscore-dangle: 0 */

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SelectTabTypeAtom } from '../../../atom/SelectTabTypeAtom';
import { TabBox, TabButton, TabWrapper } from './Tab.styled';
import TabCloseButton from './TabCloseButton';
import { GetTabStyle, TabProps, TabMenuTypeTodo, TabMenuTypeFortune } from './TabTypes';

export default function Tab({ tabData, onTabClick }: TabProps) {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(tabData[0]?.id);
  const [selectTabTypeAtom, setSelectTabTypeAtom] = useRecoilState(SelectTabTypeAtom);

  const TabType = tabData[0]?.__type;

  // 현재 탭이 할 일 탭인지, 운세 탭인지 구분해서 스타일 반환
  const getTabStyle: GetTabStyle = (type) => {
    switch (type) {
      case 'todo':
        return {
          wrapperWidth: '312px',
          boxDisplay: 'flex',
          justifyContent: 'space-between',
          fontSize: 'var(--large-font-size)',
          paddingTop: '0rem',
        };
      case 'fortune':
        return {
          wrapperWidth: '100%',
          boxDisplay: 'flex',
          justifyContent: 'center',
          fontSize: 'var(--small-font-size)',
          paddingTop: '1rem',
        };
      default:
        return {
          wrapperWidth: '312px',
          boxDisplay: 'flex',
          justifyContent: 'space-between',
          fontSize: 'var(--large-font-size)',
          paddingTop: '0rem',
        };
    }
  };
  const tabStyle = getTabStyle(TabType);

  // 오늘 할일 탭 클릭
  const handleTodayTabClick = async () => {
    console.log('handleTodayTabClick!');
    setSelectTabTypeAtom('today');
  };
  // 즐겨찾기 탭 클릭
  const handleBookmarkTabClick = async () => {
    console.log('handleBookmarkTabClick!');
    setSelectTabTypeAtom('bookmark');
  };

  // 운세 api 호출
  const handleFortuneTabClick = (tab: TabMenuTypeTodo | TabMenuTypeFortune) => {
    console.log('운세 찾기 실행');
    console.log(tab);
  };

  // 클릭한 탭이 할 일 탭인지, 운세 탭인지 구분
  // 흐름 : todo => handleTodayTabClick(오늘 할 일 탭) : handleBookmarkTabClick(즐겨찾기 탭)
  // 흐름 : fortune => handleFortuneTabClick(운세 탭 이라면)
  const handleTabClick = (tab: TabMenuTypeTodo | TabMenuTypeFortune) => {
    setSelectedTab(tab.id);
    setSelectTabTypeAtom(tab.tabValue);
    onTabClick?.(tab.id);
    console.log(tab);
    if (tab.__type === 'todo') {
      if (tab.tabName === '할 일') {
        handleTodayTabClick();
      } else {
        handleBookmarkTabClick();
      }
    } else if (tab.__type === 'fortune') {
      handleFortuneTabClick(tab);
    }
  };

  return (
    <TabWrapper tabstyle={tabStyle}>
      <TabBox tabstyle={tabStyle}>
        <div>
          {tabData.map((tab) => (
            <TabButton
              key={tab.id}
              onClick={() => {
                handleTabClick(tab);
              }}
              selecttab={selectTabTypeAtom === tab.tabValue}
            >
              {tab.tabName}
            </TabButton>
          ))}
        </div>
        {TabType === 'todo' ? <TabCloseButton /> : null}
      </TabBox>
    </TabWrapper>
  );
}
