import styled, { css } from 'styled-components';

interface ModalTypeProps {
  type: 'revise' | 'todoList' | 'withdraw';
}

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-blur);
  z-index: 99;
`;

export const ModalWrapper = styled.div`
  /* width: 312px 빼면 모달이 늘어남, 모르겠어서 312px 줬음 */
  width: 312px;
  box-sizing: border-box;
  padding: 0 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 16px;

  /* 모달 위치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  .button-wrapper {
    display: flex;
    gap: 10px;
    margin: 10px auto;
  }
`;

export const ModalLayout = styled.div<ModalTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  border-radius: 20px;
  background-color: gray;

  .button-wrapper {
    display: flex;
    gap: 10px;
    margin: 10px auto;
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

export const ReviseModalBackground = styled.div`
  border: 1px solid red;
  position: absolute;
`;

export const ReviseModalWrapper = styled.div``;
