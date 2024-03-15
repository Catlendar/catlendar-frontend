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
      borderBottom: '1px solid var(--input-bb)',
      boxShadow: 'none',
      color: 'var(--color-black)',
      paddingBottom: '10px',
      marginTop: '10px',
      fontSize: 'var(--large-font-size)',
      width: width ? `${width}px` : '100%',
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'var(--color-black)',
      // eslint-disable-next-line no-nested-ternary
      // backgroundColor: state.isFocused ? 'var(--bg-color-main)' : null,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--color-black)',
    }),
  };

  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      {/* <Selectt
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
      </Selectt> */}
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
