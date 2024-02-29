import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserInfoWrapper, UserInfoTitle, ButtonWrapper, BirthWrapper } from './UserInfo.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import { instance } from '../../api/Axios';
import DatePickerComponent from '../../components/DatePicker/DatePicker';
import SelectInput from '../../components/Common/TextInput/SelectInput';
import { BirthOption, BirthTimeOption } from '../../components/Common/TextInput/SelectData';
import GenderButton from '../../components/Common/GenderButton/GenderButton';
import { SignUpAtom } from '../../atom/SignUpAtom';

export default function UserInfoPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [birthTime, setBirthTime] = useState<string>('');
  const [calendarType, setCalendarType] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const signUpAtom = useRecoilValue(SignUpAtom);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<string>('');

  // DatePickerComponent에서 사용할 콜백 함수
  // 데이터 가공하여 2011. 02. 16. => 20110216 변경
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };
  // selectedDate가 변경될때마다 setBirthDate
  useEffect(() => {
    if (selectedDate) {
      setBirthDate(selectedDate.replace(/[. ]/g, ''));
    }
  }, [selectedDate]);

  const validateInputs = () => {
    return (
      name.trim() !== '' &&
      birthDate.trim() !== '' &&
      birthTime.trim() !== '' &&
      calendarType.trim() !== '' &&
      gender.trim() !== ''
    );
  };
  useEffect(() => {
    const storedEmail = signUpAtom.email;
    const storedPassword = signUpAtom.password;
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, [signUpAtom]);

  const signUp = async () => {
    try {
      const response = await instance.post('user/signUp', {
        email,
        password,
        name,
        birthDate,
        birthTime,
        calendarType,
        gender,
      });
      if (response.status === 200) {
        // signUpAtom에 있는 email, password 삭제
        localStorage.clear();
        navigate('/signup/complete');
      } else {
        navigate('/error');
      }
    } catch (error) {
      navigate('/error');
    }
  };
  return (
    <div>
      <UserInfoWrapper>
        <UserInfoTitle>
          간단한 정보를
          <br />
          입력해주세요.
        </UserInfoTitle>
        <TextInput
          name="이름"
          placeholder="이름"
          inputType="text"
          onChange={(value: string) => setName(value)}
        />
        <BirthWrapper>
          <DatePickerComponent onDateSelect={handleDateSelect} />
          <SelectInput
            name="양력"
            initial=""
            options={BirthOption}
            width={100}
            onChange={(value: string) => setCalendarType(value)}
          />
        </BirthWrapper>
        <SelectInput
          name="태어난 시간"
          initial=""
          options={BirthTimeOption}
          width={340}
          onChange={(value: string) => setBirthTime(value)}
        />
        <GenderButton name="성별" onChange={(value: string) => setGender(value)} />
        <ButtonWrapper>
          {validateInputs() ? (
            <Button type="enable" text="다음" to="" onClick={signUp} />
          ) : (
            <Button type="disable" text="다음" to="/" onClick={() => {}} />
          )}
        </ButtonWrapper>
      </UserInfoWrapper>
    </div>
  );
}
