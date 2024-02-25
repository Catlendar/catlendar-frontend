import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { TodoListAtom } from '../../../../atom/TodoListAtom';
import { TodoListUl, TodoListWrapper, MoreBtn } from './TodoList.styled';
import TodoListItem from './TodoListItem/TodoListItem';
import Icon from '../../../../assets/icons/icon-more-meatball.svg';

export default function TodoList() {
  const todoListAtom = useRecoilValue(TodoListAtom);
  const [showAll, setShowAll] = useState(false);
  console.log(todoListAtom);

  const visibleItems = showAll ? todoListAtom : todoListAtom.slice(0, 8);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <TodoListWrapper>
      <TodoListUl>
        {visibleItems.length === 0 ? (
          <p>오늘의 할일을 추가해보세요.</p>
        ) : (
          visibleItems.map((todo) => <TodoListItem todo={todo} key={todo.calendarId} />)
        )}
        {todoListAtom.length > 8 && (
          <MoreBtn className="moreBtn" onClick={toggleShowAll}>
            {showAll ? null : <img src={Icon} alt="더보기" />}
          </MoreBtn>
        )}
      </TodoListUl>
    </TodoListWrapper>
  );
}
