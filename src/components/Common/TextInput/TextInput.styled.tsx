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
  border-bottom: 1px solid var(--input-bb);
  background: none;
  color: var(--color-black);
  padding-bottom: 10px;
  margin-top: 10px;
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
    border-bottom: 1px solid var(--bg-color-main);
  }
`;

export const Input = styled.input<InputProps>`
  ${commonInputStyle}
  width: 330px;
  ${({ inputMode }) =>
    inputMode === 'reviseModal' &&
    css`
      width: 260px;
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
`;
