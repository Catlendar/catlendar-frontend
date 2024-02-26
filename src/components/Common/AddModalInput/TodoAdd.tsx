import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { tokenInstance } from '../../../api/Axios';
import { AddInputWrapper, AddInput, ModalAddButton } from './AddModalInput.styled';
import { UserAtom } from '../../../atom/UserAtom';
import { TodoListAtom } from '../../../atom/TodoListAtom';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export default function TodoAdd() {
  const userAtom = useRecoilValue(UserAtom);
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleOnchange = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
  };

  const addTodo = async () => {
    if (isAdding) return;
    setIsAdding(true);

    try {
      if (inputValue.trim().length === 0) {
        alert('내용을 입력해 주세요.');
        setInputValue('');
        return;
      }
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = (today.getMonth() + 1).toString(); // 월
      if (month.length === 1) {
        month = `0${month}`;
      }
      let date = today.getDate(); // 날짜
      const todayDate = `${year}-${month}-${date}`;
      console.log(todayDate);

      // 일정 생성 api
      const response1 = await tokenInstance.post('calendar/createCalendar', {
        userId: userAtom.userId,
        targetDate: todayDate,
        calendarContent: inputValue,
      });
      console.log(response1);
      const data1 = response1.data;

      // 할 일 목록 api
      const response2 = await tokenInstance.post('calendar/getToday', {
        userId: userAtom.userId,
      });
      const data2 = response2.data;
      console.log(response2);
      if (data1 === '할 일 리스트에 추가 되었습니다.') {
        setTodoListAtom(data2);
        setInputValue('');
      }
    } catch (error) {
      alert('할 일 추가 실패');
      navigate('/error');
    } finally {
      setIsAdding(false);
    }
  };

  const handleOnKeyDown = async (e: InputKeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      await addTodo();
    }
  };

  const handleClick = async () => {
    await addTodo();
  };

  return (
    <AddInputWrapper>
      <AddInput
        id="todoAdd"
        name="todoAdd"
        placeholder="+ 할 일을 추가하세요"
        value={inputValue}
        onChange={handleOnchange}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      {inputValue && (
        <ModalAddButton type="button" title="추가하기" onClick={handleClick}>
          <span>추가하기</span>
        </ModalAddButton>
      )}
    </AddInputWrapper>
  );
}
