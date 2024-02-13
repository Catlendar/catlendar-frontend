/* eslint no-underscore-dangle: 0 */

import { useState } from 'react';
import { TabBox, TabButton, TabWrapper } from './Tab.styled';
import { GetTabStyle, TabProps } from './TabTypes';

export default function Tab({ tabData }: TabProps) {
  const [selectedTab, setSelectedTab] = useState<number | undefined>(tabData[0]?.id);

  const TabType = tabData[0]?.__type;

  const getTabStyle: GetTabStyle = (type) => {
    switch (type) {
      case 'todo':
        return {
          wrapperWidth: '312px',
          boxDisplay: 'block',
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
          boxDisplay: 'block',
          fontSize: 'var(--large-font-size)',
        };
    }
  };
  // interface GetTodo {
  // 	(userId: number):
  // }

  const getTodo = async (userId: string) => {
    try {
      const response = await fetch('http://54.66.123.168:8080/calendar/getToday', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaXdhbjAwMUBjaG9pLmNvbSIsImlhdCI6MTcwNzgzODc0MywiZXhwIjoxNzA3ODgxOTQzfQ.f0OyND0h5jUAuiHcRuPOU8ILEcGj01FJMvY8oRn4kos',
        },
        body: JSON.stringify({ userId }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const tabStyle = getTabStyle(TabType);
  return (
    <TabWrapper tabStyle={tabStyle}>
      <TabBox tabStyle={tabStyle}>
        {tabData.map((tab) => (
          <TabButton
            key={tab.id}
            onClick={() => {
              setSelectedTab(tab.id);
              getTodo('5');
            }}
            isSelect={selectedTab === tab.id}
          >
            {tab.tabName}
          </TabButton>
        ))}
      </TabBox>
    </TabWrapper>
  );
}
