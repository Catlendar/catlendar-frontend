/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import TextInput from '../../components/Common/TextInput/TextInput';
import {
  LoginTitle,
  LoginWrapper,
  CheckBoxInput,
  CheckBoxWrapper,
  StyledSubmitButton,
} from './LoginPage.styled';
import Button from '../../components/Common/Button/Button';
import { instance } from '../../api/Axios';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import { UserAtom } from '../../atom/UserAtom';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const [check, setCheck] = useState<boolean>(false);

  const navigate = useNavigate();

  // 입력된 이메일과 비밀번호 유효성검사
  const validateInputs = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email) && email.trim() !== '' && password.trim() !== '';
  };

  const login = async () => {
    try {
      const response = await instance.post('user/login', { email, password });
      if (response.status === 200) {
        if (response.data === '존재하지 않는 이메일입니다.') {
          setEmailErrorMessage(`${response.data}`);
        } else if (response.data === '비밀번호가 일치하지않습니다.') {
          setPasswordErrorMessage(`${response.data}`);
        } else {
          // localStorage에 토큰값 저장
          localStorage.setItem('token', response.data.token);
          // localStorage에 로그인한 user정보 저장 (atom)
          const atomUserInfo = response.data;
          setUserAtom({
            ...userAtom,
            userId: atomUserInfo.userId,
            email: atomUserInfo.email,
            name: atomUserInfo.name,
            birthDate: atomUserInfo.birthDate,
            birthTime: atomUserInfo.birthTime,
            calendarType: atomUserInfo.calendarType,
            gender: atomUserInfo.gender,
            registDate: atomUserInfo.registDate,
            token: atomUserInfo.token,
          });
          navigate('/home');
        }
      } else {
        navigate('/error');
      }
    } catch (error) {
      navigate('/error');
    }
  };
  const handleInputChange = (type: string) => {
    switch (type) {
      case 'check':
        setCheck(!check);
        if (!check) {
          setEmail('catlendar@admin.com');
          setPassword('qwer1234!');
        } else {
          setEmail('');
          setPassword('');
        }
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validateInputs()) {
      login();
    }
  };
  return (
    <main>
      <LoginWrapper>
        <form onSubmit={handleFormSubmit}>
          <LoginTitle>로그인</LoginTitle>
          <TextInput
            name=""
            placeholder="이메일"
            inputType="email"
            value={email}
            onChange={(value: string) => setEmail(value)}
          />
          <ErrorMessage message={emailErrorMessage} clearMessage={() => setEmailErrorMessage('')} />

          <TextInput
            name=""
            placeholder="비밀번호"
            inputType="password"
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <ErrorMessage
            message={passwordErrorMessage}
            clearMessage={() => setPasswordErrorMessage('')}
          />
          <CheckBoxWrapper>
            <CheckBoxInput
              id="checkbox"
              type="checkbox"
              onChange={() => handleInputChange('check')}
            />
            <label htmlFor="checkbox">캣린더 체험하기</label>
          </CheckBoxWrapper>
          <StyledSubmitButton>
            {validateInputs() ? (
              <Button type="enable" text="로그인" to="" onClick={() => {}} />
            ) : (
              <Button type="disable" text="로그인" to="/" onClick={() => {}} />
            )}
          </StyledSubmitButton>
        </form>
      </LoginWrapper>
    </main>
  );
}

export default LoginPage;
