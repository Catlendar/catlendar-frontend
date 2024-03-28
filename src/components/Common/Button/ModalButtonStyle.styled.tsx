import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'complete' | 'remove' | 'cancel' | 'withdraw';
}

export const ModalButtonStyle = styled.button<ButtonProps>`
  width: 13rem;
  height: 4.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--button-color-modal);
  font-size: 1.4rem;
  cursor: pointer;

  ${({ type }) => {
    if (type === 'complete' || type === 'cancel') {
      return css`
        color: var(--text-color-main);
      `;
    }
    if (type === 'remove') {
      return css`
        color: var(--text-color-warning);
      `;
    }
    return css`
      color: var(--color-white);
      background-color: var(--text-color-warning);
    `;
  }};
`;
