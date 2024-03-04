import React from 'react';
import { useRecoilValue } from 'recoil';
import { SelectTabTypeAtom } from '../../../atom/SelectTabTypeAtom';
import BookmarkAdd from './BookmarkAdd';
import TodoAdd from './TodoAdd';
import { ModalTypeProps } from '../Modal/Modal';

export default function AddModalInput({ date }: Pick<ModalTypeProps, 'date'>) {
  const selectTabTypeAtom = useRecoilValue(SelectTabTypeAtom);

  // React.ReactElement | null 타입은 완성된 jsx 요소와 null 만 허용합니다.
  // 즉, component 변수에는 컴포넌트와 null 만 할당할 수 있습니다.
  let component: React.ReactElement | null = null;

  if (selectTabTypeAtom === 'today') {
    component = <TodoAdd date={date} />;
  } else if (selectTabTypeAtom === 'bookmark') {
    component = <BookmarkAdd />;
  }

  return component;
}
