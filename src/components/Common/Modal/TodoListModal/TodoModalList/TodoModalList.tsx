import React from 'react';
import { useRecoilValue } from 'recoil';
import { BookmarkListAtom } from '../../../../../atom/BookmarkListAtom';
import { SelectTabTypeAtom } from '../../../../../atom/SelectTabTypeAtom';
import { TodoListAtom } from '../../../../../atom/TodoListAtom';
import BookmarkListItem from './BookmarkListItem/BookmarkListItem';
import { TodoModalUl } from './TodoModalList.styled';
import TodoModalListItem from './TodoModalListItem/TodoModalListItem';

export default function TodoModalList() {
  const selectTabTypeAtom = useRecoilValue(SelectTabTypeAtom);
  const todoListAtom = useRecoilValue(TodoListAtom);
  const bookmarkListAtom = useRecoilValue(BookmarkListAtom);

  // 클릭한 탭이 오늘이면 TodoModalListItem의 type이 today
  // 클릭한 탭이 오늘이면 TodoModalListItem의 type이 bookmark
  return (
    <TodoModalUl>
      {selectTabTypeAtom === 'today'
        ? todoListAtom.map((task) => (
            <TodoModalListItem key={task.calendarId} type="today" task={task} />
          ))
        : bookmarkListAtom.map((task) => (
            <BookmarkListItem key={task.bookmarkId} type="bookmark" task={task} />
          ))}
    </TodoModalUl>
  );
}
