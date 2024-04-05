import React from 'react';
import {
  CompleteImgWrapper,
  LargeCompleteMsg,
  SmallCompleteMsg,
  ButtonWrapper,
  CompleteImg,
} from './SignupCompletePage.styled';
import Button from '../../components/Common/Button/Button';
import happyCat from '../../assets/images/happy-cat.png';

export default function SignupCompletePage() {
  return (
    <main>
      <CompleteImgWrapper>
        <CompleteImg src={happyCat} />
        <LargeCompleteMsg>캣린더 가입을 축하드려요</LargeCompleteMsg>
        <SmallCompleteMsg>나만의 하루를 계획해보세요.</SmallCompleteMsg>
        <ButtonWrapper>
          <Button type="enable" text="시작하기" to="/Login" onClick={() => {}} />
        </ButtonWrapper>
      </CompleteImgWrapper>
    </main>
  );
}
