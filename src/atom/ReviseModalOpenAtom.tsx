import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const ReviseModalOpenAtom = atom({
  key: 'ReviseModalOpenAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
