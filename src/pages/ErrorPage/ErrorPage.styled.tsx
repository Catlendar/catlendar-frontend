import styled from 'styled-components';

export const ErrorImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LargeErrorMsg = styled.div`
  font-size: var(--large-font-size);
  margin-top: 4.2rem;
  font-weight: bold;
`;

export const SmallErrorMsg = styled.div`
  font-size: var(--small-font-size);
  color: var(--text-color-main);
  margin-top: 1.5rem;
  margin-bottom: 4rem;
`;

export const ErrorImg = styled.img`
  width: 20rem;
  height: 20rem;
  margin-top: 21.9rem;
`;
