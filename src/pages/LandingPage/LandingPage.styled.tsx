import styled from 'styled-components';

export const LandingWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  p {
    font-size: var(--small-font-size);
  }
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

export const LandingImg = styled.img`
  width: 23rem;
  height: 23rem;
`;

export const CatlendarImg = styled.img`
  width: 15.1rem;
  height: 2.6rem;
  margin: 1rem 0 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  width: 33.9rem;
`;
