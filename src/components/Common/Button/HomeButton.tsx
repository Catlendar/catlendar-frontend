import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeButtonWrapper, HomeButtonItem } from './HomeButton.styled';

/*
사용방법
=> 에러페이지에 사용
*/
export default function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home');
  };

  return (
    <div>
      <HomeButtonWrapper>
        <HomeButtonItem onClick={handleClick}>홈으로</HomeButtonItem>
      </HomeButtonWrapper>
    </div>
  );
}
