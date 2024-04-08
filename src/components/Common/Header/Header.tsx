import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, BackButton, HeaderText } from './Header.styled';

interface HeaderProps {
  title: string;
  isFortunePage?: boolean;
}

export default function Header({ title, isFortunePage }: HeaderProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <HeaderWrapper className={isFortunePage ? 'fortune-header' : ''}>
      <BackButton aria-label="뒤로가기 버튼" onClick={handleClick} />
      <HeaderText>{title}</HeaderText>
    </HeaderWrapper>
  );
}
