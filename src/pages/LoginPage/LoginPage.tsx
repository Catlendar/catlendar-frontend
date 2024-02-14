import React from 'react';
import TextInput from '../../components/Common/TextInput/TextInput';
import { LoginTitle, LoginWrapper, ButtonWrapper } from './LoginPage.styled';
import Button from '../../components/Common/Button/Button';

function LoginPage() {
  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <TextInput name="" placeholder="이메일" inputType="email" form onChange={() => {}} />
      <TextInput name="" placeholder="비밀번호" inputType="password" form onChange={() => {}} />
      <ButtonWrapper>
        <Button type="enable" text="로그인" to="" onClick={() => {}} />
      </ButtonWrapper>
    </LoginWrapper>
  );
}

export default LoginPage;
