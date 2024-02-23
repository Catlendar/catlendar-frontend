/* eslint no-underscore-dangle: 0 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../api/Axios';
import { BookmarkListAtom } from '../../../atom/BookmarkListAtom';
import { UserAtom } from '../../../atom/UserAtom';
import { TabBox, TabButton, TabWrapper } from './Tab.styled';
import TabCloseButton from './TabCloseButton';
import { GetTabStyle, TabProps, TabMenuTypeTodo, TabMenuTypeFortune } from './TabTypes';

export default function Tab({ tabData, onTabClick }: TabProps) {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(tabData[0]?.id);
  const userAtom = useRecoilValue(UserAtom);
  const setBookmarkListAtom = useSetRecoilState(BookmarkListAtom);

  const navigate = useNavigate();
  const TabType = tabData[0]?.__type;

  // 현재 탭이 할 일 탭인지, 운세 탭인지 구분해서 스타일 반환
  const getTabStyle: GetTabStyle = (type) => {
    switch (type) {
      case 'todo':
        return {
          wrapperWidth: '312px',
          boxDisplay: 'flex',
          fontSize: 'var(--large-font-size)',
        };
      case 'fortune':
        return {
          wrapperWidth: '100%',
          boxDisplay: 'flex',
          fontSize: 'var(--small-font-size)',
        };
      default:
        return {
          wrapperWidth: '312px',
          boxDisplay: 'flex',
          fontSize: 'var(--large-font-size)',
        };
    }
  };
  const tabStyle = getTabStyle(TabType);

  // 오늘 할 일 api 호출
  const getTodo = async (userId: string) => {
    console.log('getTodo!');
    // try {
    //   const response = await fetch('http://54.66.123.168:8080/calendar/getToday', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization:
    //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaXdhbjAwMUBjaG9pLmNvbSIsImlhdCI6MTcwNzgzODc0MywiZXhwIjoxNzA3ODgxOTQzfQ.f0OyND0h5jUAuiHcRuPOU8ILEcGj01FJMvY8oRn4kos',
    //     },
    //     body: JSON.stringify({ userId }),
    //   });
    //   console.log(response);

    //   if (!response.ok) {
    //     throw new Error('error');
    //   }
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // 즐겨찾기 api 호출
  const getBookmarList = async () => {
    console.log('getFavorit!');
    const url = 'calendar/getBookmarkList';
    try {
      const response = await tokenInstance.post(url, {
        userId: userAtom.userId,
      });
      setBookmarkListAtom(response.data);
      console.log(response);
    } catch (error) {
      navigate('/error');
    }
  };

  // 운세 api 호출
  const handleFortuneTabClick = (tab: TabMenuTypeTodo | TabMenuTypeFortune) => {
    console.log('운세 찾기 실행');
    console.log(tab);
  };

  // 클릭한 탭이 할 일 탭인지, 운세 탭인지 구분
  // 흐름 : todo => getTodo(api, 오늘 할 일 탭) : getFavorite(api, 즐겨찾기 탭)
  // 흐름 : fortune => handleFortuneTabClick(운세 탭 이라면)
  const handleTabClick = (tab: TabMenuTypeTodo | TabMenuTypeFortune) => {
    setSelectedTab(tab.id);
    onTabClick?.(tab.id);
    console.log(tab);
    if (tab.__type === 'todo') {
      if (tab.tabName === '오늘') {
        getTodo('5');
      } else {
        getBookmarList();
      }
    } else {
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
              selecttab={selectedTab === tab.id}
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
