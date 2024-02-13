import React from 'react';
import { ModalButtonStyle } from './ModalButtonStyle.styled';

interface ButtonProps {
  type: 'complete' | 'remove' | 'cancel' | 'withdraw';
  onClick: () => void;
}
export default function ModalButton({ type, onClick }: ButtonProps) {
  let text = '';

  function handleClick() {}
  switch (type) {
    case 'complete':
      text = '완료';
      break;
    case 'remove':
      text = '삭제';
      break;
    case 'cancel':
      text = '더 써볼래요';
      break;
    case 'withdraw':
      text = '떠날래요';
      break;
    default:
      break;
  }
  return <ModalButtonStyle type={type}>{text}</ModalButtonStyle>;
}
