import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../../../../api/Axios';
import { TodoListAtom } from '../../../../../../atom/TodoListAtom';
import { TodoModalDeleteButton } from './TodoDeleteButton.styled';

interface TodoDeleteButtonProps {
  calendarId: string;
  userId: string;
}

type MouseEvent = React.MouseEvent<HTMLButtonElement>;

export default function TodoDeleteButton({ calendarId, userId }: TodoDeleteButtonProps) {
  const setTodiListAtom = useSetRecoilState(TodoListAtom);
  const navigate = useNavigate();

  const handleOnClick = async (e: MouseEvent) => {
    e.stopPropagation();

    try {
      // 선택한 할 일 삭제요청
      const deleteResponse = await tokenInstance.post(
        'http://54.66.123.168:8080/calendar/deleteCalendar',
        {
          userId,
          calendarId,
        },
      );
      console.log(deleteResponse);
      const deleteData = deleteResponse.data;

      // 오늘 할 일 가져오기
      const TodoResponse = await tokenInstance.post('http://54.66.123.168:8080/calendar/getToday', {
        userId,
      });
      const TodoData = TodoResponse.data;
      if (deleteData === '삭제 되었습니다.') {
        setTodiListAtom(TodoData);
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
