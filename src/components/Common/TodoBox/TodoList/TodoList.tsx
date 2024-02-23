import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoListAtom } from '../../../../atom/TodoListAtom';
import { TodoListUl, TodoListWrapper } from './TodoList.styled';
import TodoListItem from './TodoListItem/TodoListItem';

export default function TodoList() {
  const todoListAtom = useRecoilValue(TodoListAtom);
  console.log(todoListAtom);

  return (
    <TodoListWrapper>
      <TodoListUl>
        {todoListAtom.length === 0 ? (
          <p>오늘의 할일을 추가해보세요.</p>
        ) : (
          todoListAtom.map((todo) => <TodoListItem todo={todo} key={todo.calendarId} />)
        )}
      </TodoListUl>
    </TodoListWrapper>
  );
}
