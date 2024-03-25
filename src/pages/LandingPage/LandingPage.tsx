import React from 'react';
import Button from '../../components/Common/Button/Button';
import { LandingWrapper, LandingImg, CatlendarImg, ButtonWrapper } from './LandingPage.styled';
import landingCat from '../../assets/images/landing-cat.png';
import landingCatlendar from '../../assets/icons/catlendar.svg';

export default function LandingPage() {
  return (
    <div>
      <LandingWrapper>
        <LandingImg src={landingCat} loading="lazy" />
        <CatlendarImg src={landingCatlendar} loading="lazy" />
        <p>오늘의 할일을 같이 계획해봐요!</p>
        <ButtonWrapper>
          <Button type="landing" text="회원가입" to="/signup" onClick={() => {}} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button type="landing" text="로그인" to="/login" onClick={() => {}} />
        </ButtonWrapper>
      </LandingWrapper>
    </div>
  );
}
