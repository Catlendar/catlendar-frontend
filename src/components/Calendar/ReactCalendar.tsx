import React, { useState } from 'react';
import moment from 'moment';
import { CalendarWrapper, StyleCalendar } from './ReactCalendar.style';
import { TodoCircle } from './TodoCircle.style';
import TodoBox from '../Common/TodoBox/TodoBox';

interface DateProps {
  date: Date;
  setDate: (date) => void;
  todoObj: Record<string, { totalTodo: number; completedTodo: number }>;
}
export default function ReactCalendar({ date, setDate, todoObj }: DateProps) {
  const [isTodoBox, setIsTodoBox] = useState(false);
  console.log('onCalendar', todoObj);

  const onConvertDate = (d: Date) => {
    return moment(d).format('YYYY-MM-DD');
  };

  const onChangeDate = () => {
    setDate(date);
  };

  const handleTileContent = (completedTodo: number, totalTodo: number) => {
    if (totalTodo === 0) return <TodoCircle />;
    if (totalTodo - completedTodo > 0) return <TodoCircle>{totalTodo - completedTodo}</TodoCircle>;
    return <TodoCircle />;

    // return todo === 0 ? (
    //   <TodoCircle state={none} />
    // ) : num === todo ? (
    //   <TodoCircle state={complete} />
    // ) : (
    //   <TodoCircle state={progress}>{num}</TodoCircle>
    // );
  };

  // value(date) 받아서 그 날의 TodoBox를 반환하도록 TodoBox 수정(혹은 추가)할 것
  const handleTodoBox = () => {
    setIsTodoBox(true);
  };

  return (
    <CalendarWrapper>
      <StyleCalendar
        onChange={onChangeDate}
        value={date}
        formatDay={(locale, day) => day.toLocaleString('en', { day: 'numeric' })}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        onClickDay={(value) => {
          handleTodoBox();
          console.log(onConvertDate(value));
        }}
        // alert(`선택한 날짜: ${onConvertDate(value)}`)
        tileContent={handleTileContent(0, 0)}
      />
      {/* <Calendar onChange={onChangeDate} value={date} /> */}
      {isTodoBox && <TodoBox />}
    </CalendarWrapper>
  );
}

// 아직 미완료
// 비동기 처리
// 날짜 별로 TodoCircle 다르게 분배하는거 -> 조건문 tileClassName
