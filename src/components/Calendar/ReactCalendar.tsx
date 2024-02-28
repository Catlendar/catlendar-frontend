import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { CalendarWrapper, StyleCalendar } from './ReactCalendar.style';
import { TodoCircle } from './TodoCircle.style';
import TodoBox from '../Common/TodoBox/TodoBox';
import { tokenInstance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';

interface DateProps {
  value: Date;
  setValue: (value) => void;
  todoObj: Record<string, { totalTodo: number; completedTodo: number }>;
}

export default function ReactCalendar({ value, setValue, todoObj }: DateProps) {
  const userAtom = useRecoilValue(UserAtom);
  const [isTodoBox, setIsTodoBox] = useState(true);
  const [clickedDay, setClickedDay] = useState(moment(value).format('YYYY-MM-DD'));
  const [clickTodo, setClickTodo] = useState([]);

  const onChangeDate = () => {
    setValue(value);
  }; // completedTodo 값을 상태로 관리합니다.

  // const [completedTodo, setCompletedTodo] = useState<number | null>(null);
  // useEffect(() => {
  //   const formattedDate = moment(clickedDay).format('YYYY-MM-DD');
  //   const todoData = todoObj[formattedDate];

  //   if (todoData && typeof todoData.completedTodo !== 'undefined') {
  //     setCompletedTodo(todoData.completedTodo);
  //   } else {
  //     // 해당 날짜의 데이터가 없거나 completedTodo가 정의되지 않은 경우
  //     setCompletedTodo(null);
  //   }
  // }, [clickedDay, todoObj]);

  // const handleTileContent = ({ date }) => {
  //   const formattedDate = moment(date).format('YYYY-MM-DD');

  //   if (formattedDate === clickedDay && completedTodo !== null) {
  //     console.log('?????????', completedTodo);
  //     return (
  //       <div>
  //         <TodoCircle className={completedTodo === 0 ? 'complete' : 'process'}>
  //           {completedTodo === 0 ? null : completedTodo}
  //         </TodoCircle>
  //       </div>
  //     );
  //   }
  //   return <TodoCircle />;
  // };

  // useEffect(() => {
  //   const totalTasks = todoListAtom.length;
  //   const completedTasks = getTodayCompletedTasks(todoListAtom);

  //   setTodayTasksAtom({ totalTasks, completedTasks });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [todoListAtom]);
  useEffect(() => {
    const getClickTodo = async () => {
      try {
        const response = await tokenInstance.post('calendar/getSpecificMonth', {
          userId: userAtom.userId,
          targetDate: clickedDay,
        });
        console.log(clickedDay);
        setClickTodo(response.data);
      } catch (error) {
        alert('해당 데이터를 불러오는 데 실패했습니다.');
      }
    };
    getClickTodo();
    console.log('response', clickTodo);
    console.log(clickTodo.map((item) => item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedDay]);

  const handleTileContent = ({ date }) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const todoData = todoObj[formattedDate];

    if (todoData) {
      const { totalTodo, completedTodo } = todoData;

      // 이 조건에 해당하는 날짜만 처리
      console.log('?????????', totalTodo, completedTodo);
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
