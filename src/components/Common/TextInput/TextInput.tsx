import React, { useState } from 'react';
import { Input, InputName, InputWrapper } from './TextInput.styled';

interface TextInputProps {
  inputType: string;
  name: string;
  placeholder: string;
  form?: boolean;
  onChange: (value: string) => void;
}

function TextInput({ inputType, name, placeholder, form, onChange }: TextInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <InputWrapper>
        <InputName>{name}</InputName>
        <Input type={inputType} placeholder={placeholder} form={form} onChange={handleChange} />
      </InputWrapper>
    </div>
  );
}

TextInput.defaultProps = {
  form: true,
};

export default TextInput;
