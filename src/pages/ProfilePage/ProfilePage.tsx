import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { UserAtom } from '../../atom/UserAtom';
import {
  ProfileName,
  ProfileTitle,
  ProfileWrapper,
  ProfileMain,
  Gear,
  MenuSection,
  ChartSection,
  ChartTxtWrapper,
  ChartWrapper,
  DesktopProfileWrapper,
} from './ProfilePage.styled';
import { ChartComponent } from '../../components/Chart/ChartComponent';
import { ModalBackground } from '../SettingPage/SettingPage.styled';
import WithdrawModal from '../../components/Common/Modal/WithdrawModal';

export default function ProfilePage({ isDesktop }: { isDesktop: boolean }) {
  const navigate = useNavigate();
  const user = useRecoilValue(UserAtom);
  const [modal, setModal] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  // 회원 탈퇴
  const handleWithdraw = () => {
    setModal(!modal);
  };

  return isDesktop ? (
    <main>
      <DesktopProfileWrapper>
        <MenuSection>
          <p>마이페이지</p>
          <ul>
            <li>
              <Link to="/editUser" className="menu-txt">
                내 정보 수정
              </Link>
            </li>
            <li>
              <Link to="/editPassword" className="menu-txt">
                비밀번호 변경
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} type="button">
                로그아웃
              </button>
            </li>
            <li>
              <button onClick={handleWithdraw} type="button">
                회원 탈퇴
              </button>
            </li>
          </ul>
          {modal && (
            <ModalBackground>
              <WithdrawModal onClose={() => setModal(false)} />
            </ModalBackground>
          )}
        </MenuSection>
        <ChartSection>
          <ChartTxtWrapper>
            <ProfileName>주간 차트</ProfileName>
            <ProfileMain>이번 달 나의 목표 달성률을 확인하세요!</ProfileMain>
          </ChartTxtWrapper>
          <ChartWrapper>
            <ChartComponent />
          </ChartWrapper>
        </ChartSection>
      </DesktopProfileWrapper>
    </main>
  ) : (
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
