import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenInstance } from '../../../api/Axios';
import { TodoAddInput } from './AddModalInput.styled';
import { UserAtom } from '../../../atom/UserAtom';
import { TodoListAtom } from '../../../atom/TodoListAtom';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export default function TodoAdd() {
  const userAtom = useRecoilValue(UserAtom);
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const [inputValue, setInputValue] = useState('');

  const handleOnchange = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
  };
  const handleOnKeyDown = async (e: InputKeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = (today.getMonth() + 1).toString(); // 월
      if (month.length === 1) {
        month = `0${month}`;
      }
      let date = today.getDate(); // 날짜
      const todayDate = `${year}-${month}-${date}`;
      const url1 = 'calendar/createCalendar';
      console.log(todayDate);
      const response1 = await tokenInstance.post(url1, {
        userId: userAtom.userId,
        targetDate: todayDate,
        calendarContent: inputValue,
      });
      console.log(response1);
      const data1 = response1.data;

      const url2 = 'calendar/getToday';
      const response2 = await tokenInstance.post(url2, {
        userId: userAtom.userId,
      });
      const data2 = response2.data;
      console.log(response2);
      if (data1 === '할 일 리스트에 추가 되었습니다.') {
        setTodoListAtom(data2);
        setInputValue('');
      }
    }
  };
  return (
    <TodoAddInput
      id="todoAdd"
      name="todoAdd"
      placeholder="+ 할 일을 추가하세요"
      value={inputValue}
      onChange={handleOnchange}
      onKeyDown={(e) => handleOnKeyDown(e)}
    />
  );
}
