import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import { ProfileName, ProfileTitle, ProfileWrapper, ProfileMain, Gear } from './ProfilePage.styled';
import { ChartComponent } from '../../components/Chart/ChartComponent';

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = useRecoilValue(UserAtom);

  return (
    <main>
      <ProfileWrapper>
        <ProfileTitle>
          <ProfileName>마이페이지</ProfileName>
          <Gear onClick={() => navigate('/setting')} />
        </ProfileTitle>
        <ProfileMain>
          {user.name}님, <br />
          오늘 하루는 어떠셨나요?
        </ProfileMain>
        <ChartComponent />
      </ProfileWrapper>
    </main>
  );
}
