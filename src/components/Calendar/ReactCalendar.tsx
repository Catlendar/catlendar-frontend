import React, { useState } from 'react';
import moment from 'moment';
import { CalendarWrapper, StyleCalendar } from './ReactCalendar.style';
import { TodoCircle } from './TodoCircle.style';
import TodoBox from '../Common/TodoBox/TodoBox';

interface DateProps {
  value: Date;
  setValue: (value) => void;
  todoObj: Record<string, { totalTodo: number; completedTodo: number }>;
}

export default function ReactCalendar({ value, setValue, todoObj }: DateProps) {
  const [isTodoBox, setIsTodoBox] = useState(true);
  const [clickedDay, setClickedDay] = useState(moment(value).format('YYYY-MM-DD'));

  const onChangeDate = () => {
    setValue(value);
  };

  const handleTileContent = ({ date }) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const todoData = todoObj[formattedDate];

    if (todoData) {
      const { totalTodo, completedTodo } = todoData;

      // 이 조건에 해당하는 날짜만 처리
      console.log('1234', totalTodo, completedTodo);
      return (
        <div>
          {totalTodo === completedTodo ? (
            <TodoCircle className="complete" />
          ) : (
            <TodoCircle className="process">{totalTodo - completedTodo}</TodoCircle>
          )}
        </div>
      );
    }
    return <TodoCircle />;
  };

  const handleTodoBox = () => {
    setIsTodoBox(true);
  };

  console.log('click', clickedDay);

  return (
    <CalendarWrapper>
      <StyleCalendar
        calendarType="US"
        onChange={onChangeDate}
        value={value}
        formatDay={(locale, day) => day.toLocaleString('en', { day: 'numeric' })}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        onClickDay={(click) => {
          handleTodoBox();
          setClickedDay(moment(click).format('YYYY-MM-DD'));
        }}
        tileContent={handleTileContent}
      />
      {isTodoBox && <TodoBox date={clickedDay} />}
    </CalendarWrapper>
  );
}
