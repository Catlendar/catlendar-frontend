import React from 'react';
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

  const handleOnClick = async (e: MouseEvent) => {
    e.stopPropagation();
    console.log(calendarId);
    console.log(userId);
    // 선택한 할 일 삭제요청
    const deleteUrl = 'http://54.66.123.168:8080/calendar/deleteCalendar';
    const deleteResponse = await tokenInstance.post(deleteUrl, {
      userId,
      calendarId,
    });
    console.log(deleteResponse);
    const deleteData = deleteResponse.data;

    // 오늘 할 일 가져오기
    const getTodoUrl = 'http://54.66.123.168:8080/calendar/getToday';
    const TodoResponse = await tokenInstance.post(getTodoUrl, {
      userId,
    });
    const TodoData = TodoResponse.data;
    if (deleteData === '삭제 되었습니다.') {
      setTodiListAtom(TodoData);
    }
  };

  return (
    <TodoModalDeleteButton type="button" title="할 일 삭제" onClick={handleOnClick}>
      <span>할 일 삭제</span>
    </TodoModalDeleteButton>
  );
}
