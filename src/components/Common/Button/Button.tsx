import React from 'react';
import { ButtonStyle, ButtonLayout } from './ButtonStyle';

interface ButtonProps {
  type: 'landing' | 'enable' | 'disable';
  text: string;
  onClick: () => void;
}

/* 
사용방법
=> 사용하는 위치에 알맞은 타입을 사용
1. 로그인, 회원가입
<Button type="landing" text="로그인" onClick={onClick} />
2. 디폴트
<Button type="enable" text="다음" onClick={onClick} />
3. disable상태
<Button type="disable" text="다음" onClick={onClick} />
*/
export default function Button({ type, text, onClick }: ButtonProps) {
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
  return (
    <ButtonLayout>
      <ButtonStyle
        style={{ backgroundColor: buttonColor, cursor: cursorStyle }}
        disabled={isDisabled}
        onClick={onClick}
      >
        {text}
      </ButtonStyle>
    </ButtonLayout>
  );
}
