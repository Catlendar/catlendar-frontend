import { styled } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const TodoItemWrapper = styled.li`
  box-sizing: border-box;
  font-size: var(--xsmall-font-size);
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

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    width: 100%;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    padding: 1rem 1.2rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.97);
    bottom: 2rem;
  }
`;
