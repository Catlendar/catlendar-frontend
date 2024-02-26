import React, { useState, useEffect } from 'react';
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
import { Input, InputName } from '../../components/Common/TextInput/TextInput.styled';
import { EditPwBtn, ProfileWrapper } from './ProfilePage.styled';
import { tokenInstance } from '../../api/Axios';
import { UserAtom } from '../../atom/UserAtom';
import DatePickerComponent from '../../components/DatePicker/DatePicker';

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
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('');
  const [calendarType, setCalendarType] = useState('');
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const navigate = useNavigate();

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    if (selectedDate) {
      setBirthDate(selectedDate.replace(/[. ]/g, ''));
    }
  }, [selectedDate]);

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
    <ProfileWrapper>
      <TextInput
        name="이름"
        placeholder=""
        inputType="text"
        onChange={(value: string) => setName(value)}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DatePickerComponent onDateSelect={handleDateSelect} />
        <SelectInput
          name=""
          options={BirthOption}
          width={100}
          onChange={(value: string) => setCalendarType(value)}
        />
      </div>
      <SelectInput
        name="태어난 시간"
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
    </ProfileWrapper>
  );
}
