import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../../../../api/Axios';
import { SelectTabTypeAtom } from '../../../../../../atom/SelectTabTypeAtom';
import { TodoListAtom } from '../../../../../../atom/TodoListAtom';
import { BookmarkToTodo } from './BookmarkToTodoButton.styled';

interface BookmarkDeleteButtonProps {
  bookmarkId: string;
  userId: string;
}

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

export default function BookmarkToTodoButton({ bookmarkId, userId }: BookmarkDeleteButtonProps) {
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const setSelectTabTypeAtom = useSetRecoilState(SelectTabTypeAtom);
  const navigate = useNavigate();

  const handleOnClick = async (e: MouseEvent) => {
    e.stopPropagation();

    try {
      // 즐겨찾기 페이지에서 할일 페이지로 이동
      const bookmarkToCalendarResponse = await tokenInstance.post('calendar/bookmarkToCalendar', {
        userId,
        bookmarkId,
      });
      const responseText = bookmarkToCalendarResponse.data;

      // 오늘 할 일 가져오기
      const getTodoUrl = 'calendar/getToday';
      const TodoResponse = await tokenInstance.post(getTodoUrl, {
        userId,
      });
      const TodoData = TodoResponse.data;

      if (responseText === '할 일 리스트로 이동 되었습니다.') {
        setTodoListAtom(TodoData);
        setSelectTabTypeAtom('today');
        console.log('BookmarkToTodoButton');
      }
    } catch (error) {
      alert('에러가 발생했습니다.');
      navigate('/error');
    }
  };
  return (
    <BookmarkToTodo type="button" title="선택한 즐겨찾기 할 일에 추가" onClick={handleOnClick}>
      <span>즐겨찾기 항목을 오늘 할 일에 추가</span>
    </BookmarkToTodo>
  );
}
