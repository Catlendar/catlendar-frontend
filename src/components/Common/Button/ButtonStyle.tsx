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
  margin-left: 26px;
  margin-right: 26px;
  background: var(--button-color-landing);
  color: var(--color-white);
  border-radius: 10px;
  height: 60px;
  font-size: var(--small-font-size);
`;
