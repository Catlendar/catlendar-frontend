import React from 'react';
import { TodoModalUl } from './TodoModalList.styled';
import TodoModalListItem from './TodoModalListItem/TodoModalListItem';

export default function TodoModalList() {
  return (
    <TodoModalUl>
      <TodoModalListItem />
      <TodoModalListItem />
      <TodoModalListItem />
    </TodoModalUl>
  );
}
