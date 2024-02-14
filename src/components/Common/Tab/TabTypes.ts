interface TabMenuType {
  id: number;
  tabName: string;
}

export interface TabMenuTypeTodo extends TabMenuType {
  __type: 'todo';
}
export interface TabMenuTypeFortune extends TabMenuType {
  __type: 'fortune';
}

export interface TabProps {
  tabData: (TabMenuTypeTodo | TabMenuTypeFortune)[];
}

// getTabStyle 함수 인터페이스
interface StyleProps {
  wrapperWidth: string;
  boxDisplay: string;
  fontSize: string;
}
export interface GetTabStyle {
  (type: string | undefined): StyleProps;
}

// tab버튼 스타일드 컴포넌트의 props 타입
export interface TabButtonProps {
  isSelect: boolean;
}
export interface TabStyleProps {
  wrapperWidth: string;
  boxDisplay: string;
  fontSize: string;
}
