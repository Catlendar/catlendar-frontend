import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../../../../api/Axios';
import { TodoListAtom } from '../../../../../../atom/TodoListAtom';
import { TodoModalDeleteButton } from './TodoDeleteButton.styled';
import { TodoNumAtom } from '../../../../../../atom/TodoNumAtom';

interface TodoDeleteButtonProps {
  calendarId: string;
  userId: string;
  date?: string;
}

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

export default function TodoDeleteButton({ calendarId, userId, date }: TodoDeleteButtonProps) {
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);
  const navigate = useNavigate();

  const handleOnClick = async (e: MouseEvent) => {
    e.stopPropagation();
    const newDate = String(date);

    try {
      // 선택한 할 일 삭제요청
      const deleteResponse = await tokenInstance.post('calendar/deleteCalendar', {
        userId,
        calendarId,
      });
      const deleteData = deleteResponse.data;

      // 오늘 할 일 가져오기
      const TodoResponse = await tokenInstance.post('calendar/getSpecificMonth', {
        userId,
        targetDate: date,
      });
      const TodoData = TodoResponse.data;
      if (deleteData === '삭제 되었습니다.') {
        setTodoListAtom(TodoData);
        setTodoNum({
          ...todoNum,
          [newDate]: {
            totalTodo: (todoNum[newDate]?.totalTodo || 0) - 1,
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
    <TodoModalDeleteButton type="button" title="할 일 삭제" onClick={handleOnClick}>
      <span>할 일 삭제</span>
    </TodoModalDeleteButton>
  );
}

TodoDeleteButton.defaultProps = {
  date: moment(new Date()).format('YYYY-MM-DD'),
};
