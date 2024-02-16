import { TodoListUl, TodoListWrapper } from './TodoList.styled';
import TodoListItem from './TodoListItem/TodoListItem';

export default function TodoList() {
  return (
    <TodoListWrapper>
      <TodoListUl>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </TodoListUl>
    </TodoListWrapper>
  );
}
