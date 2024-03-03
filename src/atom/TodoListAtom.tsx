import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface TodoDataType {
  calendarId: string;
  userId: string;
  calendarDate: string;
  calendarContent: string;
  bookmark: string;
  completed: string;
  createDate: string;
}

export const TodoListAtom = atom<TodoDataType[]>({
  key: 'TodoListAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const sortedTodoListSelector = selector({
  key: 'sortedTodoListSelector',
  get: ({ get }) => {
    const todoList = get(TodoListAtom);
    return todoList.slice().sort((a, b) => {
      if (a.completed === 'N' && b.completed !== 'N') return -1;
      if (a.completed !== 'N' && b.completed === 'N') return 1;
      return 0;
    });
  },
});
