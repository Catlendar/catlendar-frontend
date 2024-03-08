import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import Checkbox from '../../../Checkbox/Checkbox';
import { TodoItemText, TodoItemWrapper, StyledToastContainer } from './TodoListItem.styled';
import { TodoDataType, TodoListAtom } from '../../../../../atom/TodoListAtom';
import { TodayTasksAtom } from '../../../../../atom/TodayTasksAtom';
import { tokenInstance } from '../../../../../api/Axios';
import ItemMenuButton from './ItemMenuButton';
import Modal from '../../../Modal/Modal';
import { TodoNumAtom } from '../../../../../atom/TodoNumAtom';

interface TodoListItemProps {
  todo: TodoDataType;
  date: string;
}

export default function TodoListItem({ todo, date }: TodoListItemProps) {
  const [completed, setCompleted] = useState(false);
  const [, setTodayTasksAtom] = useRecoilState(TodayTasksAtom);
  const [, setTodoNum] = useRecoilState(TodoNumAtom);

  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const navigate = useNavigate();
  const today = moment(new Date()).format('YYYY-MM-DD');

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

    try {
      // 일정 완료 토글 api 호출
      const completeCalendarResponse = await tokenInstance.post('calendar/completeCalendar', {
        userId: todo.userId,
        calendarId: todo.calendarId,
      });

      // 변경된 할 일 가져오기
      // 오늘 할 일 목록을 가져와서 업데이트 해준다. -> 다른 날이면 getSpecificMonth
      const getTodayResponse = await tokenInstance.post(
        today === date ? 'calendar/getToday' : 'calendar/getSpecificMonth',
        today === date
          ? {
              userId: todo.userId,
            }
          : {
              userId: todo.userId,
              targetDate: date,
            },
      );

      const totalTasks = getTodayResponse.data.length;
      const completedTasks = getTodayCompletedTasks(getTodayResponse.data);

      if (completeCalendarResponse.data === '변경 되었습니다.') {
        setTodoListAtom(getTodayResponse.data);
        setTodayTasksAtom({ totalTasks, completedTasks });
        setTodoNum((prevTodoNum) => ({
          ...prevTodoNum,
          [date]: { totalTodo: totalTasks, completedTodo: completedTasks },
        }));
        setCompleted((prev) => !prev);
        toast.success('일정을 완료했어요! 잘했어요 🍀');
      }
    } catch (error) {
      alert('일정 완료 기능 에러');
      navigate('/error');
    }
  };

  return (
    <>
      <StyledToastContainer
        position="bottom-center"
        autoClose={1000}
        closeButton={false}
        icon={false}
        hideProgressBar
      />
      <TodoItemWrapper>
        <Checkbox checked={completed} onClick={handleClick} />
        <TodoItemText completed={completed}>{todo.calendarContent}</TodoItemText>
        <ItemMenuButton todo={todo} />
        <Modal type="revise" />
      </TodoItemWrapper>
    </>
  );
}
