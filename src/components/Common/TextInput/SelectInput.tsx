import React, { useState, useEffect } from 'react';
import { Input, InputName, InputWrapper, Select } from './TextInput.styled';
import { Option, SelectBoxProps } from './SelectTypes';

export default function SelectInput({ options, name, width, onChange }: SelectBoxProps) {
  // 타입 단언 선언
  const [selectedOption, setSelectedOption] = useState((options[0] as Option).value);
  const [check, setCheck] = useState(true);

  const handleSelectChange = (event) => {
    // const selectedOption = event.target.value;
    setSelectedOption(event.target.value);
    onChange(selectedOption);
    setCheck(false);
  };
  useEffect(() => {
    onChange(selectedOption);
  });

  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      <Select
        width={width}
        onChange={handleSelectChange}
        style={{ color: check ? 'var(--text-color-placeholder)' : 'inherit' }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </InputWrapper>
  );
}
