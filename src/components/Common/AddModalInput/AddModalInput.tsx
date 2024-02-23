import React from 'react';
import { useRecoilValue } from 'recoil';
import { SelectTabTypeAtom } from '../../../atom/SelectTabTypeAtom';
import BookmarkAdd from './BookmarkAdd';
import TodoAdd from './TodoAdd';

export default function AddModalInput() {
  const selectTabTypeAtom = useRecoilValue(SelectTabTypeAtom);

  // React.ReactElement | null 타입은 완성된 jsx 요소와 null 만 허용합니다.
  // 즉, component 변수에는 컴포넌트와 null 만 할당할 수 있습니다.
  let component: React.ReactElement | null = null;

  if (selectTabTypeAtom === 'today') {
    component = <TodoAdd />;
  } else if (selectTabTypeAtom === 'bookmark') {
    component = <BookmarkAdd />;
  }

  return component;
}
