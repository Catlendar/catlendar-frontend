import React from 'react';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../atom/UserAtom';
import { MainCardWrapper, ContentBox, CardContent, StyledLink, TextBox } from './MainCard.styled';
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

  return (
    <MainCardWrapper>
      <CardContent>
        <span>{formattedDate}</span>
        <ContentBox>
          <TextBox>
            <p>{userAtom.name}님</p>
            <h3>오늘 하루는</h3>
            <h3>일취월장이네요!</h3>
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
