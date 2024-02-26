import { styled } from 'styled-components';

export const TodoItemWrapper = styled.li`
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

interface TodoItemTextProps {
  completed: boolean;
}

export const TodoItemText = styled.span<TodoItemTextProps>`
  /* 텍스트 말줄임 */
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  color: ${(props) => (props.completed ? 'var(--text-color-main)' : 'var(--color-black)')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export const TodoItemMenuBtn = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: var(--color-white);

  cursor: pointer;
`;
