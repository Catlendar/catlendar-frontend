import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const SelectTabTypeAtom = atom<'today' | 'bookmark'>({
  key: 'SelectTabTypeAtom',
  default: 'today',
  effects_UNSTABLE: [persistAtom],
});
