import React from 'react';
import TodoHeader from '../../components/Common/Header/TodoHeader';
import MainCard from '../../components/MainCard/MainCard';

export default function HomePage() {
  return (
    <div>
      <MainCard />
      <TodoHeader comletedTasks={1} totalTasks={3} />
    </div>
  );
}
