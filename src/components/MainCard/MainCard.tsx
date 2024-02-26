import React from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../atom/UserAtom';
import { fortuneDataAtom } from '../../atom/FortuneStateAtom';
import {
  MainCardWrapper,
  CardContent,
  Today,
  ContentBox,
  TextBox,
  UserName,
  StyledLink,
  TodayFortune,
} from './MainCard.styled';
import mainCat from '../../assets/images/image-main-cat.png';
import arrowRight from '../../assets/icons/icon-arrow-right.svg';

export default function MainCard() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = weekDays[day];
  const formattedDate = `${month}월 ${date}일 ${dayOfWeek}요일`;

  const userAtom = useRecoilValue(UserAtom);
  const { fortuneTitle } = useRecoilValue(fortuneDataAtom);

  return (
    <MainCardWrapper>
      <CardContent>
        <Today>{formattedDate}</Today>
        <ContentBox>
          <TextBox>
            <UserName>{userAtom.name}님</UserName>
            <TodayFortune>오늘 하루는</TodayFortune>
            <TodayFortune>{fortuneTitle}이네요!</TodayFortune>
          </TextBox>
          <img src={mainCat} alt="메인 고양이 이미지" />
        </ContentBox>
        <StyledLink to="/fortune">
          오늘의 운세
          <img src={arrowRight} alt="화살표 아이콘" />
        </StyledLink>
      </CardContent>
    </MainCardWrapper>
  );
}
