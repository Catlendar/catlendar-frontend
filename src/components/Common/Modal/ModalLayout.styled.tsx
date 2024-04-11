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
  width: 31.2rem;
  box-sizing: border-box;
  padding: 0 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 1.6rem;

  /* 모달 위치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  .button-wrapper {
    display: flex;
    gap: 1rem;
    margin: 1rem auto;
  }
`;

export const ModalLayout = styled.div<ModalTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  border-radius: 2rem;
  background-color: gray;

  .button-wrapper {
    display: flex;
    gap: 1rem;
    margin: 1rem auto;
  }

  .withdraw-wrapper {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  ${({ type }) => {
    if (type === 'revise') {
      return css`
        background-color: skyblue;
      `;
    }
    if (type === 'todoList') {
      return css`
        gap: 1rem;
      `;
    }

    if (type === 'withdraw') {
      return css`
        text-align: left;
        width: 31.2rem;
        height: 29rem;
        .withdraw-wrapper {
          h3 {
            font-size: var(--regular-font-size);
            padding: 2rem 0;
            color: var(--color-black);
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
  border: 0.1rem solid red;
  position: absolute;
`;

export const ReviseModalWrapper = styled.div``;
