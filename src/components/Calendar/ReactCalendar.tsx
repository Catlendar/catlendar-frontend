import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { CalendarWrapper, StyleCalendar } from './ReactCalendar.style';
import { TodoCircle } from './TodoCircle.style';
import TodoBox from '../Common/TodoBox/TodoBox';
import { tokenInstance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';
import { TodoNumAtom } from '../../atom/TodoNumAtom';

interface DateProps {
  value: Date;
  setValue: (value) => void;
}
interface TodoItem {
  calendarId: string;
  userId: string;
  calendarDate: string;
  calendarContent: string;
  bookmark: string;
  completed: string;
  createDate: string;
}

export default function ReactCalendar({ value, setValue }: DateProps) {
  const userAtom = useRecoilValue(UserAtom);
  const todoNumAtom = useRecoilValue(TodoNumAtom);
  const navigate = useNavigate();

  const [isTodoBox, setIsTodoBox] = useState(true);
  const [clickedDay, setClickedDay] = useState(moment(value).format('YYYY-MM-DD'));
  const [, setClickTodo] = useState<TodoItem[] | undefined>(undefined);

  const onChangeDate = () => {
    setValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tokenInstance.post('calendar/getToday', {
          userId: userAtom.userId,
        });
        setClickTodo(response.data);
      } catch (error) {
        navigate('/error');
      }
    };

    fetchData();
  }, [userAtom.userId, navigate]);

  useEffect(() => {
    const getClickTodo = async () => {
      try {
        const response = await tokenInstance.post('calendar/getSpecificMonth', {
          userId: userAtom.userId,
          targetDate: clickedDay,
        });
        setClickTodo(response.data);
      } catch (error) {
        navigate('/error');
      }
    };
    getClickTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedDay]);

  const handleTileContent = ({ date }) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const todoData = todoNumAtom[formattedDate];

    if (todoData) {
      const { totalTodo, completedTodo } = todoData;

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
        calendarType="gregory"
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
        onActiveStartDateChange={({ activeStartDate }) => {
          setValue(moment(activeStartDate).format('YYYY-MM-DD'));
          setClickedDay(moment(activeStartDate).format('YYYY-MM-DD'));
        }}
      />
      {isTodoBox && <TodoBox date={clickedDay} />}
    </CalendarWrapper>
  );
}
