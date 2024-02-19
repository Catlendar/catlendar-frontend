import React from 'react';
import { ErrorImgWrapper, LargeErrorMsg, SmallErrorMsg, ErrorImg } from './ErrorPage.styled';
import HomeButton from '../../components/Common/Button/HomeButton';
import boxCat from '../../assets/images/box-cat.png';

export default function ErrorPage() {
  return (
    <div>
      <ErrorImgWrapper>
        <ErrorImg src={boxCat} />
        <LargeErrorMsg>원하시는 페이지를 찾을 수 없습니다.</LargeErrorMsg>
        <SmallErrorMsg>다시 시도해 주세요.</SmallErrorMsg>
      </ErrorImgWrapper>
      <HomeButton />
    </div>
  );
}
