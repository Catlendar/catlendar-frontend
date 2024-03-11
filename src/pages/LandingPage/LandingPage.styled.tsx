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
  /* width: 23rem; */
  /* height: 23rem; */
  margin-top: 13.8rem;
`;

export const CatlendarImg = styled.img`
  /* width: 15.1rem; */
  /* height: 2.6rem; */
  margin-top: 3.4rem;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  width: 33.9rem;
`;
