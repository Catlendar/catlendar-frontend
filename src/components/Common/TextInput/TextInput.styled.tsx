import styled, { css } from 'styled-components';

interface InputProps {
  form?: boolean;
  width?: string | number;
  marginTop?: number;
  inputMode?: string;
}

const commonInputStyle = css<InputProps>`
  width: 100%;
  border: none;
  border-bottom: 0.1rem solid var(--input-bb);
  background: none;
  color: var(--color-black);
  padding-bottom: 1rem;
  margin-top: 1rem;
  font-size: var(--large-font-size);

  &::placeholder {
    color: var(--text-color-placeholder);
  }

  ${({ form }) =>
    !form &&
    css`
      width: 80%;
      font-size: var(--small-font-size);
    `}

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid var(--bg-color-main);
  }
`;

export const Input = styled.input<InputProps>`
  ${commonInputStyle}

  width: ${(props) => (props.width ? `${props.width}px` : '33rem')};

  ${({ inputMode }) =>
    inputMode === 'reviseModal' &&
    css`
      width: 26rem;
    `}
`;

export const Selectt = styled.select<InputProps>`
  ${commonInputStyle}
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  font-size: var(--large-font-size);
`;

export const InputName = styled.p`
  margin-top: 3.7rem;
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  margin-bottom: 1rem;
`;

export const SelectLabel = styled.label`
  display: none;
`;

export const InputWrapper = styled.div`
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  position: relative;
`;

export const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
