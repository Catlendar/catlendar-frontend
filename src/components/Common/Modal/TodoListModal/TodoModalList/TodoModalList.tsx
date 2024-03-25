import React from 'react';
import { useRecoilValue } from 'recoil';
import { SelectTabTypeAtom } from '../../../../../atom/SelectTabTypeAtom';
import { TodoListAtom } from '../../../../../atom/TodoListAtom';
import BookmarkListItem from './BookmarkListItem/BookmarkListItem';
import { NoItemText, TodoModalUl } from './TodoModalList.styled';
import TodoModalListItem from './TodoModalListItem/TodoModalListItem';
import { ModalTypeProps } from '../../Modal';
import useFetchBookmarks from '../../../../../hooks/useFetchBookmarks';
import { UserAtom } from '../../../../../atom/UserAtom';

export default function TodoModalList({ date }: Pick<ModalTypeProps, 'date'>) {
  const selectTabTypeAtom = useRecoilValue(SelectTabTypeAtom);
  const todoListAtom = useRecoilValue(TodoListAtom);
  const userAtom = useRecoilValue(UserAtom);

  const { data: bookmarkData, status } = useFetchBookmarks(userAtom.userId);

  const modalItem = () => {
    if (selectTabTypeAtom === 'today') {
      if (todoListAtom.length > 0) {
        return todoListAtom.map((task) => (
          <TodoModalListItem key={task.calendarId} task={task} date={date} />
        ));
      }
      return <NoItemText>할 일이 없습니다.</NoItemText>;
    }
    if (bookmarkData.length > 0) {
      return bookmarkData.map((task) => (
        <BookmarkListItem key={task.bookmarkId} task={task} date={date} />
      ));
    }
    return <NoItemText>북마크된 할 일이 없습니다.</NoItemText>;
  };

  // 로딩 상태나 에러 상태를 처리합니다.
  if (status === 'pending') {
    return <NoItemText>데이터를 불러오는 중입니다...</NoItemText>;
  }

  if (status === 'error') {
    return <NoItemText>데이터를 불러오는 데 실패했습니다.</NoItemText>;
  }

  return <TodoModalUl>{modalItem()}</TodoModalUl>;
}
