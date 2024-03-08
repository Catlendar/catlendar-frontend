import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';
import ModalButton from '../Button/ModalButton';
import { ModalBackground, ModalWrapper } from './ModalLayout.styled';
import { ReviseModalOpenAtom } from '../../../atom/ReviseModalOpenAtom';
import { SelectTodoItemtAtom } from '../../../atom/SelectTodoItemAtom';
import { tokenInstance } from '../../../api/Axios';
import { TodoListAtom } from '../../../atom/TodoListAtom';
import { TodoNumAtom } from '../../../atom/TodoNumAtom';

interface ModalProps {
  onClose: () => void;
}

// type ModifyCalendarDate =

export default function ReviseTodoModal({ onClose }: ModalProps) {
  const setReviseModalOpenAtom = useSetRecoilState(ReviseModalOpenAtom);
  const selectTodoItemAtom = useRecoilValue(SelectTodoItemtAtom);
  const setTodoListAtom = useSetRecoilState(TodoListAtom);
  const [newTodoContent, setNewTodoContent] = useState(selectTodoItemAtom.calendarContent);
  const [todoNum, setTodoNum] = useRecoilState(TodoNumAtom);

  const navigate = useNavigate();

  const getTodayDate = () => {
    const date = new Date();
    const todayDate = date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Seoul',
      })
      .replace(/. /g, '-')
      .slice(0, -1);
    return todayDate;
  };

  const modifyCalendarDate = (calendarDate: string) => {
    const date = new Date(calendarDate);
    return date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Seoul',
      })
      .replace(/. /g, '-')
      .slice(0, -1);
  };

  const handleRemoveClick = async () => {
    try {
      // 삭제하는 API 호출
      // SelectTodoItemAtom.calendarDate === todayDate라면 즉, 선택한 할 일이 오늘 일정이라면
      // 삭제하고, 오늘 할 일 목록 불러오기
      // SelectTodoItemAtom.calendarDate !== todayDate라면 즉, 다른 날짜라면
      // SelectTodoItemAtom.calendarDate 가지고 그 날짜에 있는 할 일 목록을 불러와서 업데이트
      const todayDate = getTodayDate();
      const calendarDate = modifyCalendarDate(selectTodoItemAtom.calendarDate);

      const deleteResponse = await tokenInstance.post('calendar/deleteCalendar', {
        userId: selectTodoItemAtom.userId,
        calendarId: selectTodoItemAtom.calendarId,
      });
      if (deleteResponse.data === '삭제 되었습니다.') {
        if (calendarDate === todayDate) {
          // 삭제한 할 일이 오늘 할 일이라면 오늘 할 일 불러와서 TodoListAtom 업데이트
          const todayListResponse = await tokenInstance.post('calendar/getToday', {
            userId: selectTodoItemAtom.userId,
          });
          setTodoListAtom(todayListResponse.data);
        } else {
          // 삭제한 할 일이 오늘 할 일이 아니라면 해당 calendarDate 불러와서 TodoListAtom 업데이트
          const specificMonthResponse = await tokenInstance.post('calendar/getSpecificMonth', {
            targetDate: calendarDate,
            userId: selectTodoItemAtom.userId,
          });
          setTodoListAtom(specificMonthResponse.data);
        }
      } else {
        throw new Error('일정을 삭제하는데 실패했습니다.');
      }
      setTodoNum({
        ...todoNum,
        [calendarDate]: {
          totalTodo: (todoNum[calendarDate]?.totalTodo || 0) - 1,
          completedTodo:
            selectTodoItemAtom.completed === 'Y'
              ? (todoNum[calendarDate]?.completedTodo || 0) - 1
              : todoNum[calendarDate]?.completedTodo || 0,
        },
      });

      onClose();
    } catch (error) {
      alert(error);
      navigate('/error');
    }
  };

  const handleCompleteClick = async () => {
    try {
      const todayDate = getTodayDate();
      const calendarDate = modifyCalendarDate(selectTodoItemAtom.calendarDate);

      // // 수정하는 API 호출
      const updateResponse = await tokenInstance.post('calendar/updateCalendar', {
        userId: selectTodoItemAtom.userId,
        calendarId: selectTodoItemAtom.calendarId,
        calendarContent: newTodoContent,
      });
      if (updateResponse.data === '수정 되었습니다.') {
        // 수정한 할 일이 오늘 할 일이라면 오늘 할 일 불러와서 TodoListAtom 업데이트
        if (calendarDate === todayDate) {
          const todayListResponse = await tokenInstance.post('calendar/getToday', {
            userId: selectTodoItemAtom.userId,
          });
          setTodoListAtom(todayListResponse.data);
        } else {
          // 수정한 할 일이 오늘 할 일이 아니라면 해당 calendarDate 불러와서 TodoListAtom 업데이트
          const specificMonthResponse = await tokenInstance.post('calendar/getSpecificMonth', {
            targetDate: calendarDate,
            userId: selectTodoItemAtom.userId,
          });
          setTodoListAtom(specificMonthResponse.data);
        }
      } else if (updateResponse.data === 'calendarContent is null or empty') {
        alert('내용을 입력해주세요');
        return;
      } else {
        throw new Error('수정하는 도중 문제가 발생했습니다.');
      }
      onClose();
    } catch (error) {
      alert(error);
      navigate('/error');
    }
  };

  const handleInputChange = (value: string) => {
    setNewTodoContent(value);
  };

  return (
    <ModalBackground onClick={() => setReviseModalOpenAtom(false)}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <TextInput
          inputType="text"
          name="할 일 수정"
          placeholder={selectTodoItemAtom.calendarContent}
          // form={false}
          inputMode="reviseModal"
          onChange={handleInputChange}
        />
        <div className="button-wrapper">
          <ModalButton
            type="remove"
            onClick={() => {
              handleRemoveClick();
            }}
          />
          <ModalButton
            type="complete"
            onClick={() => {
              handleCompleteClick();
            }}
          />
        </div>
      </ModalWrapper>
    </ModalBackground>
  );
}
