import { styled } from 'styled-components';

export const TodoListWrapper = styled.div`
  border: 1px solid blue;

  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px 15px;
  width: 100%;

  background-color: var(--color-white);
`;

export const TodoListUl = styled.ul`
  border: 1px solid red;

  p {
    font-size: var(--small-font-size);
    color: var(--input-bb);
  }
  /* listItem의 마지막 요소만 제외하고 스타일 적용 */
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
