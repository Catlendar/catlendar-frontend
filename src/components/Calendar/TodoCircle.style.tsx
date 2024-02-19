import { styled } from 'styled-components';

export const TodoCircle = styled.div`
  background-color: var(--color-todoCircle);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
  font-weight: 700;
  .hasContent {
    background-color: var(--color-white);
    border: 1px solid var(--color-primary);
  }
`;
