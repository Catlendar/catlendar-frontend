import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface TodayTasks {
  totalTasks: number;
  completedTasks: number;
}

export const TodayTasksAtom = atom<TodayTasks>({
  key: 'TodayTasksAtom',
  default: {
    totalTasks: 0,
    completedTasks: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
