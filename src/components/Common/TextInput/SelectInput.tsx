import React, { useState } from 'react';
import { Select } from './TextInput.styled';
// import SelectInput from './SelectInput';

export interface Option {
  value: string | number;
  name: string;
}

export interface SelectBoxProps {
  width: number | string;
  options: Option[];
  onChange: (value: string) => void;
}

export const BirthOption: Option[] = [
  { value: '양력', name: '양력' },
  { value: '음력', name: '음력' },
];

export const BirthTimeOption: Option[] = [
  { value: '10', name: '子(자) 23:30 ~ 01:29' },
  { value: '축', name: '丑(축) 01:30 ~ 03:29' },
  { value: '인', name: '寅(인) 03:30 ~ 05:29' },
  { value: '묘', name: '卯(묘) 05:30 ~ 07:29' },
  { value: '진', name: '辰(진) 07:30 ~ 09:29' },
  { value: '사', name: '巳(사) 09:30 ~ 11:29' },
  { value: '오', name: '午(오) 11:30 ~ 13:29' },
  { value: '미', name: '未(미) 13:30 ~ 15:29' },
  { value: '신', name: '申(신) 15:30 ~ 17:29' },
  { value: '유', name: '酉(유) 17:30 ~ 19:29' },
  { value: '술', name: '戌(술) 19:30 ~ 21:29' },
  { value: '해', name: '亥(해) 21:30 ~ 23:29' },
];

export default function SelectInput({ options, width, onChange }: SelectBoxProps) {
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    const selectedOption = event.target.value;
    onChange(selectedOption);
  };

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
