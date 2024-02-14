import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  width: 39rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  bottom: 0;
  box-shadow: 0 -0.3rem 2rem rgba(0, 0, 0, 0.03);
`;

export const IconWrapper = styled.div<{ active: boolean }>`
  svg {
    cursor: pointer;
    fill: ${({ active }) => (active ? '#000' : '#ccc')};
    path {
      stroke: ${({ active }) => (active ? '#000' : '#ccc')};
      fill: ${({ active }) => (active ? '#000' : '#ccc')};
    }
  }
`;
