import styled from 'styled-components';

export const LandingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  p {
    font-size: var(--small-font-size);
    /* margin-bottom: 17rem; */
  }
`;

export const LandingImg = styled.img`
  margin: 15rem 0 7rem;

  @media screen and (min-height: 0px) and (max-height: 750px) {
    margin: 6rem 0 2rem;
  }
  @media screen and (min-height: 751px) and (max-height: 940px) {
    margin: 12rem 0 4rem;
  }
`;

export const CatlendarImg = styled.img`
  /* width: 15.1rem; */
  /* height: 2.6rem; */
  margin: 1rem 0 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  width: 33.9rem;
`;
