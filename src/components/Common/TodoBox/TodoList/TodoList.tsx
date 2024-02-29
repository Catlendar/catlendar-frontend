/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { TodoListAtom } from '../../../../atom/TodoListAtom';
import { TodoListUl, TodoListWrapper, MoreBtn } from './TodoList.styled';
import TodoListItem from './TodoListItem/TodoListItem';
import Icon from '../../../../assets/icons/icon-more-meatball.svg';

interface ListProps {
  date: string;
}

export default function TodoList({ date }: ListProps) {
  const todoListAtom = useRecoilValue(TodoListAtom);
  const today = moment(new Date()).format('YYYY-MM-DD');

  const [showAll, setShowAll] = useState(false);
  console.log(todoListAtom);

  const visibleItems = showAll ? todoListAtom : todoListAtom.slice(0, 8);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <TodoListWrapper>
      <TodoListUl>
        {visibleItems.length > 0 ? (
          visibleItems.map((todo) => <TodoListItem todo={todo} date={date} key={todo.calendarId} />)
        ) : today === date ? (
          <p>오늘의 할 일을 추가해보세요.</p>
        ) : today > date ? (
          <p>등록된 할 일이 없습니다.</p>
        ) : (
          <p>새로운 할 일을 추가해보세요.</p>
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
