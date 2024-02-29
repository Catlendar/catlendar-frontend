/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
import { useRecoilValue } from 'recoil';
import DateInput from '../Common/DateInput/DateInput';
import { DateWrapper } from './DatePicker.styled';
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
    <DateWrapper>
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
      />
    </DateWrapper>
  );
};

export default DatePickerComponent;
