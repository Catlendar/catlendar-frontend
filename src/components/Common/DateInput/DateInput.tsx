import React, { MouseEventHandler } from 'react';
import { Input, InputName, InputWrapper } from './DateInput.styled';

interface DateInputProps {
  inputType: string;
  name: string;
  placeholder: string;
  form?: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
  value: string;
}

function DateInput({ inputType, value, name, placeholder, form, onClick }: DateInputProps) {
  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      <Input
        type={inputType}
        placeholder={placeholder}
        form={form}
        value={value}
        onClick={onClick}
        readOnly
      />
    </InputWrapper>
  );
}

DateInput.defaultProps = {
  form: true,
};

export default DateInput;
