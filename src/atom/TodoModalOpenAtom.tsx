import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const TodoModalOpenAtom = atom({
  key: 'TodoModalOpenAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
