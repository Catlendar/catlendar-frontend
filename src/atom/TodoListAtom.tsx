import { atom } from 'recoil';
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
