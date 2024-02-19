import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface BookmarkListDataType {
  bookmarkId: string;
  userId: string;
  bookmarkContent: string;
  createDate: string;
}

export const BookmarkListAtom = atom<BookmarkListDataType[]>({
  key: 'BookmarkListAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
