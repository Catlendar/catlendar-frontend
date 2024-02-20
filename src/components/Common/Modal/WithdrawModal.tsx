import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ModalLayout } from './ModalLayout.styled';
import { tokenInstance } from '../../../api/Axios';
import { UserAtom } from '../../../atom/UserAtom';
import ModalButton from '../Button/ModalButton';

interface ModalProps {
  onClose: () => void;
}

export default function WithdrawModal({ onClose }: ModalProps) {
  const userAtom = useRecoilValue(UserAtom);
  const navigate = useNavigate();
  const { email } = userAtom;

  console.log(email);

  const handleWithdrawClick = async () => {
    try {
      const response = await tokenInstance.post('user/deleteUser', {
        email,
      });
      if (response.status === 200) {
        if (response.data === false) {
          alert('실패');
        } else {
          alert('성공');
          navigate('/');
        }
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <ModalLayout type="withdraw">
      <div className="withdraw-wrapper">
        <h3>회원 탈퇴</h3>
        <p>회원 탈퇴 시 기존에 작성된 일들은 삭제되어 복구가 불가해요.</p>
        <p>정말로 탈퇴하시겠어요?</p>
        <div className="button-wrapper">
          <ModalButton
            type="cancel"
            onClick={() => {
              handleCancelClick();
            }}
          />
          <ModalButton
            type="withdraw"
            onClick={() => {
              handleWithdrawClick();
            }}
          />
        </div>
      </div>
    </ModalLayout>
  );
}
