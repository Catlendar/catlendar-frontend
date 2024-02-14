import React from 'react';
import { ModalLayout } from './ModalLayout.styled';
import ModalButton from '../Button/ModalButton';

interface ModalProps {
  onClose: () => void;
}

export default function WithdrawModal({ onClose }: ModalProps) {
  const handleWithdrawClick = () => {
    // 탈퇴하는 API 호출
    console.log('탈퇴 완료!');
    onClose();
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
