/* eslint-disable object-shorthand */
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
import useCompleted from '../../hooks/useCompleted';

export function ChartComponent() {
  const { todoNum } = useCompleted();

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: false, // false로 설정하면 스타일 지정 가능
    // responsiveAnimationDuration: 1000,
    maxBarThickness: 10,
    maintainAspectRatio: true,
    aspectRatio: 1.8,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: true,
        color: '#7E7DFD',
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
        borderColor: '#7E7DFD',
        backgroundColor: '#7E7DFD',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
