import { styled } from 'styled-components';

export const TodoItemWrapper = styled.li`
  // border: 1px solid blue;

  box-sizing: border-box;
  font-size: var(--small-font-size);
  display: flex;
  justify-content: center;
  gap: 6px;

  /* ===Checkbox와 텍스트의 수직 중앙 정렬 코드=== */
  align-items: center;
  div {
    line-height: 1rem;
  }
  div input {
    margin: 3px;
  }
  span {
    line-height: 2rem;
  }
  /* ===Checkbox와 텍스트의 수직 중앙 정렬 코드=== */
`;

export const TodoItemText = styled.span`
  /* 텍스트 말줄임 */
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  flex-grow: 1;
`;

export const TodoItemMenuBtn = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: var(--color-white);

  cursor: pointer;
`;
