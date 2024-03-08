import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import moment from 'moment';
import { tokenInstance } from '../../../../../../api/Axios';
import { SelectTabTypeAtom } from '../../../../../../atom/SelectTabTypeAtom';
import { TodoListAtom } from '../../../../../../atom/TodoListAtom';
import { BookmarkToTodo } from './BookmarkToTodoButton.styled';
import { TodoNumAtom } from '../../../../../../atom/TodoNumAtom';

interface BookmarkDeleteButtonProps {
  bookmarkId: string;
  userId: string;
  date?: string;
}

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

export default function BookmarkToTodoButton({
  bookmarkId,
  userId,
  date,
}: BookmarkDeleteButtonProps) {
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const setSelectTabTypeAtom = useSetRecoilState(SelectTabTypeAtom);
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);
  const navigate = useNavigate();

  const handleOnClick = async (e: MouseEvent) => {
    e.stopPropagation();

    try {
      // 즐겨찾기 페이지에서 할일 페이지로 이동
      const bookmarkToCalendarResponse = await tokenInstance.post('calendar/bookmarkToCalendar', {
        userId,
        bookmarkId,
        targetDate: date,
      });
      const responseText = bookmarkToCalendarResponse.data;

      // 오늘 할 일 가져오기
      // const getTodoUrl = 'calendar/getToday';
      const getTodoUrl = 'calendar/getSpecificMonth';
      const TodoResponse = await tokenInstance.post(getTodoUrl, {
        userId,
        targetDate: date,
      });
      const TodoData = TodoResponse.data;
      const newDate = String(date);
      if (responseText === '할 일 리스트로 이동 되었습니다.') {
        setTodoListAtom(TodoData);
        setSelectTabTypeAtom('today');
        setTodoNum({
          ...todoNum,
          [newDate]: {
            totalTodo: (todoNum[newDate]?.totalTodo || 0) + 1,
            completedTodo: todoNum[newDate]?.completedTodo || 0,
          },
        });
      }
    } catch (error) {
      alert('에러가 발생했습니다.');
      navigate('/error');
    }
  };
  return (
    <BookmarkToTodo type="button" title="선택한 즐겨찾기 할 일에 추가" onClick={handleOnClick}>
      <span>즐겨찾기 항목을 할 일 목록에 추가</span>
    </BookmarkToTodo>
  );
}

BookmarkToTodoButton.defaultProps = {
  date: moment(new Date()).format('YYYY-MM-DD'),
};
