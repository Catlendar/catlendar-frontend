import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { TodoDataType } from './TodoListAtom';

const { persistAtom } = recoilPersist();

export const SelectTodoItemtAtom = atom<TodoDataType>({
  key: 'SelectTodoItemtAtom',
  default: {
    calendarId: '',
    userId: '',
    calendarDate: '',
    calendarContent: '',
    bookmark: '',
    completed: '',
    createDate: '',
  },
  effects_UNSTABLE: [persistAtom],
});
