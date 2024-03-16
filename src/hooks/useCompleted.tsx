import { useState, useEffect } from 'react';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenInstance } from '../api/Axios';
import { queryClient } from '../App';
import { TodoNumAtom } from '../atom/TodoNumAtom';
import { UserAtom } from '../atom/UserAtom';

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

const useCompleted = () => {
  const [date, setDate] = useState(new Date());
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);
  const userAtom = useRecoilValue(UserAtom);

  const convertedDate = {
    date: moment(date).format('YYYY-MM-DD'),
    month: moment(date).format('YYYY-MM'),
  };

  const calendarData = {
    targetDate: convertedDate.month,
    userId: userAtom.userId,
  };

  // eslint-disable-next-line no-shadow
  const fetchCompleted = async (calendarData) => {
    const response = await tokenInstance.post('calendar/getSpecificMonth', calendarData);
    return response.data;
  };

  const { data, status } = useQuery({
    queryKey: ['completedTasks', convertedDate.month, userAtom.userId],
    queryFn: () => fetchCompleted(calendarData),
    enabled: !!userAtom.userId,
  });

  useEffect(() => {
    if (status === 'success') {
      const groupedData = groupDataByDate(data);
      const TodoNum = Object.keys(groupedData).reduce((acc, day) => {
        const todo = groupedData[day];
        const totalTodo = todo.length;
        const completedTodo = todo.filter((event) => event.completed === 'Y').length;
        acc[day] = { totalTodo, completedTodo };
        return acc;
      }, {});
      setTodoNum(TodoNum);
      queryClient.setQueryData(['groupedData', convertedDate.month], groupedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, status]);

  const dataGroup = queryClient.getQueryData(['groupedData', convertedDate.month]) || {};

  return { date, setDate, dataGroup, todoNum };
};

export default useCompleted;
