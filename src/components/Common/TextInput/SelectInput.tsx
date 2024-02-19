import React from 'react';
import { Select } from './TextInput.styled';

interface Option {
  value: string;
  name: string;
}

interface SelectBoxProps {
  width: number;
  options: Option[];
}

const BirthOption: Option[] = [
  { value: '양력', name: '양력' },
  { value: '음력', name: '음력' },
];

const BirthTimeOption: Option[] = [
  { value: '자', name: '子(자) 23:30 ~ 01:29' },
  { value: '축', name: '丑(축) 01:30 ~ 03:29' },
  { value: '인', name: '寅(인) 03:30 ~ 05:29' },
  { value: '묘', name: '卯(묘) 05:30 ~ 07:29' },
  { value: '진', name: '辰(진) 07:30 ~ 09:29' },
];

function SelectBox({ options, width }: SelectBoxProps) {
  return (
    <Select width={width}>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </Select>
  );
}
export default function SelectInput() {
  return <SelectBox options={BirthTimeOption} width={200} />;
}
