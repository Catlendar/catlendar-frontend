import React from 'react';
import {
  TodoHeaderWrapper,
  TaskTitle,
  CompletedTasks,
  AddButton,
  AddIcon,
} from './TodoHeader.styled';
import iconAdd from '../../../assets/icons/icon-add.svg';

interface HeaderProps {
  comletedTasks: number;
  totalTasks: number;
}

export default function TodoHeader({ comletedTasks, totalTasks }: HeaderProps) {
  return (
    <TodoHeaderWrapper>
      <TaskTitle>
        오늘의 할일 <CompletedTasks>{comletedTasks}</CompletedTasks> / {totalTasks}
      </TaskTitle>
      <AddButton>
        <AddIcon src={iconAdd} />
        할일 추가
      </AddButton>
    </TodoHeaderWrapper>
  );
}
