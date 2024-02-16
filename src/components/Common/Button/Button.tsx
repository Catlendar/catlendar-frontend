import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonItem, ButtonWrapper } from './Button.styled';

interface ButtonProps {
  type: 'landing' | 'enable' | 'disable';
  text: string;
  to: string;
  onClick: () => void;
}

/* 
사용방법
=> 사용하는 위치에 알맞은 타입을 사용
1. 로그인, 회원가입
  <Button type="landing" text="로그인" to="/Login" onClick={onClick} />
2. 디폴트
  <Button type="enable" text="다음" to="/UserInfoPage" onClick={() => {}} />
3. disable상태
  <Button type="disable" text="다음" to="/" onClick={() => {}} />
*/
export default function Button({ type, text, to, onClick }: ButtonProps) {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.
  let buttonColor = '';
  let isDisabled = false;
  let cursorStyle = 'pointer';

  switch (type) {
    case 'landing':
      buttonColor = 'var(--button-color-landing)';
      break;
    case 'enable':
      buttonColor = 'var(--button-color-enable)';
      break;
    case 'disable':
      buttonColor = 'var(--button-color-disabled)';
      isDisabled = true;
      cursorStyle = 'not-allowed';
      break;
    default:
      buttonColor = 'var(--button-color-enable)';
      break;
  }

  const handleClick = () => {
    navigate(to);
  };

  return (
    <ButtonWrapper>
      <ButtonItem
        style={{ backgroundColor: buttonColor, cursor: cursorStyle }}
        disabled={isDisabled}
        onClick={() => {
          handleClick();
          onClick();
        }}
      >
        {text}
      </ButtonItem>
    </ButtonWrapper>
  );
}
