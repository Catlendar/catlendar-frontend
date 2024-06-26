/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { InputName, InputWrapper, SelectLabel } from './TextInput.styled';
import { SelectBoxProps } from './SelectTypes';

// select에 커서 깜빡임 제거
function CustomInput(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <components.Input {...props} readOnly />;
}

export default function SelectInput({ options, name, width, onChange, initial }: SelectBoxProps) {
  // 타입 단언 선언
  const initialOption = options.find((option) => option.value === initial) || options[0];
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string }>(
    initialOption
      ? { value: initialOption.value, label: initialOption.name }
      : { value: '', label: '' },
  );

  // eslint-disable-next-line no-shadow
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption.value);
  };

  const Options = options.map((option) => ({
    value: option.value,
    label: option.name,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      borderBottom: '0.1rem solid var(--input-bb)',
      boxShadow: 'none',
      color: 'var(--color-black)',
      paddingBottom: '1rem',
      marginTop: '1rem',
      fontSize: 'var(--large-font-size)',
      width: width ? `${width}rem` : '100%',
      backgroundColor: 'var(white)',
    }),
    option: (provided) => ({
      ...provided,
      color: 'var(--color-black)',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--color-black)',
      height: '2.4rem',
    }),
  };

  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      <SelectLabel id="select" htmlFor="selectbox">
        할일 체크
      </SelectLabel>
      <Select
        id="selectbox"
        aria-labelledby="select"
        options={Options}
        onChange={handleSelectChange}
        value={selectedOption}
        styles={customStyles}
        components={{ Input: CustomInput, IndicatorSeparator: null }}
      />
    </InputWrapper>
  );
}
