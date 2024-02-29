import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ReactCalendar from '../../components/Calendar/ReactCalendar';
import { UserAtom } from '../../atom/UserAtom';
import { tokenInstance } from '../../api/Axios';
import { TodoNumAtom } from '../../atom/TodoNumAtom';
// import { useHook } from '../../components/customHook';

export default function CalendarPage() {
  interface TodoDataProps {
    totalTodo: number;
    completedTodo: number;
  }

  interface DataGroupProps {
    [date: string]: any[];
  }

  const userAtom = useRecoilValue(UserAtom);
  const [date, setDate] = useState(new Date());
  const [TodoNum, setTodoNum] = useRecoilState(TodoNumAtom);

  const convertedDate = {
    date: '',
    month: '',
  };
  const [dataGroup, setDataGroup] = useState<DataGroupProps>({});
  const [todoObj, setTodoObj] = useState<Record<string, TodoDataProps>>({});

  // date에서 월 단위 추출
  const onConvertDate = (d: Date) => {
    convertedDate.date = moment(d).format('YYYY-MM-DD');
    convertedDate.month = moment(d).format('YYYY-MM');
  };
  onConvertDate(date);

  // calendarDate를 기준으로 데이터를 그룹화
  function groupDataByDate(data) {
    const groupedData = {};
    data.forEach((item) => {
      const convertedItem = moment(item.calendarDate).format('YYYY-MM-DD');
      if (!groupedData[convertedItem]) {
        groupedData[convertedItem] = [];
      }
      groupedData[convertedItem].push(item);
    });
    return groupedData;
  }

  // 해당 월 일정 api 호출 : responseData -> 삭제
  // 데이터를 calendarDate로 그룹화 : dataGroup -> 삭제
  // response.data -> 날짜별로 그룹화 : groupedData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tokenInstance.post('calendar/getSpecificMonth', {
          targetDate: convertedDate.month,
          userId: userAtom.userId,
        });
        const groupedData = groupDataByDate(response.data);
        setDataGroup(groupedData);
        console.log('123123123', groupedData);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };
    fetchData();
  }, [userAtom.userId, convertedDate.month]);

  // dataGroup -> 일자 별 일정, 완료 갯수 계산
  useEffect(() => {
    const calculateTodoNum = () => {
      const todoNum = {};
      Object.keys(dataGroup).forEach((day) => {
        const todo = dataGroup[day];
        const totalTodo = todo ? todo.length : 0;
        const completedTodo = todo ? todo.filter((event) => event.completed === 'Y').length : 0;
        todoNum[day] = {
          totalTodo,
          completedTodo,
        };
        console.log('CalendarPage completedTodo:', completedTodo);
      });
      setTodoObj(todoNum);
      setTodoNum(todoNum);
      console.log('Todonum:', TodoNum);
      console.log('Todo Num by date:', todoNum);
    };
    calculateTodoNum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGroup, setTodoNum, userAtom.userId]);
  return (
    <div>{dataGroup && <ReactCalendar value={date} setValue={setDate} todoObj={todoObj} />}</div>
  );
}
