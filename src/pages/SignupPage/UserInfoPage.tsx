import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfoWrapper, UserInfoTitle, ButtonWrapper } from './UserInfo.styled';
import TextInput from '../../components/Common/TextInput/TextInput';
import Button from '../../components/Common/Button/Button';
import { instance } from '../../api/Axios';

export default function UserInfoPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [birthTime, setBirthTime] = useState<string>('');
  const [calendarType, setCalendarType] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const navigate = useNavigate();

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
    // 로컬 스토리지에서 'email' 키 값 가져옴
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      // 만약 저장된 이메일 값이 있다면 상태를 업데이트합니다.
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

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
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('password');
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
        <TextInput
          name="생년월일"
          placeholder="생년월일"
          inputType="text"
          onChange={(value: string) => setBirthDate(value)}
        />
        <TextInput
          name="양력"
          placeholder="양력"
          inputType="text"
          onChange={(value: string) => setCalendarType(value)}
        />
        <TextInput
          name="태어난시간"
          placeholder="모름"
          inputType="text"
          onChange={(value: string) => setBirthTime(value)}
        />
        <TextInput
          name="성별"
          placeholder="남성"
          inputType="text"
          onChange={(value: string) => setGender(value)}
        />
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
