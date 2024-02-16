import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileName, ProfileTitle, ProfileWrapper, Img, ProfileMain } from './ProfilePage.styled';
import settingIcon from '../../assets/images/setting.png';

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <ProfileWrapper>
      <ProfileTitle>
        <ProfileName>마이페이지</ProfileName>
        <Img src={settingIcon} alt="" onClick={() => navigate('/setting')} />
      </ProfileTitle>
      <ProfileMain>
        최지완님, <br />
        오늘 하루는 어떠셨나요?
      </ProfileMain>
    </ProfileWrapper>
  );
}
