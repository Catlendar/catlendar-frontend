import React from 'react';
import { useRecoilValue } from 'recoil';
import { BookmarkListAtom } from '../../../../../atom/BookmarkListAtom';
import { SelectTabTypeAtom } from '../../../../../atom/SelectTabTypeAtom';
import { TodoListAtom } from '../../../../../atom/TodoListAtom';
import BookmarkListItem from './BookmarkListItem/BookmarkListItem';
import { NoItemText, TodoModalUl } from './TodoModalList.styled';
import TodoModalListItem from './TodoModalListItem/TodoModalListItem';
import { ModalTypeProps } from '../../Modal';

export default function TodoModalList({ date }: Pick<ModalTypeProps, 'date'>) {
  const selectTabTypeAtom = useRecoilValue(SelectTabTypeAtom);
  const todoListAtom = useRecoilValue(TodoListAtom);
  const bookmarkListAtom = useRecoilValue(BookmarkListAtom);

  console.log(todoListAtom);

  const modalItem = () => {
    if (selectTabTypeAtom === 'today') {
      if (todoListAtom.length > 0) {
        return todoListAtom.map((task) => (
          <TodoModalListItem key={task.calendarId} task={task} date={date} />
        ));
      }
      return <NoItemText>할 일이 없습니다.</NoItemText>;
    }
    if (bookmarkListAtom.length > 0) {
      return bookmarkListAtom.map((task) => (
        <BookmarkListItem key={task.bookmarkId} task={task} date={date} />
      ));
    }
    return <NoItemText>북마크된 할 일이 없습니다.</NoItemText>;
  };

  return <TodoModalUl>{modalItem()}</TodoModalUl>;
}
