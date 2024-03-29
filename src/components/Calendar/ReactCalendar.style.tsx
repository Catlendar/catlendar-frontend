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
    border-bottom: 0.4rem solid var(--color-white);
    height: 4rem;
    border-radius: 10x 10x 0 0;
    margin: 2rem;
    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-black);
    }
  }

  .react-calendar__month-view {
    padding: 1rem 2rem;
    abbr {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  .react-calendar__navigation button {
    font-size: 2rem;
  }
  .react-calendar__navigation button:disabled {
    background-color: var(--color-white);
    border-radius: 2rem 2rem 0 0;
  }

  // 월, 이동 버튼
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: var(--color-white);
  }

  // 요일
  .react-calendar__month-view__weekdays {
    padding-bottom: 1rem;
    abbr {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--color-gray);
      text-decoration: none;
    }
  }

  // 일
  .react-calendar__tile {
    text-align: center;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1rem;
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
