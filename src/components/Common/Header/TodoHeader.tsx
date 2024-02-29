import React from 'react';
import moment from 'moment';
import { useSetRecoilState } from 'recoil';
import { TodoModalOpenAtom } from '../../../atom/TodoModalOpenAtom';
import {
  TodoHeaderWrapper,
  TaskTitle,
  CompletedTasks,
  AddButton,
  AddIcon,
} from './TodoHeader.styled';
import iconAdd from '../../../assets/icons/icon-add.svg';

interface HeaderProps {
  date: string;
  comletedTasks: number;
  totalTasks: number;
}

export default function TodoHeader({ date, comletedTasks, totalTasks }: HeaderProps) {
  const setTodoModalOpenAtom = useSetRecoilState(TodoModalOpenAtom);
  const today = moment(new Date()).format('YYYY-MM-DD');

  return (
    <TodoHeaderWrapper>
      {date === today ? (
        <TaskTitle>
          오늘의 할일 <CompletedTasks>{comletedTasks}</CompletedTasks> / {totalTasks}
        </TaskTitle>
      ) : (
        <TaskTitle>
          {date.split('-')[1]}월 {date.split('-')[2]}일
          <CompletedTasks> {comletedTasks}</CompletedTasks> / {totalTasks}
        </TaskTitle>
      )}
      {date < today ? (
        <span />
      ) : (
        <AddButton
          onClick={() => setTodoModalOpenAtom((prev) => !prev)}
          title="할일 추가 모달 오픈"
        >
          <AddIcon src={iconAdd} />
          할일 추가
        </AddButton>
      )}
    </TodoHeaderWrapper>
  );
}
