import styled, { css } from 'styled-components';

interface ModalTypeProps {
  type: 'revise' | 'todoList' | 'withdraw';
}

export const ModalLayout = styled.div<ModalTypeProps>`
  ${({ type }) => {
    if (type === 'revise') {
      return css`
        background-color: skyblue;
        width: 60%;
        border-radius: 5px;
        border: '2px solid red';
      `;
    }
    if (type === 'todoList') {
      return css`
        /* TodoList에 해당하는 스타일 */
      `;
    }

    if (type === 'withdraw') {
      return css`
        /* Withdraw에 해당하는 스타일 */
      `;
    }
    return css`
      /* 기본 스타일 */
    `;
  }}}
`;
