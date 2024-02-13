import React from 'react';
import { Input, InputName } from './TextInput.styled';

interface TextInputProps {
  inputType: string;
  name: string;
  placeholder: string;
  form?: boolean;
}

function TextInput({ inputType, name, placeholder, form }: TextInputProps) {
  return (
    <div>
      <InputName>{name}</InputName>
      <Input type={inputType} placeholder={placeholder} form={form} />
    </div>
  );
}

TextInput.defaultProps = {
  form: true,
};

export default TextInput;
