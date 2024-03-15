import React from 'react';
import Button from '../../components/Common/Button/Button';
import { LandingWrapper, LandingImg, CatlendarImg } from './LandingPage.styled';
import landingCat from '../../assets/images/landing-cat.png';
import landingCatlendar from '../../assets/icons/catlendar.svg';
import { ButtonLandingWrap } from '../../components/Common/Button/Button.styled';

export default function LandingPage() {
  return (
    <LandingWrapper>
      <LandingImg src={landingCat} />
      <CatlendarImg src={landingCatlendar} />
      <p>오늘의 할일을 같이 계획해봐요!</p>
      <ButtonLandingWrap>
        <Button type="landing" text="회원가입" to="/signup" onClick={() => {}} />
        <Button type="landing" text="로그인" to="/login" onClick={() => {}} />
      </ButtonLandingWrap>
    </LandingWrapper>
  );
}
