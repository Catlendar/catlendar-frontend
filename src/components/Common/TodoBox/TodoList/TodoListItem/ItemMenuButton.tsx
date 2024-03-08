import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ReviseModalOpenAtom } from '../../../../../atom/ReviseModalOpenAtom';
import { SelectTodoItemtAtom } from '../../../../../atom/SelectTodoItemAtom';
import { TodoDataType } from '../../../../../atom/TodoListAtom';

import { TodoItemMenuBtn } from './ItemMenuButton.styled';

interface ItemMenuButtonProps {
  todo: TodoDataType;
}

export default function ItemMenuButton({ todo }: ItemMenuButtonProps) {
  const setReviseModalOpenAtom = useSetRecoilState(ReviseModalOpenAtom);
  const setSelectTodoItemAtom = useSetRecoilState(SelectTodoItemtAtom);
  const handleClick = () => {
    // console.log(todo);
    setSelectTodoItemAtom(todo);
    setReviseModalOpenAtom(true);
  };
  return (
    <TodoItemMenuBtn
      type="button"
      aria-label="메뉴 버튼"
      title="할 일 삭제, 수정"
      onClick={handleClick}
    >
      <span>할 일 삭제, 수정</span>
    </TodoItemMenuBtn>
  );
}
