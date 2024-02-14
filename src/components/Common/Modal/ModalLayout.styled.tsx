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
	border-radius: 10px;

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
        .withdraw-wrapper {
          h3 {
            font-size: var(--regular-font-size);
          }
          p {
            font-size: var(--small-font-size);
            color: var(--text-color-desc);
          }
        }
        background-color: yellow;
      `;
    }
    return css``;
  }}}
`;
