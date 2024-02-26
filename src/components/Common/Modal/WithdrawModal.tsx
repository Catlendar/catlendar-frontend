import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ModalLayout } from './ModalLayout.styled';
import { tokenInstance } from '../../../api/Axios';
import { UserAtom } from '../../../atom/UserAtom';
import ModalButton from '../Button/ModalButton';

interface ModalProps {
  onClose: () => void;
}

interface UserData {
  userId: string;
}

export default function WithdrawModal({ onClose }: ModalProps) {
  const userAtom = useRecoilValue(UserAtom);
  const navigate = useNavigate();
  const { userId } = userAtom;

  const { mutate } = useMutation({
    mutationFn: async (userData: UserData) => {
      const response = await tokenInstance.post('user/deleteUser', userData);
      return response.data;
    },
    onSuccess: () => {
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.error('onError', error);
      navigate('/error');
    },
  });

  const handleDeleteUser = () => {
    mutate({ userId });
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
          <ModalButton type="withdraw" onClick={handleDeleteUser} />
        </div>
      </div>
    </ModalLayout>
  );
}
