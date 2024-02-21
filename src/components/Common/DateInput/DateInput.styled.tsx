import styled, { css } from 'styled-components';

interface InputProps {
  form?: boolean;
  width?: number;
}

const commonInputStyle = css<InputProps>`
  width: 221px;
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
      margin: 15px 0;
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
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  margin-bottom: 9px;
`;

export const InputWrapper = styled.div`
  color: var(--text-color-main);
  font-size: var(--small-font-size);
  margin-top: 3.7rem;
`;