import styled from 'styled-components';

export const ButtonLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyle = styled.button`
  flex: 1; /* 꽉 채우기 위한 flex 속성 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-left: 2.6rem;
  margin-right: 2.6rem;
  background: var(--button-color-landing);
  color: var(--color-white);
  border-radius: 1rem;
  height: 6rem;
  font-size: var(--small-font-size);
`;
