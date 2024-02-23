import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const FortuneTitleAtom = atom({
  key: 'fortuneTitleState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
