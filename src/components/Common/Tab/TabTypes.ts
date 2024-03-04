export type TabValue =
  | 'today'
  | 'bookmark'
  | 'totalFortune'
  | 'love'
  | 'money'
  | 'work'
  | 'study'
  | 'health';

interface TabMenuType {
  id: number;
  tabName: string;
  tabValue: TabValue;
}

export interface TabMenuTypeTodo extends TabMenuType {
  __type: 'todo';
}
export interface TabMenuTypeFortune extends TabMenuType {
  __type: 'fortune';
}

export interface TabProps {
  tabData: (TabMenuTypeTodo | TabMenuTypeFortune)[];
  onTabClick?: (tabId: number) => void;
}

// getTabStyle 함수 인터페이스
interface StyleProps {
  wrapperWidth: string;
  boxDisplay: string;
  fontSize: string;
  justifyContent: string;
  paddingTop: string;
}
export interface GetTabStyle {
  (type: string | undefined): StyleProps;
}

// tab버튼 스타일드 컴포넌트의 props 타입
export interface TabButtonProps {
  selecttab: boolean;
}
export interface TabStyleProps {
  wrapperWidth: string;
  boxDisplay: string;
  fontSize: string;
  justifyContent: string;
  paddingTop: string;
}
