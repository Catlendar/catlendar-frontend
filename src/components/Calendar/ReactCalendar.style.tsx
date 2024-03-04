import { styled } from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/Calendar.css';

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyleCalendar = styled(Calendar)`
  .react-calendar {
    border: none;
  }
  .react-calendar__navigation {
    background: var(--color-white);
    border-bottom: 4px solid var(--color-white);
    height: 40px;
    border-radius: 10x 10x 0 0;
    margin: 20px;
    span {
      font-size: 15px;
      font-weight: 600;
      color: var(--color-black);
    }
  }

  .react-calendar__month-view {
    padding: 10px 20px;
    abbr {
      font-size: 14px;
      font-weight: 500;
    }
  }
  .react-calendar__navigation button {
    font-size: 20px;
  }
  .react-calendar__navigation button:disabled {
    background-color: var(--color-white);
    border-radius: 20px 20px 0 0;
  }

  // 월, 이동 버튼
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: var(--color-white);
    border-radius: 10x 10x 0 0;
  }

  // 요일
  .react-calendar__month-view__weekdays {
    padding-bottom: 10px;
    abbr {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-gray);
      text-decoration: none;
    }
  }

  // 일
  .react-calendar__tile {
    text-align: center;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
  }

  // 다른 날짜 hover, focus, 선택
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: var(--color-lightSubPrimary);
    color: var(--color-subPrimary);
  }

  .react-calendar__tile--active {
    background: #e5f2fe;
    color: #9bcdfb;
  }
  // 오늘 날짜 hover, focus, 선택
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus,
  .react-calendar__tile--now {
    background: var(--color-lightPrimary);
    color: var(--color-primary);
  }

  // 오늘 날짜
  // .react-calendar__tile--now {
  //   background: var(--color-primary);
  //   color: var(--color-white);
  // }

  .react-calendar__navigation__label {
    pointer-events: none;
  }
`;
