import React from 'react';
import Modal from '../../components/Common/Modal/Modal';
import TodoHeader from '../../components/Common/Header/TodoHeader';

export default function HomePage() {
  return (
    <div>
      <Modal type="revise" />
      <Modal type="withdraw" />
      <TodoHeader comletedTasks={1} totalTasks={3} />
    </div>
  );
}
