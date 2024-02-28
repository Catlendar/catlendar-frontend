import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../../Checkbox/Checkbox';
import { TodoItemMenuBtn, TodoItemText, TodoItemWrapper } from './TodoListItem.styled';
import Icon from '../../../../../assets/icons/icon-meatball.svg';
import { TodoDataType, TodoListAtom } from '../../../../../atom/TodoListAtom';
import { TodayTasksAtom } from '../../../../../atom/TodayTasksAtom';
import { tokenInstance } from '../../../../../api/Axios';

interface TodoListItemProps {
  todo: TodoDataType;
}

export default function TodoListItem({ todo }: TodoListItemProps) {
  const [completed, setCompleted] = useState(false);
  const [todayTasksAtom, setTodayTasksAtom] = useRecoilState(TodayTasksAtom);
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (todo.completed === 'Y') setCompleted(true);
    else setCompleted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTodayCompletedTasks = (data: TodoDataType[]) => {
    let completedTasks = 0;
    data.forEach((item) => {
      if (item.completed === 'Y') completedTasks += 1;
    });
    return completedTasks;
  };

  const handleClick = async () => {
    console.log('check');
    try {
      // 일정 완료 토글 api 호출
      const completeCalendarResponse = await tokenInstance.post('calendar/completeCalendar', {
        userId: todo.userId,
        calendarId: todo.calendarId,
      });

      // 변경된 할 일 가져오기
      // 오늘 할 일 목록을 가져와서 업데이트 해준다.
      const getTodayResponse = await tokenInstance.post('calendar/getToday', {
        userId: todo.userId,
      });
      console.log(getTodayResponse);
      const totalTasks = getTodayResponse.data.length;
      const completedTasks = getTodayCompletedTasks(getTodayResponse.data);

      if (completeCalendarResponse.data === '변경 되었습니다.') {
        setTodoListAtom(getTodayResponse.data);
        setTodayTasksAtom({ totalTasks, completedTasks });
        setCompleted((prev) => !prev);
      }
    } catch (error) {
      alert('일정 완료 기능 에러');
      navigate('/error');
    }
  };
  return (
    <TodoItemWrapper>
      <Checkbox checked={completed} onClick={handleClick} />
      <TodoItemText completed={completed}>{todo.calendarContent}</TodoItemText>
      <TodoItemMenuBtn onClick={() => console.log('cc')} type="button" aria-label="메뉴 버튼">
        <img src={Icon} alt="" />
      </TodoItemMenuBtn>
    </TodoItemWrapper>
  );
}
