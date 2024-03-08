import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { tokenInstance } from '../../../api/Axios';
import { AddInputWrapper, AddInput, ModalAddButton } from './AddModalInput.styled';
import { UserAtom } from '../../../atom/UserAtom';
import { TodoListAtom } from '../../../atom/TodoListAtom';
import { ModalTypeProps } from '../Modal/Modal';
import { TodoNumAtom } from '../../../atom/TodoNumAtom';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export default function TodoAdd({ date }: Pick<ModalTypeProps, 'date'>) {
  const userAtom = useRecoilValue(UserAtom);
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
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

      // 일정 생성 api
      const response1 = await tokenInstance.post('calendar/createCalendar', {
        userId: userAtom.userId,
        targetDate: date,
        calendarContent: inputValue,
      });
      const data1 = response1.data;
      // 할 일 목록 api
      const response2 = await tokenInstance.post('calendar/getSpecificMonth', {
        userId: userAtom.userId,
        targetDate: date,
      });
      const data2 = response2.data;
      const newDate = String(date);
      if (data1 === '할 일 리스트에 추가 되었습니다.') {
        setTodoListAtom(data2);
        setInputValue('');
        setTodoNum({
          ...todoNum,
          [newDate]: {
            totalTodo: (todoNum[newDate]?.totalTodo || 0) + 1,
            completedTodo: todoNum[newDate]?.completedTodo || 0,
          },
        });
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
