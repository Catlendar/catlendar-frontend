import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserAtom = atom({
  key: 'UserAtom',
  default: {
    userId: '',
    email: '',
    name: '',
    birthDate: '',
    birthTime: '',
    calendarType: '',
    gender: '',
    registDate: '',
    token: '',
  },
  effects_UNSTABLE: [persistAtom],
});
