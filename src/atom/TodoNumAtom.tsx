import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const TodoNumAtom = atom({
  key: 'todoNumAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
