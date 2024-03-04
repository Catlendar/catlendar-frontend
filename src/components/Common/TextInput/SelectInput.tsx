import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import { Input, InputName, InputWrapper, Selectt } from './TextInput.styled';
import { Option, SelectBoxProps } from './SelectTypes';

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

  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   onChange(event.target.value);
  //   setCheck(false);
  // };

  // eslint-disable-next-line no-shadow
  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption.value);
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
      backgroundColor: state.isFocused ? 'var(--bg-color-main)' : null,
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

      <Select
        options={Options}
        onChange={handleSelectChange}
        value={selectedOption}
        styles={customStyles}
        components={{ Input: CustomInput }}
      />
    </InputWrapper>
  );
}
