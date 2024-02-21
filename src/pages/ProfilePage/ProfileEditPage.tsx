import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LoginWrapper } from '../LoginPage/LoginPage.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import Button from '../../components/Common/Button/Button';
import GenderButton from '../../components/Common/GenderButton/GenderButton';
import SelectInput from '../../components/Common/TextInput/SelectInput';
import { BirthOption, BirthTimeOption } from '../../components/Common/TextInput/SelectData';
import { InputName } from '../../components/Common/TextInput/TextInput.styled';
import { EditPwBtn } from './ProfilePage.styled';
import { tokenInstance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';

interface UserData {
  name: string;
  birthDate: string;
  birthTime: string;
  calendarType: string;
  gender: string;
  email: string;
}

export default function ProfileEditPage() {
  const [name, setName] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('');
  const [calendarType, setCalendarType] = useState('');
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);

  // const { email, birthDate } = userAtom;
  const navigate = useNavigate();

  // console.log(userAtom);

  // 정보수정 api
  // const handleUpdateUser = async () => {
  //   try {
  //     const response = await tokenInstance.post('user/updateUser', {
  //       name,
  //       birthDate,
  //       birthTime,
  //       calendarType,
  //       gender,
  //       email,
  //     });
  //     if (response.status === 200) {
  //       if (response.data === false) {
  //         alert('비어있는 정보가 있습니다.');
  //       } else {
  //         setUserAtom((prev) => ({ ...prev, name, birthTime, calendarType, gender }));
  //         navigate('/home');
  //       }
  //     } else {
  //       console.log('error');
  //       navigate('/error');
  //     }
  //   } catch (error) {
  //     console.log('catch error', error);
  //     navigate('/error');
  //   }
  // };

  // tanstack Query 사용
  const { mutate } = useMutation({
    mutationFn: async (userData: UserData) => {
      const response = await tokenInstance.post('user/updateUser', userData);
      return response.data;
    },
    onSuccess: () => {
      setUserAtom((prev) => ({ ...prev, name, birthTime, calendarType, gender }));
      navigate('/home');
    },
    onError: (error) => {
      console.error('onError', error);
      console.log(name, gender, birthTime, calendarType);
      navigate('/error');
    },
  });

  const handleUpdateUser = () => {
    mutate({
      name,
      birthDate: userAtom.birthDate,
      birthTime,
      calendarType,
      gender,
      email: userAtom.email,
    });
  };

  const isFormValid = name && birthTime && calendarType && gender;

  return (
    <LoginWrapper>
      <TextInput
        name="이름"
        placeholder=""
        inputType="text"
        onChange={(value: string) => setName(value)}
      />
      <InputName>생년월일</InputName>
      <SelectInput
        options={BirthOption}
        width={100}
        onChange={(value: string) => setCalendarType(value)}
      />
      <InputName>태어난 시간</InputName>
      <SelectInput
        options={BirthTimeOption}
        width={340}
        onChange={(value: string) => setBirthTime(value)}
      />
      <GenderButton name="성별" onChange={(value: string) => setGender(value)} />
      <EditPwBtn>
        <Button
          type={isFormValid ? 'enable' : 'disable'}
          text="수정"
          to=""
          onClick={handleUpdateUser}
        />
      </EditPwBtn>
    </LoginWrapper>
  );
}
