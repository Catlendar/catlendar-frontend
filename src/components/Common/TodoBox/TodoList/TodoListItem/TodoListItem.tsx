import React from 'react';
import Checkbox from '../../../Checkbox/Checkbox';
import { TodoItemMenuBtn, TodoItemText, TodoItemWrapper } from './TodoListItem.styled';
import Icon from '../../../../../assets/icons/icon-meatball.svg';
import { TodoDataType } from '../../../../../atom/TodoListAtom';

interface TodoListItemProps {
  todo: TodoDataType;
}

export default function TodoListItem({ todo }: TodoListItemProps) {
  const handleClick = () => {
    console.log('check');
  };
  return (
    <TodoItemWrapper>
      <Checkbox checked={false} onClick={handleClick} />
      <TodoItemText>{todo.calendarContent}</TodoItemText>
      <TodoItemMenuBtn onClick={() => console.log('cc')} type="button" aria-label="메뉴 버튼">
        <img src={Icon} alt="" />
      </TodoItemMenuBtn>
    </TodoItemWrapper>
  );
}
