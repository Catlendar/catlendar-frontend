/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenInstance } from '../../api/Axios';
import { TodoNumAtom } from '../../atom/TodoNumAtom';
import { UserAtom } from '../../atom/UserAtom';

interface DataGroupProps {
  [date: string]: any[];
}

export function ChartComponent() {
  // const [todoNum, setTodoNum] = useRecoilState<TodoProps>(TodoNumAtom);
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);
  const userAtom = useRecoilValue(UserAtom);
  const [date, setDate] = useState(new Date());
  const convertedDate = {
    date: '',
    month: '',
  };
  const [dataGroup, setDataGroup] = useState<DataGroupProps>({});

  const onConvertDate = (d: Date) => {
    convertedDate.date = moment(d).format('YYYY-MM-DD');
    convertedDate.month = moment(d).format('YYYY-MM');
  };
  onConvertDate(date);

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

  console.log(dataGroup);

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
        console.log('CalendarPage completedTodo:', completedTodo);
      });
      setTodoNum(TodoNum);
    };
    calculateTodoNum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTodoNum, userAtom.userId, dataGroup]);

  console.log(todoNum);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true, // false로 설정하면 스타일 지정 가능
    // responsiveAnimationDuration: 1000,
    maxBarThickness: 10,
    maintainAspectRatio: true,
    aspectRatio: 1.8,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        color: 'rgb(123,73,249)',
        text: 'TODO CHART',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${value}% 완료`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          callback(value) {
            return `${value}%`;
          },
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
        hitRadius: 10,
      },
    },
    hover: {
      mode: 'nearest' as const,
      intersect: true,
    },
  };

  const labels = ['1주차', '2주차', '3주차', '4주차'];

  const arr1 = Object.keys(todoNum).filter((item) => Number(item.split('-')[2]) <= 7); // 1~7
  const arr2 = Object.keys(todoNum).filter(
    (item) => Number(item.split('-')[2]) <= 14 && Number(item.split('-')[2]) >= 8, // 8~ 14
  );
  const arr3 = Object.keys(todoNum).filter(
    (item) => Number(item.split('-')[2]) <= 21 && Number(item.split('-')[2]) >= 15, // 15 ~ 21
  );
  const arr4 = Object.keys(todoNum).filter(
    (item) => Number(item.split('-')[2]) <= 31 && Number(item.split('-')[2]) >= 22, // 22 ~ 31
  );

  function getCompletedTodo(arr) {
    return arr
      .map((item) => todoNum[item].completedTodo)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
  }

  function getTotalTodo(arr) {
    return arr
      .map((item) => todoNum[item].totalTodo)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
  }

  const week1 = getCompletedTodo(arr1);
  const week2 = getCompletedTodo(arr2);
  const week3 = getCompletedTodo(arr3);
  const week4 = getCompletedTodo(arr4);

  const total1 = getTotalTodo(arr1);
  const total2 = getTotalTodo(arr2);
  const total3 = getTotalTodo(arr3);
  const total4 = getTotalTodo(arr4);

  const data = {
    labels,
    datasets: [
      {
        pointRadius: 3,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
        },
        label: '완료 개수',
        data: [
          total1 === 0 ? 0 : Math.round((week1 / total1) * 100),
          total2 === 0 ? 0 : Math.round((week2 / total2) * 100),
          total3 === 0 ? 0 : Math.round((week3 / total3) * 100),
          total4 === 0 ? 0 : Math.round((week4 / total4) * 100),
        ],
        borderColor: 'rgb(123, 73, 249)',
        backgroundColor: 'rgba(162, 90, 251, 0.5)',
      },
    ],
  };

  console.log(arr2.map((item) => todoNum[item]));

  return <Line options={options} data={data} />;
}
