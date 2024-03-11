import { styled } from 'styled-components';

export const TodoModalUl = styled.ul`
  width: 100%;

  li:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;

export const NoItemText = styled.li`
  color: var(--text-color-desc);
  font-size: 1.6rem;
`;
