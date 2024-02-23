import { TabMenuTypeFortune, TabMenuTypeTodo } from './TabTypes';

export const TabDataTodo: TabMenuTypeTodo[] = [
  { __type: 'todo', id: 1, tabName: '오늘', tabValue: 'today' },
  { __type: 'todo', id: 2, tabName: '즐겨찾기', tabValue: 'bookmark' },
];

export const TabDataFortune: TabMenuTypeFortune[] = [
  { __type: 'fortune', id: 1, tabName: '총운', tabValue: 'totalFortune' },
  { __type: 'fortune', id: 2, tabName: '애정운', tabValue: 'love' },
  { __type: 'fortune', id: 3, tabName: '금전운', tabValue: 'money' },
  { __type: 'fortune', id: 4, tabName: '건강운', tabValue: 'health' },
  { __type: 'fortune', id: 5, tabName: '학업운', tabValue: 'study' },
];
