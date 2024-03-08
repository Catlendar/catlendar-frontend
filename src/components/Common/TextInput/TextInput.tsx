import React, { useState } from 'react';
import { Input, InputName, InputWrapper } from './TextInput.styled';

interface TextInputProps {
  inputType: string;
  name: string;
  placeholder: string;
  form?: boolean;
  inputMode?: string;
  onChange: (value: string) => void;
}

function TextInput({ inputType, name, placeholder, form, inputMode, onChange }: TextInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <InputWrapper>
      <InputName>{name}</InputName>
      <Input
        type={inputType}
        placeholder={placeholder}
        form={form}
        inputMode={inputMode}
        onChange={handleChange}
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
