/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
import { useRecoilValue } from 'recoil';
import DateInput from '../Common/DateInput/DateInput';
import { UserAtom } from '../../atom/UserAtom';

interface DatePickerProps {
  onDateSelect: (date: string) => void;
}

const DatePickerComponent = ({ onDateSelect }: DatePickerProps) => {
  const [time, setTime] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userAtom = useRecoilValue(UserAtom);
  const [selectedDate, setSelectedDate] = useState<string>(userAtom.birthDate);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSelect = (date: Date) => {
    // 오늘 날짜를 비교하여 이후의 날짜는 선택되지 않도록 변경
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date > today) {
      alert('오늘 이전의 날짜만 선택할 수 있습니다.');
      return;
    }

    setTime(date);
    setIsOpen(false);

    // 날짜를 원하는 형식으로 포맷
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}.${month}.${day}`;

    setSelectedDate(formattedDate);
    onDateSelect(formattedDate);
  };

  const handleTextInputClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <DateInput
        inputType="생년월일"
        name="생년월일"
        placeholder="생년월일"
        onClick={handleTextInputClick}
        value={selectedDate}
      />

      <DatePicker
        value={time}
        isOpen={isOpen}
        onSelect={handleSelect}
        onCancel={handleCancel}
        theme="ios"
        confirmText="확인"
        cancelText="취소"
        id="main-content"
        tabindex="-1"
      />
    </>
  );
};

export default DatePickerComponent;
