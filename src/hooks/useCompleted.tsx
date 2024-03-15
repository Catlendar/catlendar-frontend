import { useState, useEffect } from 'react';
import moment from 'moment';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenInstance } from '../api/Axios';
import { TodoNumAtom } from '../atom/TodoNumAtom';
import { UserAtom } from '../atom/UserAtom';

interface DataGroupProps {
  [date: string]: any[];
}

const useCompleted = () => {
  const [date, setDate] = useState(new Date());
  const [dataGroup, setDataGroup] = useState<DataGroupProps>({});
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);
  const userAtom = useRecoilValue(UserAtom);

  const convertedDate = {
    date: moment(date).format('YYYY-MM-DD'),
    month: moment(date).format('YYYY-MM'),
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tokenInstance.post('calendar/getSpecificMonth', {
          targetDate: convertedDate.month,
          userId: userAtom.userId,
        });
        const groupedData = groupDataByDate(response.data);
        setDataGroup(groupedData);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };
    fetchData();
  }, [userAtom.userId, convertedDate.month]);

  useEffect(() => {
    const calculateTodoNum = () => {
      let TodoNum = {};
      Object.keys(dataGroup).forEach((day) => {
        const todo = dataGroup[day];
        const totalTodo = todo ? todo.length : 0;
        const completedTodo = todo ? todo.filter((event) => event.completed === 'Y').length : 0;
        TodoNum[day] = {
          totalTodo,
          completedTodo,
        };
      });
      setTodoNum(TodoNum);
    };
    calculateTodoNum();
  }, [dataGroup, setTodoNum]);

  return { date, setDate, dataGroup, todoNum };
};

export default useCompleted;
