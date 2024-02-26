import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type fortuneDataAtom = {
  fortuneTitle: string;
  fortuneDesc: string[];
};

export const fortuneDataAtom = atom<fortuneDataAtom>({
  key: 'fortuneData',
  default: { fortuneTitle: '', fortuneDesc: [] },
  effects_UNSTABLE: [persistAtom],
});

export const selectedTabAtom = atom<number>({
  key: 'selectedTab',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
