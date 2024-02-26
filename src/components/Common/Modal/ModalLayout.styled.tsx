import styled, { css } from 'styled-components';

interface ModalTypeProps {
  type: 'revise' | 'todoList' | 'withdraw';
}

export const ModalLayout = styled.div<ModalTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  border-radius: 20px;
  background-color: gray;

  border: 1px solid red;

  .button-wrapper {
    display: flex;
    gap: 10px;
    margin: 10px auto;

    border: 1px solid red;
  }

  .withdraw-wrapper {
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  ${({ type }) => {
    if (type === 'revise') {
      return css`
        background-color: skyblue;
      `;
    }
    if (type === 'todoList') {
      return css`
        gap: 10px;
      `;
    }

    if (type === 'withdraw') {
      return css`
        text-align: left;
        width: 312px;
        height: 290px;
        .withdraw-wrapper {
          h3 {
            font-size: var(--regular-font-size);
            padding: 20px 0;
          }
          p {
            font-size: var(--small-font-size);
            color: var(--text-color-desc);
          }
        }
        background-color: var(--color-white);
      `;
    }
    return css``;
  }}
`;
