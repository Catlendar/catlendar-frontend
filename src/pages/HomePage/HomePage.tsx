import React from 'react';
import moment from 'moment';
import TodoBox from '../../components/Common/TodoBox/TodoBox';
import MainCard from '../../components/MainCard/MainCard';

export default function HomePage() {
  return (
    <div
      style={{
        boxShadow: 'rgba(255, 255, 0, 0.35) 0px 0px 5px 20px',
        width: '390px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <MainCard />
      <TodoBox date="today" />
    </div>
  );
}
