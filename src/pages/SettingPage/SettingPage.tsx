import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileWrapper } from '../ProfilePage/ProfilePage.styled';
import { DeleteBtn, ModalBackground, SettingBtn, SettingLi, SettingUl } from './SettingPage.styled';
import WithdrawModal from '../../components/Common/Modal/WithdrawModal';

export default function SettingPage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const buttonActions = [
    { text: '내 정보 수정', path: '/profile/edit' },
    { text: '비밀번호 변경', path: '/profile/editPassword' },
  ];

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem('recoil-persist');
    localStorage.removeItem('token');
    alert('로그아웃 되었다냥');
    navigate('/');
  };

  // 회원 탈퇴
  const handleWithdraw = () => {
    setModal(!modal);
  };

  return (
    <ProfileWrapper>
      <SettingUl>
        {buttonActions.map(({ text, path }) => (
          <SettingLi key={text}>
            <SettingBtn onClick={() => navigate(path)}>{text}</SettingBtn>
          </SettingLi>
        ))}
        <SettingLi>
          <SettingBtn onClick={handleLogout}>로그아웃</SettingBtn>
        </SettingLi>
        <SettingLi>
          <DeleteBtn onClick={handleWithdraw}>회원 탈퇴</DeleteBtn>
        </SettingLi>
      </SettingUl>
      {modal && (
        <ModalBackground>
          <WithdrawModal onClose={() => setModal(false)} />
        </ModalBackground>
      )}
    </ProfileWrapper>
  );
}
