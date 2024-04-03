import styled from 'styled-components';

export const CompleteImgWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 960px) {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
  }
`;

export const LargeCompleteMsg = styled.div`
  font-size: var(--h2-font-size);
  font-weight: bold;
`;

export const SmallCompleteMsg = styled.div`
  font-size: var(--small-font-size);
  margin-top: 1.5rem;
`;

export const CompleteImg = styled.img`
  width: 25rem;
  height: 20rem;
  @media screen and (min-width: 960px) {
`;

export const ButtonWrapper = styled.div`
  padding-top: 10rem;
  width: 33.9rem;
`;
