/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';
// eslint-disable-next-line import/no-extraneous-dependencies
import Picker from 'react-mobile-picker-scroll';
import { useRecoilValue } from 'recoil';
import DateInput from '../Common/DateInput/DateInput';
import { UserAtom } from '../../atom/UserAtom';

interface DatePickerProps {
  onDateSelect: (date: string) => void;
}

const DatePickerComponent = ({ onDateSelect }: DatePickerProps) => {
  const userAtom = useRecoilValue(UserAtom);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  const parseDate = (dateStr) => {
    if (dateStr.length === 8) {
      const year = parseInt(dateStr.substring(0, 4), 10);
      const month = parseInt(dateStr.substring(4, 6), 10) - 1; // JS의 월은 0부터 시작
      const day = parseInt(dateStr.substring(6, 8), 10);
      return new Date(year, month, day);
    }
    return new Date(); // 유효하지 않은 형식의 경우 현재 날짜 반환
  };

  const initialDate = parseDate(userAtom.birthDate);

  const [time, setTime] = useState<Date>(initialDate);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

    const formattedDate = `${year}${month}${day}`;

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
