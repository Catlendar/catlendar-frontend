import React from 'react';
import { useRecoilValue } from 'recoil';
import { BookmarkListAtom } from '../../../../../atom/BookmarkListAtom';
import { SelectTabTypeAtom } from '../../../../../atom/SelectTabTypeAtom';
import { TodoListAtom } from '../../../../../atom/TodoListAtom';
import BookmarkListItem from './BookmarkListItem/BookmarkListItem';
import { TodoModalUl } from './TodoModalList.styled';
import TodoModalListItem from './TodoModalListItem/TodoModalListItem';
import { ModalTypeProps } from '../../Modal';

export default function TodoModalList({ date }: Pick<ModalTypeProps, 'date'>) {
  const selectTabTypeAtom = useRecoilValue(SelectTabTypeAtom);
  const todoListAtom = useRecoilValue(TodoListAtom);
  const bookmarkListAtom = useRecoilValue(BookmarkListAtom);

  // 클릭한 탭이 오늘이면 TodoModalListItem의 type이 today
  // 클릭한 탭이 오늘이면 TodoModalListItem의 type이 bookmark
  // 타입이 꼭 필요한가?? 일단 지움
  return (
    <TodoModalUl>
      {selectTabTypeAtom === 'today'
        ? todoListAtom.map((task) => (
            // <TodoModalListItem key={task.calendarId} type="today" task={task} date={date} />
            <TodoModalListItem key={task.calendarId} task={task} date={date} />
          ))
        : bookmarkListAtom.map((task) => (
            // <BookmarkListItem key={task.bookmarkId} type="bookmark" task={task} date={date} />
            <BookmarkListItem key={task.bookmarkId} task={task} date={date} />
          ))}
    </TodoModalUl>
  );
}
