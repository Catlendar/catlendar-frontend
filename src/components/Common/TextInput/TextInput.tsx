import React, { useState } from 'react';
import { Input, InputName, InputWrapper } from './TextInput.styled';

interface TextInputProps {
  inputType: string;
  name: string;
  placeholder: string;
  form?: boolean;
  inputMode?: string;
  value?: string;
  onChange: (value: string) => void;
}

function TextInput({
  inputType,
  name,
  placeholder,
  value,
  form,
  inputMode,
  onChange,
}: TextInputProps) {
  // const [value, setValue] = useState('');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = event.target.value;
  //   setValue(newValue);
  //   onChange(newValue);
  // };

  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      <Input
        type={inputType}
        placeholder={placeholder}
        form={form}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required
      />
    </InputWrapper>
  );
}

TextInput.defaultProps = {
  form: true,
  inputMode: '',
};

export default TextInput;
