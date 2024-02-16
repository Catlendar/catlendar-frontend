import { useState } from 'react';
import TodoHeader from '../Header/TodoHeader';
import { TodoBoxWrapper } from './TodoBox.styled';
import TodoList from './TodoList/TodoList';

const mock = [
  {
    calendarId: '14',
    userId: '5',
    calendarDate: '2024-02-12T15:00:00.000+00:00',
    calendarContent: '살빼기',
    bookmark: 'N',
    completed: 'N',
    createDate: '2024-02-12T15:05:41.000+00:00',
  },
  {
    calendarId: '14',
    userId: '5',
    calendarDate: '2024-02-12T15:00:00.000+00:00',
    calendarContent: '살빼기',
    bookmark: 'N',
    completed: 'N',
    createDate: '2024-02-12T15:05:41.000+00:00',
  },
  {
    calendarId: '14',
    userId: '5',
    calendarDate: '2024-02-12T15:00:00.000+00:00',
    calendarContent: '살빼기',
    bookmark: 'N',
    completed: 'Y',
    createDate: '2024-02-12T15:05:41.000+00:00',
  },
];

export default function TodoBox() {
  const [isModalOpen, setIsModalOpen] = useState();

  return (
    <TodoBoxWrapper>
      <TodoHeader comletedTasks={1} totalTasks={3} />
      <TodoList />
    </TodoBoxWrapper>
  );
}
