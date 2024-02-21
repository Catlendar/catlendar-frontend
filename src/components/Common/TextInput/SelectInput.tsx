import React, { useState, useEffect } from 'react';
import { Select } from './TextInput.styled';
import { Option, SelectBoxProps } from './SelectTypes';

export default function SelectInput({ options, width, onChange }: SelectBoxProps) {
  // 타입 단언 선언
  const [selectedOption, setSelectedOption] = useState((options[0] as Option).value);
  const handleSelectChange = (event) => {
    // const selectedOption = event.target.value;
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };
  useEffect(() => {
    onChange(selectedOption);
  });

  return (
    <Select width={width} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
}
