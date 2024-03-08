import { TabMenuTypeFortune, TabMenuTypeTodo } from './TabTypes';

export const TabDataTodo: TabMenuTypeTodo[] = [
  { __type: 'todo', id: 1, tabName: '할 일', tabValue: 'today' },
  { __type: 'todo', id: 2, tabName: '즐겨찾기', tabValue: 'bookmark' },
];

export const TabDataFortune: TabMenuTypeFortune[] = [
  { __type: 'fortune', id: 0, tabName: '총운', tabValue: 'totalFortune' },
  { __type: 'fortune', id: 1, tabName: '애정운', tabValue: 'love' },
  { __type: 'fortune', id: 2, tabName: '재물운', tabValue: 'money' },
  { __type: 'fortune', id: 3, tabName: '직장운', tabValue: 'work' },
  { __type: 'fortune', id: 4, tabName: '학업운', tabValue: 'study' },
  { __type: 'fortune', id: 5, tabName: '건강운', tabValue: 'health' },
];
