import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { LoginWrapper, ButtonWrapper } from '../LoginPage/LoginPage.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import { instance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';

export default function EditPwPage() {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [existError, setExistError] = useState<string>('');
  const [confirmError, setConfirmError] = useState<string>('');
  const [newPwdError, setNewPwdError] = useState<string>('');
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const navigate = useNavigate();

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
        placeholder="영문, 숫자포함 10자 이내"
        inputType="password"
        onChange={(value: string) => setNewPassword(value)}
      />
      <ErrorMessage message={newPwdError} clearMessage={() => setNewPwdError('')} />

      <TextInput
        name="새 비밀번호 확인"
        placeholder="새 비밀번호 확인"
        inputType="password"
        onChange={(value: string) => setConfirmPassword(value)}
      />
      <ErrorMessage message={confirmError} clearMessage={() => setConfirmError('')} />

      <ButtonWrapper>
        <Button type="enable" text="변경하기" to="" onClick={() => {}} />
        {/* <Button type="disable" text="변경하기" to="/" onClick={() => {}} /> */}
      </ButtonWrapper>
    </LoginWrapper>
  );
}
