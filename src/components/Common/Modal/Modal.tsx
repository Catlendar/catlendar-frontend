import React from 'react';
import ReviseTodoModal from './ReviseTodoModal';
import TodoListModal from './TodoListModal';
import WithdrawModal from './WithdrawModal';

interface ModalTypeProps {
  type: 'revise' | 'todoList' | 'withdraw';
}

export default function Modal({ type }: ModalTypeProps) {
  if (type === 'revise') return <ReviseTodoModal />;
  if (type === 'todoList') return <TodoListModal />;
  if (type === 'withdraw') return <WithdrawModal />;
  return null;
}
