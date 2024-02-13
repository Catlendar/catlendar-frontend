import React from 'react';
import TodoHeader from '../../components/Common/Header/TodoHeader';

export default function HomePage() {
  return (
    <div>
      HomePage
      <TodoHeader comletedTasks={1} totalTasks={3} />
    </div>
  );
}
