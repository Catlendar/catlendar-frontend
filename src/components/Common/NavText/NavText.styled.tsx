import styled from 'styled-components';

export const NavTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavTextItem = styled.button`
  flex: 1; /* 꽉 채우기 위한 flex 속성 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  //   margin-left: 14.6rem;
  //   margin-right: 14.6rem;
  background: var(--color-white);
  color: var(--text-color-main);
  border-radius: 4rem;
  height: 4rem;
  font-size: var(--small-font-size);
`;
