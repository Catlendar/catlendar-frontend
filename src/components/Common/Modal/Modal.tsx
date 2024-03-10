import React, { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil';
import moment from 'moment';
import { ReviseModalOpenAtom } from '../../../atom/ReviseModalOpenAtom';
import { TodoModalOpenAtom } from '../../../atom/TodoModalOpenAtom';
import ReviseTodoModal from './ReviseTodoModal';
import TodoListModal from './TodoListModal';
import WithdrawModal from './WithdrawModal';

export interface ModalTypeProps {
  type: 'revise' | 'todoList' | 'withdraw';
  date?: string;
}

const today = moment(new Date()).format('YYYY-MM-DD');
export default function Modal({ type, date }: ModalTypeProps) {
  // 모달 사용하는 page 단위로 이동
  // const [reviseOpen, setReviseOpen] = useState(false);
  // const [withdrawOpen, setWithdrawOpen] = useState(false);
  // 삭제
  const [withdrawOpen, setWithdrawOpen] = useState(true);
  const [reviseModalOpenAtom, setReviseModalOpenAtom] = useRecoilState(ReviseModalOpenAtom);
  const todoModalOpenAtom = useRecoilValue(TodoModalOpenAtom);
  const resetReviseModalOpen = useResetRecoilState(ReviseModalOpenAtom);

  useEffect(() => {
    resetReviseModalOpen();
  }, [resetReviseModalOpen]);

  const handleCloseRevise = () => {
    setReviseModalOpenAtom(!reviseModalOpenAtom);
  };
  const handleCloseWithdraw = () => {
    setWithdrawOpen(!withdrawOpen);
  };

  if (type === 'revise' && reviseModalOpenAtom)
    return <ReviseTodoModal onClose={handleCloseRevise} />;
  if (type === 'todoList' && todoModalOpenAtom) return <TodoListModal date={date} />;
  if (type === 'withdraw' && withdrawOpen) return <WithdrawModal onClose={handleCloseWithdraw} />;
  return null;
}

Modal.defaultProps = {
  date: today,
};
