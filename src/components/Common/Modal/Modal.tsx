import React, { useState } from 'react';
import ReviseTodoModal from './ReviseTodoModal';
import TodoListModal from './TodoListModal';
import WithdrawModal from './WithdrawModal';

interface ModalTypeProps {
  type: 'revise' | 'todoList' | 'withdraw';
}

export default function Modal({ type }: ModalTypeProps) {
  // 모달 사용하는 page 단위로 이동
  // const [reviseOpen, setReviseOpen] = useState(false);
  // const [withdrawOpen, setWithdrawOpen] = useState(false);
  // 삭제
  const [reviseOpen, setReviseOpen] = useState(true);
  const [withdrawOpen, setWithdrawOpen] = useState(true);

  const handleCloseRevise = () => {
    setReviseOpen(!reviseOpen);
  };
  const handleCloseWithdraw = () => {
    setWithdrawOpen(!withdrawOpen);
  };
  if (type === 'revise' && reviseOpen) return <ReviseTodoModal onClose={handleCloseRevise} />;
  if (type === 'todoList') return <TodoListModal />;
  if (type === 'withdraw' && withdrawOpen) return <WithdrawModal onClose={handleCloseWithdraw} />;
  return null;
}
