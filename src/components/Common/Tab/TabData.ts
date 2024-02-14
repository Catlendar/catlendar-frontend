import { TabMenuTypeFortune, TabMenuTypeTodo } from './TabTypes';

export const TabDataTodo: TabMenuTypeTodo[] = [
  { __type: 'todo', id: 1, tabName: '오늘' },
  { __type: 'todo', id: 2, tabName: '즐겨찾기' },
];

export const TabDataFortune: TabMenuTypeFortune[] = [
  { __type: 'fortune', id: 1, tabName: '총운' },
  { __type: 'fortune', id: 2, tabName: '애정운' },
  { __type: 'fortune', id: 3, tabName: '금전운' },
  { __type: 'fortune', id: 4, tabName: '건강운' },
  { __type: 'fortune', id: 5, tabName: '학업운' },
];
