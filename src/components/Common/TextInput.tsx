import React from 'react';
import { Input, InputName } from './TextInput.styled';

interface TextInputProps {
  inputType: string;
  name: string;
  placeholder: string;
}

function TextInput({ inputType, name, placeholder }: TextInputProps) {
  return (
    <div>
      <InputName>{name}</InputName>
      <Input type={inputType} placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
