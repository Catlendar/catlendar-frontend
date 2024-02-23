import { styled } from 'styled-components';

export const ModalItemWrapper = styled.li`
  border-bottom: 1px solid var(--bg-color-gray);
  padding-bottom: 0.6rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemContent = styled.p`
  flex: 1;

  /* 텍스트 말줄임 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
