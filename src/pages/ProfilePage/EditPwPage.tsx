import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import { tokenInstance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';
import { ProfileWrapper } from './ProfilePage.styled';
import { ButtonSubmitWrap } from '../../components/Common/Button/Button.styled';

interface UserData {
  password: string;
  email: string;
  newPassword: string;
}

export default function EditPwPage() {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [existError, setExistError] = useState<string>('');
  const [confirmError, setConfirmError] = useState<string>('');
  const [newPwdError, setNewPwdError] = useState<string>('');
  const userAtom = useRecoilValue(UserAtom);
  const navigate = useNavigate();
  const { email } = userAtom;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,16}$/;

  const isFormValid = password && newPassword && confirmPassword;

  const { mutate } = useMutation({
    mutationFn: async (userData: UserData) => {
      const response = await tokenInstance.post('user/updatePassword', userData);
      if (response.status === 200) {
        if (response.data === '기존 비밀번호와 일치하지 않습니다.') {
          throw new Error(`${response.data}`);
        } else {
          return response.data;
        }
      } else {
        throw new Error('error');
      }
    },
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
      navigate('/home');
    },
    onError: (error) => {
      if (error.message === '기존 비밀번호와 일치하지 않습니다.') {
        setExistError(error.message);
      } else {
        navigate('/error');
      }
    },
  });

  const handleChangePwd = () => {
    if (!passwordPattern.test(newPassword)) {
      setNewPwdError('비밀번호 형식이 맞지 않습니다.');
    } else if (newPassword !== confirmPassword) {
      setConfirmError('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
      mutate({
        email,
        password,
        newPassword,
      });
    }
  };

  return (
    <ProfileWrapper>
      <TextInput
        name="기존 비밀번호"
        placeholder="기존 비밀번호 입력"
        inputType="password"
        onChange={(value: string) => setPassword(value)}
      />
      <ErrorMessage message={existError} clearMessage={() => setExistError('')} />

      <TextInput
        name="새 비밀번호"
        placeholder="8~16자의 영문, 숫자를 사용해 주세요."
        inputType="password"
        onChange={(value: string) => setNewPassword(value)}
      />
      <ErrorMessage message={newPwdError} clearMessage={() => setNewPwdError('')} />

      <TextInput
        name="새 비밀번호 확인"
        placeholder="새 비밀번호 확인"
        inputType="password"
        onChange={(value: string) => {
          setConfirmPassword(value);
          setConfirmError('');
        }}
      />
      <ErrorMessage message={confirmError} clearMessage={() => setConfirmError('')} />

      <ButtonSubmitWrap>
        <Button
          type={isFormValid ? 'enable' : 'disable'}
          text="변경하기"
          to=""
          onClick={handleChangePwd}
        />
      </ButtonSubmitWrap>
    </ProfileWrapper>
  );
}
