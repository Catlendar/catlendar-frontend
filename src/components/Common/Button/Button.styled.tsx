import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonItem = styled.button`
  flex: 0.5; /* 꽉 채우기 위한 flex 속성 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: var(--button-color-landing);
  color: var(--color-white);
  border-radius: 1rem;
  height: 5rem;
  font-size: var(--small-font-size);
  // margin: 10px;
  @media screen and (min-width: 320px) {
    flex: 0.8;
    @media screen and (min-height: 750px) {
      height: 6rem;
    }
  }

  @media screen and (min-width: 400px) {
    flex: 0.9;
  }
`;

export const ButtonPageWrap = styled.div`
  width: 33.9rem;
`;

export const ButtonLandingWrap = styled(ButtonPageWrap)`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonSubmitWrap = styled(ButtonPageWrap)``;
