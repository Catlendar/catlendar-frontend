import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { LoginWrapper } from '../LoginPage/LoginPage.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import { tokenInstance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';
import { EditPwBtn } from './ProfilePage.styled';

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
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const navigate = useNavigate();
  const { email } = userAtom;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9!@#$%^&*()\-_=+{};:,<.>]{8,16}$/;

  const isFormValid =
    password && newPassword && confirmPassword && passwordPattern.test(newPassword);

  const { mutate } = useMutation({
    mutationFn: async (userData: UserData) => {
      if (newPassword !== confirmPassword) {
        setConfirmError('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        throw new Error('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      } else {
        const response = await tokenInstance.post('user/updatePassword', userData);
        return response.data;
      }
    },
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
      navigate('/home');
    },
    onError: (error) => {
      console.log('onError', error);
      console.log(password, newPassword);
      navigate('/error');
    },
  });

  const handleChangePwd = () => {
    mutate({
      email,
      password,
      newPassword,
    });
  };

  return (
    <LoginWrapper>
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
          setConfirmError(''); // Clear confirm error message when input changes
        }}
      />
      <ErrorMessage message={confirmError} clearMessage={() => setConfirmError('')} />

      <EditPwBtn>
        <Button
          type={isFormValid ? 'enable' : 'disable'}
          text="변경하기"
          to=""
          onClick={handleChangePwd}
        />
      </EditPwBtn>
    </LoginWrapper>
  );
}
