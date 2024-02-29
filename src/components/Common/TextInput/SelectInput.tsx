import React, { useState, useEffect } from 'react';
import { Input, InputName, InputWrapper, Select } from './TextInput.styled';
import { Option, SelectBoxProps } from './SelectTypes';

export default function SelectInput({ options, name, width, onChange, initial }: SelectBoxProps) {
  // 타입 단언 선언
  const [selectedOption, setSelectedOption] = useState(initial || (options[0] as Option).value);
  const [check, setCheck] = useState(true);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
    setCheck(false);
  };

  useEffect(() => {
    // 컴포넌트 마운트 시에만 초기값을 onChange로 전달
    if (initial) {
      onChange(initial);
    }
  }, [initial, onChange]);

  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      <Select
        value={selectedOption}
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
