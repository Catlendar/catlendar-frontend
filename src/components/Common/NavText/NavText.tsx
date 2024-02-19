import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavTextWrapper, NavTextItem } from './NavText.styled';

interface NavTextProps {
  to: string;
}

export default function NavText({ to }: NavTextProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div>
      <NavTextWrapper>
        <NavTextItem onClick={handleClick}>회원가입</NavTextItem>
      </NavTextWrapper>
    </div>
  );
}
