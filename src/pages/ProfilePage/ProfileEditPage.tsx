import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import GenderButton from '../../components/Common/GenderButton/GenderButton';
import SelectInput from '../../components/Common/TextInput/SelectInput';
import { BirthOption, BirthTimeOption } from '../../components/Common/TextInput/SelectData';
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
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const [name, setName] = useState(userAtom.name);
  const [birthDate, setBirthDate] = useState(userAtom.birthDate || '');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState(userAtom.gender || '');
  const [calendarType, setCalendarType] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const navigate = useNavigate();

  console.log(userAtom);

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
      setUserAtom((prev) => ({ ...prev, name, birthDate, birthTime, calendarType, gender }));
      navigate('/home');
    },
    onError: (error) => {
      console.error('onError', error);
      navigate('/error');
    },
  });

  const handleUpdateUser = () => {
    mutate({
      name,
      birthDate,
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
        placeholder={name}
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
          name="양력"
          options={BirthOption}
          width={100}
          initial={userAtom.calendarType}
          onChange={(value: string) => setCalendarType(value)}
        />
      </div>
      <SelectInput
        name="태어난 시간"
        options={BirthTimeOption}
        width={340}
        initial={userAtom.birthTime}
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
