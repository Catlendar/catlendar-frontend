import { styled } from 'styled-components';

export const TodoCircle = styled.div`
  background-color: ${({ theme }) => theme.color.todoCircle};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  .hasContent {
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;
