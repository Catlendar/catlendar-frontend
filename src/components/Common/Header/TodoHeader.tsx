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
  const parts = date.split('-');
  const month = parts[1]?.startsWith('0') ? parts[1].substring(1) : parts[1];
  const day = parts[2]?.startsWith('0') ? parts[2].substring(1) : parts[2];
  const formattedDate = `${month}월 ${day}일`;

  return (
    <TodoHeaderWrapper>
      {date === today ? (
        <TaskTitle>
          오늘의 할일 <CompletedTasks>{comletedTasks}</CompletedTasks> / {totalTasks}
        </TaskTitle>
      ) : (
        <TaskTitle>
          {formattedDate}
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
          <AddIcon src={iconAdd} alt="할 일 추가 아이콘" />
          <span>할 일 추가</span>
        </AddButton>
      )}
    </TodoHeaderWrapper>
  );
}
