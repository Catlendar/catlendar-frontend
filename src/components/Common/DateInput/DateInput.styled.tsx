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
  border-bottom: 0.1rem solid var(--input-bb);
  background: none;
  color: var(--color-black);
  padding-bottom: 1rem;
  margin-right: 1.8rem;
  margin-top: 1.1rem;
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
`;

export const Select = styled.select<InputProps>`
  ${commonInputStyle}
  width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
`;

export const InputName = styled.p`
  margin-top: 0.37rem;
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  margin-bottom: 0.1rem;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  color: var(--text-color-main);
  font-size: var(--small-font-size);
`;
