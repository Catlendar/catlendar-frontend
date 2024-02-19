import React from 'react';
import { useSetRecoilState } from 'recoil';
import { TodoModalOpenAtom } from '../../../atom/TodoModalOpenAtom';
import AddTodo from '../AddTodo/AddTodo';
import Tab from '../Tab/Tab';
import { TabDataTodo } from '../Tab/TabData';
import { TodoModalBackground, TodoModalWrapper } from './TodoListModal.styled';
import TodoModalList from './TodoListModal/TodoModalList/TodoModalList';

export default function TodoListModal() {
  const setTodoModalOpenAtom = useSetRecoilState(TodoModalOpenAtom);

  return (
    <TodoModalBackground onClick={() => setTodoModalOpenAtom(false)}>
      <TodoModalWrapper onClick={(e) => e.stopPropagation()}>
        <Tab tabData={TabDataTodo} />
        <TodoModalList />
        <AddTodo />
      </TodoModalWrapper>
    </TodoModalBackground>
  );
}
