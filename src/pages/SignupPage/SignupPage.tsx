import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SignUpWrapper, SignUpTitle } from './Signup.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import { instance } from '../../api/Axios';
import { SignUpAtom } from '../../atom/SignUpAtom';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>('');
  const [passSign, setPassSign] = useRecoilState(SignUpAtom);
  const navigate = useNavigate();

  // 입력된 이메일과 비밀번호, 비밀번호 확인 유효성검사
  const validateInputs = () => {
    // emailPattern 정규식 패턴:
    // 적어도 하나의 알파벳과 숫자가 있어야 하며,이메일 형식을 지켜야 함
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // passwordPattern 정규식 패턴: 적어도 하나의 알파벳과 숫자가 있어야 함
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9!@#$%^&*()\-_=+{};:,<.>]{8,16}$/;
    const isconfirmPasswordMatch = password === confirmPassword;
    return (
      emailPattern.test(email) &&
      email.trim() !== '' &&
      passwordPattern.test(password) &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      isconfirmPasswordMatch
    );
  };

  const emailVerify = async () => {
    try {
      const response = await instance.post('user/emailVerify', { email });
      if (response.status === 200) {
        if (response.data === '이미 가입된 이메일 주소 입니다.') {
          setEmailErrorMessage('사용할 수 없는 아이디입니다. 다른 아이디를 입력해 주세요.');
        } else {
          setPassSign({
            ...passSign,
            email,
            password,
          });
          navigate('/userinfo');
        }
      } else {
        navigate('/error');
      }
    } catch (error) {
      navigate('/error');
    }
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>
        이메일과 비밀번호를
        <br />
        입력해주세요.
      </SignUpTitle>
      <TextInput
        name="이메일"
        placeholder="이메일 주소"
        inputType="email"
        onChange={(value: string) => setEmail(value)}
      />
      <ErrorMessage message={emailErrorMessage} clearMessage={() => setEmailErrorMessage('')} />

      <TextInput
        name="비밀번호"
        placeholder="8~16자의 영문, 숫자를 사용해 주세요."
        inputType="password"
        onChange={(value: string) => setPassword(value)}
      />
      <ErrorMessage
        message={passwordErrorMessage}
        clearMessage={() => setPasswordErrorMessage('')}
      />

      <TextInput
        name="비밀번호 확인"
        placeholder="비밀번호 확인"
        inputType="password"
        onChange={(value: string) => setConfirmPassword(value)}
      />
      <ErrorMessage
        message={confirmPasswordErrorMessage}
        clearMessage={() => setConfirmPasswordErrorMessage('')}
      />

      <ButtonSubmitWrap>
        {validateInputs() ? (
          <Button type="enable" text="다음" to="" onClick={emailVerify} />
        ) : (
          <Button type="disable" text="다음" to="/" onClick={() => {}} />
        )}
      </ButtonSubmitWrap>
    </SignUpWrapper>
  );
}
