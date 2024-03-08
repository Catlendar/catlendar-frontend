import styled, { css } from 'styled-components';

interface InputProps {
  form?: boolean;
  width?: number;
}
interface InputWrapperProps {
  margin?: number;
}

const commonInputStyle = css<InputProps>`
  border: none;
  border-bottom: 1px solid var(--input-bb);
  background: none;
  color: var(--color-black);
  padding-bottom: 10px;
  margin-right: 18px;
  margin-top: 11px;
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
`;

export const Select = styled.select<InputProps>`
  ${commonInputStyle}
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
`;

export const InputName = styled.p`
  margin-top: 3.7rem;
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  color: var(--text-color-main);
  font-size: var(--small-font-size);
`;
