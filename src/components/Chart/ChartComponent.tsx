import React from 'react';
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
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      color: 'rgb(123,73,249)',
      text: 'TODO CHART',
    },
  },
};

const labels = ['1주차', '2주차', '3주차', '4주차'];

export const data = {
  labels,
  datasets: [
    {
      label: '완료한 일',
      data: ['80', '20', '10', '30'],
      borderColor: 'rgb(123, 73, 249)',
      backgroundColor: 'rgba(162, 90, 251, 0.5)',
    },
  ],
};

export function ChartComponent() {
  return <Line options={options} data={data} />;
}
