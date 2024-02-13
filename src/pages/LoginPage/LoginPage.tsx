import React from 'react';
import TextInput from '../../components/Common/TextInput';
import { LoginTitle, LoginWrapper } from './LoginPage.styled';
import GenderButton from '../../components/Common/GenderButton';

function LoginPage() {
  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <TextInput name="이메일" placeholder="이메일 주소" inputType="email" />
      <TextInput name="비밀번호" placeholder="영문, 숫자 포함 10자 이내" inputType="password" />
      <GenderButton name="성별" />
    </LoginWrapper>
  );
}

export default LoginPage;
