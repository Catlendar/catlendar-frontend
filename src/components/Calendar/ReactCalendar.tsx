import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import { CalendarWrapper, StyleCalendar } from './ReactCalendar.style';
import { TodoCircle } from './TodoCircle.style';

export default function ReactCalendar() {
  const [date, setDate] = useState(new Date());

  const onConvertDate = (d: typeof date) => {
    return moment(d).format('YYYY-MM-DD');
  };

  const onChangeDate = () => {
    setDate(date);
  };

  const handleTileContent = (num: number, todo: number) => {
    return num > 0 ? <TodoCircle>{num}</TodoCircle> : <TodoCircle />;
    // return todo === 0 ? (
    //   <TodoCircle state={none} />
    // ) : num === todo ? (
    //   <TodoCircle state={complete} />
    // ) : (
    //   <TodoCircle state={progress}>{num}</TodoCircle>
    // );
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
        // eslint-disable-next-line no-alert
        onClickDay={(value) => alert(`선택한 날짜: ${onConvertDate(value)}`)}
        tileContent={handleTileContent(0, 0)}
      />
      {/* <Calendar onChange={onChangeDate} value={date} /> */}
    </CalendarWrapper>
  );
}
