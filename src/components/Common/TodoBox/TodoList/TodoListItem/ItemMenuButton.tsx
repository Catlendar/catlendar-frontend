import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ReviseModalOpenAtom } from '../../../../../atom/ReviseModalOpenAtom';

import { TodoItemMenuBtn } from './ItemMenuButton.styled';

interface ItemMenuButtonProps {
  calendarContent: string;
}

export default function ItemMenuButton({ calendarContent }: ItemMenuButtonProps) {
  const setReviseModalOpenAtom = useSetRecoilState(ReviseModalOpenAtom);
  const handleClick = () => {
    console.log(calendarContent);
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
