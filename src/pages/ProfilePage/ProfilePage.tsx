import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import { ProfileName, ProfileTitle, ProfileWrapper, Img, ProfileMain } from './ProfilePage.styled';
import settingIcon from '../../assets/images/setting.png';
import { ChartComponent } from '../../components/Chart/ChartComponent';

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = useRecoilValue(UserAtom);

  return (
    <ProfileWrapper>
      <ProfileTitle>
        <ProfileName>마이페이지</ProfileName>
        <Img src={settingIcon} alt="" onClick={() => navigate('/setting')} />
      </ProfileTitle>
      <ProfileMain>
        {user.name}님, <br />
        오늘 하루는 어떠셨나요?
        <ChartComponent />
      </ProfileMain>
    </ProfileWrapper>
  );
}
