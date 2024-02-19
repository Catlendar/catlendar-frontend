import React, { useState } from 'react';
import { LoginWrapper, ButtonWrapper } from '../LoginPage/LoginPage.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import Button from '../../components/Common/Button/Button';
import GenderButton from '../../components/Common/GenderButton/GenderButton';
import SelectInput from '../../components/Common/TextInput/SelectInput';
import { InputName } from '../../components/Common/TextInput/TextInput.styled';

export default function ProfileEditPage() {
  const [name, setName] = useState('');
  return (
    <LoginWrapper>
      <TextInput
        name="이름"
        placeholder=""
        inputType="text"
        onChange={(value: string) => setName(value)}
      />
      <InputName>태어난 시간</InputName>
      <SelectInput />
      <GenderButton name="성별" />
      <ButtonWrapper>
        <Button type="enable" text="수정" to="" onClick={() => {}} />
      </ButtonWrapper>
    </LoginWrapper>
  );
}
