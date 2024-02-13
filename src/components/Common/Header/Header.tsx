import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, BackButton, HeaderText } from './Header.styled';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <HeaderWrapper>
      <BackButton onClick={handleClick} />
      <HeaderText>{title}</HeaderText>
    </HeaderWrapper>
  );
}
