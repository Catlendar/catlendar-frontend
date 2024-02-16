import React from 'react';
import Checkbox from '../../../Checkbox/Checkbox';
import { TodoItemMenuBtn, TodoItemText, TodoItemWrapper } from './TodoListItem.styled';
import Icon from '../../../../../assets/icons/icon-meatball.svg';

export default function TodoListItem() {
  const handleClick = () => {
    console.log('check');
  };
  return (
    <TodoItemWrapper>
      <Checkbox checked={false} onClick={handleClick} />
      <TodoItemText>sss</TodoItemText>
      <TodoItemMenuBtn onClick={() => console.log('cc')} type="button" aria-label="메뉴 버튼">
        <img src={Icon} alt="" />
      </TodoItemMenuBtn>
    </TodoItemWrapper>
  );
}
