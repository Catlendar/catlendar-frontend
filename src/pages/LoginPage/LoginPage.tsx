import React from 'react';
import TextInput from '../../components/Common/TextInput';
import AddTodo from '../../components/Common/AddTodo';

function LoginPage() {
  return (
    <div>
      <TextInput name="이메일" placeholder="이메일 주소" inputType="email" />
      <TextInput name="비밀번호" placeholder="영문, 숫자 포함 10자 이내" inputType="password" />
      <TextInput name="비밀번호 확인" placeholder="비밀번호 확인" inputType="password" />
      <AddTodo />
    </div>
  );
}

export default LoginPage;
